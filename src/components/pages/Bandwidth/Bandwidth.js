import React from 'react';
import styled from 'styled-components';
import AnimatedTitle from '../../UI/AnimatedTitle';
import { VUE } from '../../../store/actions/index';
import SVG from 'react-inlinesvg';
import { Title, Description, ChartTitle, ChartUnderline } from "../../style/heading";
import { ContainerTitle } from "../../style/containers";
import { BoxPosed } from "../../style/animation";

const Container = styled(ContainerTitle)`
    max-width: 585px;
    z-index: 16;
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
            desc: '…il n’y a pas que les mails. Le trafic d’Internet est divisé en plusieurs usages et chacun est propulsé par différents services. Ces services sont pour certains alimentés par de l’énergie fossile.',
            hasMore: true
        };
        this.discoverHandler = this.discoverHandler.bind(this);
    }

    componentDidMount(){
        setTimeout(() => this.setState({txt: 'Mais...'}), 1700);
    }

    discoverHandler(){
        this.props.changeVue(VUE.TRAFIC_SERV);
        this.setState({hasMore: false})
    }

    render(){
        return (
            <Container>
                <BoxPosed>
                    <Title>
                        <AnimatedTitle size={48} weight="bold">
                            {this.state.txt}
                        </AnimatedTitle>
                    </Title>
                    <TitleUnderline src="./assets/svg/wave-but.svg"/>
                    <StyledDescription>
                        {this.state.desc}
                    </StyledDescription>
                </BoxPosed>

                <BoxPosed pose={this.state.hasMore ? 'enter' : 'exit'}>
                    <MoreContainer>
                        <MoreUnderline src="./assets/svg/wave-underline.svg"/>
                        <BtnMore onClick={this.discoverHandler}>
                            VOIR
                            <Arrow className="arrow" src="./assets/svg/arrow.svg"/>
                        </BtnMore>
                    </MoreContainer>
                </BoxPosed>


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
