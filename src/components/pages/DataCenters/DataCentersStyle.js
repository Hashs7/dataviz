import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import AnimatedShape from '../../UI/Shape';

export const Title = styled.div`
    font: 48px "Cera Basic", sans-serif;
`;

export const TitleUnderline = styled(SVG)`
    display: block;
    width: 230px;
`;

export const Description = styled.p`
    font: 20px 'Demos Next Pro';
    line-height: 1.6;
`;

export const PieChartTitle = styled.p`
    font: 28px 'Cera Basic';
    font-weight: bold;
    line-height: 1.25;
`;

export const PieChartUnderline = styled(SVG)`
    display: block;
    width: 110px;
`;

export const Container = styled.div`
    position: relative;
    text-align: left;
    z-index: 6;
    margin: 110px 0 0 200px;
    max-width: 440px;
    & polyline{
        stroke: #000;
    }
`;

export const SVGWaves = styled(SVG)`
    position: absolute;
    width: 318px;
    height: 250px;
    z-index: 2;
    bottom: 200px;
    left: 500px;
`;

export const SVGDot = styled(SVG)`
    position: absolute;
    top: -3px;
    left: -15px;
    display: block;
    width: 71vh;
    max-height: 928px;
    z-index: 3;
`;

export const ComputerContainer = styled.div`
    width: 335px;
    height: 265px;
    position: absolute;
    bottom: 130px;
    right: 32%;
`;

export const ComputerSubContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const Computer = styled(SVG)`
    position: absolute;
    width: 240px;
    bottom: 0;
    left: 0;
    z-index: 4;
`;

export const CloudContainer = styled.div`
    position: absolute;
    top: 130px;
    right: -100px;
    height: 49%;
    width: 83vh;
    z-index: 5;
`;

export const CloudBefore = styled(AnimatedShape)`
    position: absolute;
    top: 130px;
    right: -100px;
    height: 49%;
    width: 83vh;
    z-index: 4;
`;

export const Cloud = styled(SVG)`
    width: 100%;
    height: 100%;
`;

export const Wifi = styled(SVG)`
    position: absolute;
    top: 0;
    right: 0;
    width: 118px;
    transform: rotate(20deg);
    z-index: 3;
`;

export const LegendContainer = styled.div`
    position: absolute;
    font-size: 24px;
    font-weight: bold;
    opacity: ${props => props.visible ? '1' : '0'}
    transition: opacity .2s ease-in-out;
`;

export const LegendUnderline = styled(SVG)`
    display: block;
    width: 230px;
`;

export const LegendComputer = styled(LegendContainer)`
    width: 335px;
    right: 115px;
    bottom: 48px;
    text-align: right;
    transform: translateX(100%);
`;

export const LegendWifi = styled(LegendContainer)`
    width: 345px;
    top: 38px;
    right: 65px;
    text-align: right;
    transform: translateX(100%);
`;

export const LegendCloud = styled(LegendContainer)`
    top: 100px;
    right: 750px;
    z-index: 10;
    text-align: left;
`;
