import React from 'react';
import { theme } from "../../constantes";
import { VictoryChart, VictoryLine, VictoryVoronoiContainer, VictoryTooltip } from 'victory';
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
                <VictoryChart
                    domainPadding={{ x: 10, y: 50 }}
                    containerComponent={
                       <VictoryVoronoiContainer
                           labelComponent={<VictoryTooltip/>}
                           labels={(d) => `${d.x}, ${d.y}`}
                       />
                    }>
                    <VictoryLine
                        style={{
                            data: { stroke: theme.color.blue, strokeLinecap:"round"},
                        }}
                        data={[
                            { x: "2010", y: 10 },
                            { x: "2011", y: 11 },
                            { x: "2012", y: 10 },
                            { x: "2013", y: 10 },
                            { x: "2015", y: 15 },
                            { x: "2019", y: 15 },
                        ]}
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: theme.color.blue, strokeDasharray: "12 6", strokeDashoffset: "180", strokeLinecap:"round" },
                        }}
                        data={[
                            { x: "2019", y: 15 },
                            { x: "2020", y: 20 },
                            { x: "2021", y: 30 },
                        ]}
                    />

                </VictoryChart>
            </PieContainer>
        </Transition>
    );
};



export default PieChart;
