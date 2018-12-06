import React from 'react';
import AnimatedShape from '../../UI/Shape';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import {DIRECTION} from "../../../constantes";

const SVGDot = styled(SVG)`
    position: absolute;
    max-width: 487px;
    width: 25%;
    height: 723px;
    bottom: -3px;
    right: -3px;
    z-index: 4;
`;

const Letters = styled(SVG)`
    position: absolute;
    width: 316px;
    height: 305px;
    top: 60px;
    left: 715px;
    z-index: 4;
`;

const DataCentersLayout = ({ vueIndex }) => {
    return (
        <div>
            <SVGDot src="./assets/svg/shapes/vue-3/shape-dot.svg" />
            <Letters src="./assets/svg/shapes/vue-3/letters.svg" />

            <AnimatedShape
                in={vueIndex === 4 || vueIndex === 5}
                src="./assets/svg/shapes/vue-3/shape-green.svg"
                direction={DIRECTION.BOTTOM_LEFT}
                maxWidth="983px"
                maxHeight="683px"
                width="65%"
                height="63vh"
                bottom="-3px"
                left="-3px"
                z-index={2}
            />

            <AnimatedShape
                in={vueIndex === 4 || vueIndex === 5}
                src="./assets/svg/shapes/vue-3/shape-blue.svg"
                direction={DIRECTION.BOTTOM_RIGHT}
                maxWidth="1192px"
                maxHeight="683px"
                width="62%"
                height="17vw"
                bottom="-8px"
                right="-3px"
                zIndex={4}
            />
        </div>
    );
};

export default DataCentersLayout;
