import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import AnimatedShape from '../../UI/Shape';

export const CloudPath = styled.svg`
    position: absolute;
    top: -22px;
    right: 22px;
    z-index: 16;
    max-width: 950px;
    width: 83vh;
`;

export const TitleUnderline = styled(SVG)`
    display: block;
    width: 230px;
`;

export const Container = styled.div`
    position: relative;
    text-align: left;
    z-index: 14;
    margin: 110px 0 0 200px;
    max-width: 440px;
    & polyline{
        stroke: #000;
    }
    @media (max-height: 1060px) {
        margin: 50px 0 0 200px;
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
    z-index: 15;
`;

export const CloudRelativeContainer = styled.div`
    position: relative;
`;

export const CloudContainer = styled.div`
    position: absolute;
    top: 130px;
    right: -100px;
    height: 49%;
    width: 83vh;
    z-index: 14;
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
    position: relative;
    z-index: 15;
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
`;

export const BtnScissors = styled.button`
    cursor: pointer;
    position: absolute;
    left: 304px;
    top: 0;
    transform: rotate(-125deg);
    width: 38px;
    height: 34px;
    z-index: 16;
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
    top: 120px;
    left: -80px;
    z-index: -1;
    text-align: left;
`;
