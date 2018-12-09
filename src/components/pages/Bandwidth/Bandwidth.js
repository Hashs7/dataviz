import React from 'react';
import styled from 'styled-components';
import AnimatedTitle from '../../UI/AnimatedTitle';
import { VUE } from '../../../store/actions/index';
import SVG from 'react-inlinesvg';
import { Title, Description, ChartTitle, ChartUnderline } from "../../style/heading";

const Container = styled.div`
    max-width: 585px;
    position: relative;
    z-index: 4;
    margin: 110px 0 0 200px;
    text-align: left;
`;

const TitleUnderline = styled(SVG)`
    display: block;
    width: 150px;
`;

const StyledDescription = styled(Description)`
    max-width: 420px;
`;

const Arrow = styled(SVG)`
    display: block;
    margin: 6px auto 0 auto;
    width: 20px;
`;

const BtnMore = styled.button`
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Cera Basic', sans-serif;
    & .arrow{
        transition: transform .25s ease;
    }
    &:hover .arrow{
        transform: translateY(6px);
    }
`;

const MoreContainer = styled.div`
    width: 230px;
    text-align: center;
    margin: 35px 0 0 80px;
`;

const MoreUnderline = styled(SVG)`
    display:block
    margin-bottom: 8px;
    height: 7px;
`;


class Bandwidth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            txt: '',
            desc: '…il n’y a pas que les mails. Le trafic d’Internet est constitué d’un large spectre de catégories et chacune est propulsée par différents services. Ces services sont pour certains opérés à l’aide d’énergie fossile.'
        };
        this.discoverHandler = this.discoverHandler.bind(this);
    }

    componentDidMount(){
        setTimeout(() => this.setState({txt: 'Mais...'}), 1700);
    }

    discoverHandler(){
        this.props.changeVue(VUE.TRAFIC_SERV);
    }

    render(){
        return (
            <Container>
                <Title>
                    <AnimatedTitle size={48} weight="bold">
                        {this.state.txt}
                    </AnimatedTitle>
                </Title>

                <TitleUnderline src="./assets/svg/wave-underline-double.svg"/>
                <StyledDescription>
                    {this.state.desc}
                </StyledDescription>
                {this.props.vueIndex === VUE.TRAFIC_BW ?
                <MoreContainer>
                    <MoreUnderline src="./assets/svg/wave-underline.svg"/>
                    <BtnMore onClick={() => this.props.changeVue(VUE.TRAFIC_SERV)}>
                        VOIR
                        <Arrow className="arrow" src="./assets/svg/arrow.svg"/>
                    </BtnMore>
                </MoreContainer>
                : null}


                {this.props.vueIndex === VUE.TRAFIC_SERV ?
                    <ChartTitle>
                        Énergies employées dans le fonctionnement<br/>de… (2017)
                        <ChartUnderline src="./assets/svg/wave-line-right.svg"/>
                    </ChartTitle>
                : null}


            </Container>
        );
    }
}

export default Bandwidth;
