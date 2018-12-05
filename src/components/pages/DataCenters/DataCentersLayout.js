import React from 'react';
import AnimatedShape from '../../UI/Shape';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import {STUFF} from "../../../constantes";

const SVGDot = styled(SVG)`
    position: absolute;
    top: -3px;
    left: -3px;
    width: 754px;
    height: 928px;
    z-index: 3;
`;

const ComputerContainer = styled.div`
    width: 335px;
    height: 265px;
    position: absolute;
    bottom: 130px;
    right: 32%;
`;

const ComputerSubContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const Computer = styled(SVG)`
    position: absolute;
    width: 240px;
    bottom: 0;
    left: 0;
    z-index: 3;
`;

const CloudContainer = styled.div`
    position: absolute;
    top: 130px;
    right: -100px;
    height: 49%;
    width: 83vh;
    z-index: 5;
`;

const CloudBefore = styled(SVG)`
    position: absolute;
    top: 130px;
    right: -100px;
    height: 49%;
    width: 83vh;
    z-index: 3;
`;

const Cloud = styled(SVG)`
    width: 100%;
    height: 100%;
`;

const Wifi = styled(SVG)`
    position: absolute;
    top: 0;
    right: 0;
    width: 118px;
    transform: rotate(20deg);
    z-index: 3;
`;

const LegendContainer = styled.div`
    position: absolute;
    font-size: 24px;
    font-weight: bold;
    opacity: ${props => props.visible ? '1' : '0'}
    transition: opacity .2s ease-in-out;
`;

const LegendUnderline = styled(SVG)`
    display: block;
    width: 230px;
`;

const LegendComputer = styled(LegendContainer)`
    width: 335px;
    right: 115px;
    bottom: 48px;
    text-align: right;
    transform: translateX(100%);
`;

const LegendWifi = styled(LegendContainer)`
    width: 345px;
    top: 38px;
    right: 65px;
    text-align: right;
    transform: translateX(100%);
`;

const LegendCloud = styled(LegendContainer)`
    top: 100px;
    right: 750px;
    z-index: 10;
    text-align: left;
`;


const DataCentersLayout = ({ vueIndex, stuffHover }) => {
    return (
        <div>
            <SVGDot src="./assets/svg/shapes/vue-2/shape-dot.svg" />
            <ComputerContainer>
                <ComputerSubContainer>
                    <Computer src="./assets/svg/computer.svg" />
                    <LegendComputer visible={stuffHover === STUFF.PERSO}>
                        Equipements personnels
                        <LegendUnderline src="./assets/svg/wave-underline.svg"/>
                    </LegendComputer>
                    <Wifi src="./assets/svg/wifi.svg" />
                    <LegendWifi visible={stuffHover === STUFF.RESEAU}>
                        Infrastructures réseaux
                        <LegendUnderline src="./assets/svg/wave-underline.svg"/>
                    </LegendWifi>
                </ComputerSubContainer>
            </ComputerContainer>

            {vueIndex === 2 ?
                <CloudBefore src="./assets/svg/shapes/vue-2/cloud.svg" /> :
                <CloudContainer>
                    <Cloud src="./assets/svg/shapes/vue-2/cloud-after.svg" />
                    <LegendCloud visible={stuffHover === STUFF.DATA}>
                        Data centers
                        <LegendUnderline src="./assets/svg/wave-underline.svg"/>
                    </LegendCloud>
                </CloudContainer>
            }

            <AnimatedShape
                in={vueIndex === 2 || vueIndex === 3}
                src="./assets/svg/shapes/vue-2/shape-orange.svg"
                maxWidth="1052px"
                width="55%"
                height="274px"
                top="-3px"
                right="-3px"
                zIndex="2"
            />
        </div>
    );
};

export default DataCentersLayout;
