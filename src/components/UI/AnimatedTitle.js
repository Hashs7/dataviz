import React from 'react';
import SplitText from "react-pose-text";
import styled from "styled-components";

const charPoses = {
    exit: {
        opacity: 0,
        y: 10,
        rotate: 10
    },
    enter: {
        opacity: 1,
        y: 0,
        rotate: 0,
        delay: ({ charIndex }) => charIndex * 50
    }
};

const Title = styled.h2`
    font-size: ${props => props.size}px;
    font-weight: ${props => props.weight};
    backface-visibility: hidden;
`;

const AnimatedTitle = ({size, weight, colored, children}) => {
    return (
        <Title size={size} weight={weight} className={colored ? 'coloredTitle' : ''}>
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                {children}
            </SplitText>
        </Title>
    );
};

export default AnimatedTitle;
