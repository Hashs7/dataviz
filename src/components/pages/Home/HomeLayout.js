import React from 'react';
import AnimatedShape from "../../UI/Shape";
import ScalingShape from "../../UI/ScalingShape";
import { DIRECTION } from "../../../constantes";

const HomeLayout = (props) => {
    return (
        <div>
            <AnimatedShape
                in={props.in}
                duration={2.3}
                delay={0.5}
                src="./assets/svg/shapes/vue-1/shape-dot.svg"
                direction={DIRECTION.BOTTOM_RIGHT}
                width="445px"
                height="370px"
                bottom="-7px"
                right="-3px"
                zIndex={15}
            />

            <AnimatedShape
                in={props.in}
                delay={1.2}
                src="./assets/svg/shapes/vue-1/shape-line.svg"
                direction={DIRECTION.TOP_LEFT}
                width="545px"
                height="420px"
                top="-3px"
                left="-3px"
                zIndex={5}
            />

            <AnimatedShape
                in={props.in}
                delay={0.5}
                src="./assets/svg/shapes/vue-1/shape-wave.svg"
                direction={DIRECTION.TOP_RIGHT}
                width="365px"
                height="203px"
                top="11vw"
                right="10vw"
            />

            <ScalingShape
                in={props.in}
                src="./assets/svg/shapes/vue-1/shape-blue-left.svg"
                direction={DIRECTION.BOTTOM_LEFT}
                maxWidth="870px"
                width="35%"
                height="17vw"
                bottom="-3px"
                left="-3px"
            />

            <ScalingShape
                in={props.in}
                src="./assets/svg/shapes/vue-1/shape-orange-top.svg"
                direction={DIRECTION.TOP_LEFT}
                maxWidth="1045px"
                width="55%"
                height="270px"
                top="-3px"
                left="-3px"
            />

            <ScalingShape
                in={props.in}
                src="./assets/svg/shapes/vue-1/shape-blue-right.svg"
                direction={DIRECTION.TOP_RIGHT}
                maxWidth="1050px"
                width="55%"
                height="455px"
                top="-3px"
                right="-3px"
                zIndex={15}
            />
        </div>
    );
};

export default HomeLayout;
