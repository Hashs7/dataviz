import React from 'react';
import AnimatedShape from '../../UI/Shape';
import { DIRECTION } from "../../../constantes";
import styled from "styled-components";
import PieChartBWContainer from "../../../containers/PieChartBWContainer";
import { ChartTitle, ChartUnderline } from '../../style/heading';
import SVG from 'react-inlinesvg';
import { BoxPosed } from "../../style/animation";
import { VUE } from "../../../store/actions";
import { isVue } from "../../../methods";
import posed from "react-pose";

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 15;
    margin: auto;
    top: 0;
    bottom: 0;
    padding: 95px 95px 95px 150px;
    box-sizing: border-box;
    display: ${props => props.isVisible ? 'block' : 'none'};
`;

const PieChartTitle = styled(ChartTitle)`
    position: absolute;
    z-index: 14;
    top: 536px;
    right: 200px;
`;

const PieChartUnderline = styled(ChartUnderline)`
    margin: 0 0 0 auto;
`;

const LogoContainer = styled.ul`
    position: absolute;
    left: 200px;
    bottom: 118px;
    z-index: 15
`;

const LogoService = styled.li`
    margin: 28px 0;
    width: 50px;
    height: 50px;
    &:first-child{ 
        margin-top: 0;
    }
    &:last-child{ 
        margin-bottom: 0;
    }
`;

const Logo = styled(SVG)`
    width: 100%;
    height: 100%;
`;

const LogoPosed = posed.div({
    enter: {
        opacity: 1,
        transition: {
            opacity: { type: 'tween', duration: 200},
        }
    },
    exit: {
        opacity: 0,
        applyAtEnd: { display: 'none' },
        transition: {
            duration: 200,
            opacity: { type: 'tween' },
        }
    }
});

class BandwidthLayout extends React.Component {
    constructor(props){
        super(props);
        this.width = 0;
        this.height = 0;
    }

    componentWillMount(){
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }

    render(){
        const { vueIndex } = this.props;
        const { TRAFIC_BW, TRAFIC_SERV } = VUE;

        return (
            <div ref="svg" className="BandwidthLayout">
                <AnimatedShape
                    in={isVue(vueIndex, [TRAFIC_BW, TRAFIC_SERV])}
                    delay={.7}
                    src="./assets/svg/shapes/vue-4/shape-wave.svg"
                    direction={DIRECTION.RIGHT}
                    width="370px"
                    height="175px"
                    bottom="90px"
                    right="132px"
                    zIndex={2}
                />

                <AnimatedShape
                    in={isVue(vueIndex, [TRAFIC_BW, TRAFIC_SERV])}
                    delay={.8}
                    src="./assets/svg/shapes/vue-4/shape-line.svg"
                    direction={DIRECTION.TOP_LEFT}
                    width="490px"
                    height="255px"
                    top="-3px"
                    left="380px"
                    zIndex={20}
                />

                <AnimatedShape
                    in={isVue(vueIndex, [TRAFIC_BW, TRAFIC_SERV])}
                    delay={.8}
                    src="./assets/svg/shapes/vue-4/shape-green.svg"
                    direction={DIRECTION.TOP_RIGHT}
                    width="530px"
                    height="670px"
                    top="-3px"
                    right="-3px"
                    zIndex={4}
                />

                <Container isVisible={isVue(vueIndex, [TRAFIC_BW, TRAFIC_SERV]) }>
                    <PieChartBWContainer width={this.width} height={this.height} enter={isVue(vueIndex, [TRAFIC_BW, TRAFIC_SERV])}/>
                    {isVue(vueIndex, [TRAFIC_BW, TRAFIC_SERV]) ?
                        <LogoPosed pose={isVue(vueIndex, [TRAFIC_SERV]) ? 'enter' : 'exit'}>
                            <LogoContainer>
                                <LogoService>
                                    <Logo src="./assets/svg/logo/amazon.svg"/>
                                </LogoService>
                                <LogoService>
                                    <Logo src="./assets/svg/logo/yt.svg"/>
                                </LogoService>
                                <LogoService>
                                    <Logo src="./assets/svg/logo/netflix.svg"/>
                                </LogoService>
                                <LogoService>
                                    <Logo src="./assets/svg/logo/fb.svg"/>
                                </LogoService>
                            </LogoContainer>
                        </LogoPosed>
                    :null}
                </Container>


                <BoxPosed pose={isVue(vueIndex, [TRAFIC_BW, TRAFIC_SERV]) ? 'enter' : 'exit'}>
                    <PieChartTitle>
                        Trafic internet mondial descendant
                        <PieChartUnderline src="./assets/svg/wave-line-right.svg"/>
                    </PieChartTitle>
                </BoxPosed>
            </div>
        );
    }

}

export default BandwidthLayout;
