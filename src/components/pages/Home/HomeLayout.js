import React from 'react';
import AnimatedShape from "../../UI/Shape";
import {DIRECTION} from "../../../constantes";

const HomeLayout = (props) => {
    return (
        <div>
            <AnimatedShape
                in={props.in}
                src="./assets/svg/shapes/vue-1/shape-blue-left.svg"
                direction={DIRECTION.BOTTOM_LEFT}
                maxWidth="870px"
                width="45%"
                height="17vw"
                bottom="-3px"
                left="-3px"
            />
            <AnimatedShape
                in={props.in}
                src="./assets/svg/shapes/vue-1/shape-orange-top.svg"
                direction={DIRECTION.TOP_LEFT}
                maxWidth="1045px"
                width="55%"
                height="270px"
                top="-3px"
                left="-3px"
            />
            <AnimatedShape
                in={props.in}
                src="./assets/svg/shapes/vue-1/shape-blue-right.svg"
                direction={DIRECTION.TOP_RIGHT}
                maxWidth="1050px"
                width="55%"
                height="455px"
                top="-3px"
                right="-3px"
                zIndex="5"
            />

        </div>
    );
};

export default HomeLayout;
