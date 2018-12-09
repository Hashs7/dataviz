import React from 'react';
import styled from 'styled-components';
import AnimatedTitle from '../../UI/AnimatedTitle';
import { VUE } from '../../../store/actions/index';
import SVG from 'react-inlinesvg';

const Container = styled.div`
    max-width: 585px;
    position: relative;
    z-index: 4;
    margin: 110px 0 0 200px;
    text-align: left;
`;

const Title = styled.div`
    font: 48px "Cera Basic", sans-serif;
`;

const TitleUnderline = styled(SVG)`
    display: block;
    width: 150px;
`;

const Description = styled.p`
    max-width: 420px;
    font: 20px 'Demos Next Pro';
    line-height: 1.6;
`;


export const BarChartTitle = styled.p`
    font: 28px 'Cera Basic';
    font-weight: bold;
    line-height: 1.25;
`;

export const PieChartUnderline = styled(SVG)`
    display: block;
    width: 110px;
    height: 10px;
`;

class Bandwidth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            txt: '',
            desc: '…il n’y a pas que les mails. Le trafic d’Internet est constitué d’un large spectre de catégories et chacune est propulsée par différents services. Ses services sont pour certains opérés à l’aide d’énergie fossile.'
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
                <Description>
                    {this.state.desc}
                </Description>
                <button onClick={() => this.props.changeVue(VUE.TRAFIC_SERV)}>Voir</button>

                {this.props.vueIndex === VUE.TRAFIC_SERV ?
                    <BarChartTitle>
                        Énergies employées dans le fonctionnement<br/>de… (2017)
                        <PieChartUnderline src="./assets/svg/wave-line-right.svg"/>
                    </BarChartTitle>
                : null}


            </Container>
        );
    }
}

export default Bandwidth;
