import React from 'react';
import AnimatedShape from '../../UI/Shape';
import { DIRECTION } from "../../../constantes";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import {isVue} from "../../../methods";
import {VUE} from "../../../store/actions";
import {BoxOpacity} from "../../style/animation";

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
        <BoxOpacity pose={isVue(vueIndex, [FUTUR]) ? 'visibleDelay' : 'hidden'}>
            <ElectricPole src="./assets/svg/shapes/vue-5/electric-pole.svg" />
        </BoxOpacity>

        <AnimatedShape
            in={isVue(vueIndex, [FUTUR])}
            delay={2}
            src="./assets/svg/shapes/vue-5/shape-orange.svg"
            direction={DIRECTION.BOTTOM_RIGHT}
            width="665px"
            height="450px"
            bottom="-3px"
            right="-3px"
            zIndex={2}
        />

        <AnimatedShape
            in={isVue(vueIndex, [FUTUR])}
            delay={1.8}
            src="./assets/svg/shapes/vue-5/shape-green.svg"
            direction={DIRECTION.LEFT}
            maxWidth="1110px"
            minWidth="1000px"
            width="65%"
            bottom="-3px"
            left="-3px"
            zIndex={2}
        />

        <AnimatedShape
            in={isVue(vueIndex, [FUTUR])}
            delay={2}
            src="./assets/svg/shapes/vue-5/shape-wave.svg"
            direction={DIRECTION.RIGHT}
            width="420px"
            height="160px"
            top="18px"
            left="30%"
            zIndex={2}
        />

        <AnimatedShape
            in={isVue(vueIndex, [FUTUR])}
            delay={2}
            src="./assets/svg/shapes/vue-5/shape-dot.svg"
            direction={DIRECTION.LEFT}
            width="300px"
            height="600px"
            bottom="-3px"
            left="-3px"
            zIndex={3}
        />
    </div>
);

export default EnergyLayout;
