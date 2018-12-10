import React from 'react';
import styled from 'styled-components';
import AnimatedTitle from '../../UI/AnimatedTitle';
import { VUE } from '../../../store/actions/index';
import SVG from 'react-inlinesvg';
import { theme } from '../../../constantes';
import LineChart from '../../charts/LineChart';
import { ChartTitle, ChartUnderline } from "../../style/heading";

const Container = styled.div`
    max-width: 595px;
    position: relative;
    z-index: 4;
    margin: 110px 0 0 200px;
    text-align: left;
    color: #fff;
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


const Color = styled.span`
    color: ${theme.color.blue};
`;


class Energy extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            txt: '',
            desc: ''
        };
        this.discoverHandler = this.discoverHandler.bind(this);
    }

    componentDidMount(){
        setTimeout(() => this.setState({
            txt: 'Une situation qui empire ?',
            desc: 'Internet est aujourd’hui omniprésent dans notre quotidien\n' +
                'Mais, avec l’émergence de technologies comme la voiture \n' +
                'autonome ou les objets connectés, sa part énergétique\n' +
                'risque de prendre encore plus d’importance.'
        }), 1700);
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

                <LineChart enter={true}/>

                <ChartTitle>
                    Part de l'électricité mondiale consommée par <Color>Internet</Color> au fil des années
                    <ChartUnderline src="./assets/svg/wave-line-right.svg"/>
                </ChartTitle>

            </Container>
        );
    }
}

export default Energy;
