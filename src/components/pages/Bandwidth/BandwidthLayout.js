import React from 'react';
import AnimatedShape from '../../UI/Shape';
import { DIRECTION, STUFF } from "../../../constantes";
import styled from "styled-components";
import PieChartBWContainer from "../../../containers/PieChartBWContainer";
import { ChartTitle, ChartUnderline } from '../../style/heading';

const Container = styled.svg`
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
    margin: auto;
    top: 0;
    bottom: 0;
    padding: 95px 95px 95px 150px;
    box-sizing: border-box;
`;

const PieChartTitle = styled(ChartTitle)`
    position: absolute;
    z-index: 4;
    top: 560px;
    right: 200px;
`;

const PieChartUnderline = styled(ChartUnderline)`
    margin: 0 0 0 auto;
`;

class BandwidthLayout extends React.Component {
    constructor(props){
        super(props);
        this.width = 0;
    }

    componentWillMount(){
        this.width = window.innerWidth;
    }


    render(){
        const { vueIndex, stuffHover } = this.props;
        //TODO changer la forme waves
        return (
            <div ref="svg">
                <Container>
                    <AnimatedShape
                        in={vueIndex === 2}
                        delay={2.3}
                        src="./assets/svg/shapes/vue-2/shape-wave.svg"
                        direction={DIRECTION.BOTTOM_LEFT}
                        width="318px"
                        height="250px"
                        bottom="200px"
                        left="500px"
                        zIndex={2}
                    />
                    <PieChartBWContainer width={this.width} />

                </Container>
                <PieChartTitle>
                    Trafic internet descendant mondial
                    <PieChartUnderline src="./assets/svg/wave-line-right.svg"/>
                </PieChartTitle>
            </div>
        );
    }

}

export default BandwidthLayout;
