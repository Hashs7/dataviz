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
    const { enter } = props;
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
                            { x: "2010", y: 11 },
                            { x: "2011", y: 10 },
                            { x: "2012", y: 11 },
                            { x: "2013", y: 10 },
                            { x: "2014", y: 10 },
                            { x: "2015", y: 10 },
                            { x: "2016", y: 10 },
                            { x: "2017", y: 10 },
                            { x: "2018", y: 11 },
                            { x: "2019", y: 11 },
                        ]}
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: theme.color.blue, strokeDasharray: "12 6", strokeDashoffset: "180", strokeLinecap:"round" },
                        }}
                        data={[
                            { x: "2019", y: 11 },
                            { x: "2020", y: 11 },
                            { x: "2021", y: 11 },
                            { x: "2022", y: 12 },
                            { x: "2023", y: 12 },
                            { x: "2024", y: 13 },
                            { x: "2025", y: 14 },
                            { x: "2026", y: 15 },
                            { x: "2027", y: 16 },
                            { x: "2028", y: 17 },
                            { x: "2029", y: 19 },
                            { x: "2030", y: 21 },
                        ]}
                    />

                </VictoryChart>
            </PieContainer>
        </Transition>
    );
};



export default PieChart;
