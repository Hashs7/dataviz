import React from 'react';
import AnimatedShape from '../../UI/Shape';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

const SVGDot = styled(SVG)`
    position: absolute;
    top: -3px;
    left: -3px;
    width: 754px;
    height: 928px;
    z-index: 3;
`;



const DataCentersLayout = ({ vueIndex }) => {
    return (
        <div>

            <AnimatedShape
                in={vueIndex === 4 || vueIndex === 5}
                src="./assets/svg/shapes/vue-3/shape-dot.svg"
                maxWidth="487px"
                width="25%"
                height="723px"
                bottom="-3px"
                right="-3px"
                zIndex="3"
            />

            <AnimatedShape
                in={vueIndex === 4 || vueIndex === 5}
                src="./assets/svg/shapes/vue-3/shape-green.svg"
                maxWidth="983px"
                width="51%"
                height="683px"
                bottom="-3px"
                left="-3px"
                zIndex="2"
            />

            <AnimatedShape
                in={vueIndex === 4 || vueIndex === 5}
                src="./assets/svg/shapes/vue-3/shape-blue.svg"
                maxWidth="1192px"
                width="62%"
                height="340px"
                bottom="-8px"
                right="-3px"
                zIndex="4"
            />
        </div>
    );
};

export default DataCentersLayout;
