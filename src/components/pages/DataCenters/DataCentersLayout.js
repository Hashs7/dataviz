import React from 'react';
import AnimatedShape from '../../UI/Shape';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

const SVGDot2 = styled(SVG)`
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

const Cloud = styled(SVG)`
    position: absolute;
    top: 130px;
    right: -100px;
    height: 49%;
    width: 83vh;
    z-index: 3;
`;

const Wifi = styled(SVG)`
    position: absolute;
    top: 0;
    right: 0;
    width: 118px;
    transform: rotate(20deg);
    z-index: 3;
`;

const DataCentersLayout = (props) => {
    return (
        <div>
            <SVGDot2 src="./assets/img/svg/shapes/vue-2/shape-dot.svg" />
            <ComputerContainer>
                <ComputerSubContainer>
                    <Computer src="./assets/img/svg/computer.svg" />
                    <Wifi src="./assets/img/svg/wifi.svg" />
                </ComputerSubContainer>
            </ComputerContainer>
            <Cloud src="./assets/img/svg/shapes/vue-2/cloud.svg" />
            <AnimatedShape
                in={props.in}
                src="./assets/img/svg/shapes/vue-2/shape-orange.svg"
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
