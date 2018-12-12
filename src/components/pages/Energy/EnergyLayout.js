import React from 'react';
import AnimatedShape from '../../UI/Shape';
import { DIRECTION } from "../../../constantes";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import { isVue } from "../../../methods";
import { VUE } from "../../../store/actions";
import { BoxPosed } from "../../style/animation";
import OpacityShape from "../../UI/OpacityShape";

export const ElectricPole = styled(SVG)`
    position: absolute;
    bottom: 64px;
    left: 312px;
    width: 640px;
    height: 425px;
    z-index: 1;
`;

const { FUTUR } = VUE;

const EnergyLayout = ({ vueIndex }) => (
    <div>
        <AnimatedShape
            in={isVue(vueIndex, [FUTUR])}
            delay={2.5}
            src="./assets/svg/shapes/vue-5/electric-pole.svg"
            direction={{x: 0, y: '160%'}}
            width="640px"
            height="425px"
            bottom="64px"
            left="312px"
            zIndex={1}
        />

        <AnimatedShape
            in={isVue(vueIndex, [FUTUR])}
            delay={.5}
            src="./assets/svg/shapes/vue-5/shape-green.svg"
            direction={DIRECTION.LEFT}
            maxWidth="1110px"
            minWidth="1000px"
            width="65%"
            bottom="-3px"
            left="-3px"
            zIndex={2}
        />

        <OpacityShape
            in={isVue(vueIndex, [FUTUR])}
            delay={1}
            src="./assets/svg/shapes/vue-5/shape-wave.svg"
            direction={DIRECTION.LEFT}
            width="420px"
            height="160px"
            top="18px"
            left="30%"
            zIndex={2}
        />

        <AnimatedShape
            in={isVue(vueIndex, [FUTUR])}
            delay={.7}
            src="./assets/svg/shapes/vue-5/shape-dot.svg"
            direction={DIRECTION.LEFT}
            width="265px"
            bottom="-3px"
            left="-3px"
            zIndex={3}
        />
    </div>
);

export default EnergyLayout;
