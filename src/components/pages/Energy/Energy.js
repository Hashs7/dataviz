import React from 'react';
import styled from 'styled-components';
import AnimatedTitle from '../../UI/AnimatedTitle';
import { VUE } from '../../../store/actions/index';
import SVG from 'react-inlinesvg';
import { theme } from '../../../constantes';
import LineChart from '../../charts/LineChart';
import { ChartTitle, ChartUnderline, Title, Description } from "../../style/heading";
import { ContainerTitle } from "../../style/containers";
import { BoxPosed } from "../../style/animation";

const ChartContainer = styled.div`
    max-width: 560px;
    position: absolute;
    top: 140px;
    right: 90px;
    text-align: left;
`;

const Container = styled(ContainerTitle)`
    max-width: 595px;
    color: #fff;
    margin-left: 130px !important;
`;

const TitleUnderline = styled(SVG)`
    display: block;
`;

const StyledDescription = styled(Description)`
    max-width: 550px;
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
            desc: 'Internet est aujourd’hui omniprésent dans notre quotidien.\n' +
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
            <BoxPosed>
                <Container>
                    <Title>
                        <AnimatedTitle size={48} weight="bold">
                            {this.state.txt}
                        </AnimatedTitle>
                    </Title>
                    <TitleUnderline src="./assets/svg/wave-underline-long.svg"/>
                    <StyledDescription>
                        {this.state.desc}
                    </StyledDescription>
                </Container>

                <ChartContainer>
                    <LineChart enter={true}/>

                    <ChartTitle>
                        Part de l'électricité mondiale consommée par <Color>Internet</Color> au fil des années
                        <ChartUnderline src="./assets/svg/wave-line-right.svg"/>
                    </ChartTitle>
                </ChartContainer>
            </BoxPosed>
        );
    }
}

export default Energy;
