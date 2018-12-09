import React from 'react';
import AnimatedShape from '../../UI/Shape';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { DIRECTION } from "../../../constantes";
import { isVue } from "../../../methods";
import { VUE } from "../../../store/actions";
import {BoxOpacity} from "../../style/animation";

const Letters = styled(SVG)`
    position: absolute;
    width: 316px;
    height: 305px;
    top: 60px;
    left: 66vh;
    z-index: 4;
`;

const MailLayout = ({ vueIndex }) => {
    const {MAIL_QUANTITY, MAIL_TYPE, MAIL_DATA} = VUE;
    return (
        <div>
            <AnimatedShape
                in={isVue(vueIndex, [MAIL_QUANTITY, MAIL_TYPE, MAIL_DATA])}
                src="./assets/svg/shapes/vue-3/shape-dot.svg"
                direction={DIRECTION.RIGHT}
                delay={2.3}
                maxWidth="487px"
                width="25%"
                height="723px"
                bottom="-3px"
                right="-3px"
                zIndex={4}
            />

            <AnimatedShape
                in={isVue(vueIndex, [MAIL_QUANTITY, MAIL_TYPE, MAIL_DATA])}
                src="./assets/svg/shapes/vue-3/shape-wave.svg"
                direction={DIRECTION.LEFT}
                delay={2.3}
                width="330px"
                height="230px"
                bottom="240px"
                left="41%"
                zIndex={0}
            />
            <BoxOpacity pose={isVue(vueIndex, [MAIL_QUANTITY, MAIL_TYPE, MAIL_DATA]) ? 'visibleDelay' : 'hidden'}>
                <Letters src="./assets/svg/shapes/vue-3/letters.svg" />
            </BoxOpacity>

            <AnimatedShape
                in={isVue(vueIndex, [MAIL_QUANTITY, MAIL_TYPE, MAIL_DATA])}
                src="./assets/svg/shapes/vue-3/shape-green.svg"
                delay={1.2}
                direction={DIRECTION.BOTTOM_LEFT}
                maxWidth="983px"
                maxHeight="683px"
                width="65%"
                height="fit-content"
                bottom="-3px"
                left="-3px"
                z-index={2}
            />

            <AnimatedShape
                in={isVue(vueIndex, [MAIL_QUANTITY, MAIL_TYPE, MAIL_DATA])}
                src="./assets/svg/shapes/vue-3/shape-blue.svg"
                direction={DIRECTION.RIGHT}
                delay={1.5}
                maxHeight="683px"
                minHeight="385px"
                width="64%"
                height="17vw"
                bottom="-8px"
                right="-3px"
                zIndex={4}
            />

        </div>
    );
};

export default MailLayout;
