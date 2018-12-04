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

const AnimatedTitle = ({size, weight, children}) => {
    const Title = styled.h2`
        font-size: ${size}px;
        font-weight: ${weight};
    `;
    return (
        <Title>
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                {children}
            </SplitText>
        </Title>
    );
};

export default AnimatedTitle;
