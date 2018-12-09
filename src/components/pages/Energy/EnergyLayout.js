import React from 'react';
import AnimatedShape from '../../UI/Shape';
import { DIRECTION, STUFF } from "../../../constantes";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import PieChartBWContainer from "../../../containers/PieChartBWContainer";

export const Container = styled.svg`
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

export const SVGWaves = styled(SVG)`
    position: absolute;
    width: 318px;
    height: 250px;
    z-index: 2;
    bottom: 200px;
    left: 500px;
`;

export const PieChartTitle = styled.p`
    position: absolute;
    z-index: 4;
    top: 560px;
    right: 200px;
    font: 28px 'Cera Basic';
    font-weight: bold;
    line-height: 1;
`;

export const PieChartUnderline = styled(SVG)`
    display: block;
    margin-left: auto;
    width: 110px;
    height: 10px;
`;

class EnergyLayout extends React.Component {
    constructor(props){
        super(props);
        this.width = 0;
    }

    componentWillMount(){
        this.width = window.innerWidth;
    }


    render(){
        const { vueIndex, stuffHover } = this.props;

        return (
            <div ref="svg">

                <Container >
                    <SVGWaves src="./assets/svg/shapes/vue-2/shape-wave.svg" />
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

export default EnergyLayout;
