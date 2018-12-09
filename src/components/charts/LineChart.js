import React from 'react';
import { theme } from "../../constantes";
import { VictoryChart, VictoryLine } from 'victory';
import styled from "styled-components";
import Transition from 'react-transition-group/Transition'
import TweenMax, {Power1} from "gsap/TweenMax";

const PieContainer = styled.div`
    width: 550px;
    z-index: 5;
`;

const animate = {
    enter(target) {
        return TweenMax.from(target, 1, {
            opacity: 0,
            ease: Power1.easeOut,
        });
    },
    leave(target) {
        return TweenMax.to(target, 1, {
            opacity: 0,
            ease: Power1.easeOut,
        });
    }
};

const PieChart = (props) => {
    const { enter, changeStuff} = props;
    return (
        <Transition
            in={enter}
            timeout={1500}
            onEnter={ node => animate.enter(node) }
            onExit={ node => animate.leave(node) }
            mountOnEnter
            unmountOnExit
        >
            <PieContainer>
                <VictoryChart>
                    <VictoryLine
                        data={[
                            { x: 2010, y: 10 },
                            { x: 2011, y: 11 },
                            { x: 2012, y: 10 },
                            { x: 2013, y: 10 },
                            { x: 2015, y: 15 },
                            { x: 2021, y: 30 },
                        ]}
                    />
                </VictoryChart>
            </PieContainer>
        </Transition>
    );
};



export default PieChart;
