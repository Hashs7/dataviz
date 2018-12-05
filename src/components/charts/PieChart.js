import React from 'react';
import { theme } from "../../constantes";
import { VictoryPie } from 'victory';
import styled from "styled-components";
import Transition from 'react-transition-group/Transition'
import TweenMax, {Power1} from "gsap/TweenMax";

const PieContainer = styled.div`
    position: absolute;
    bottom: 60px;
    left: 368px;
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
            in={enter === 3}
            timeout={1500}
            onEnter={node => {
                animate.enter(node);
            }}
            onExit={node => {
                animate.leave(node);
            }}
            mountOnEnter
            unmountOnExit
        >
            <PieContainer>
                <VictoryPie
                    data={[
                        { x: "47%", y: 47 },
                        { x: "28%", y: 28 },
                        { x: "25%", y: 25 }
                    ]}
                    height={400}
                    style={{
                        data: { stroke: "#000", strokeWidth: 4 },
                        labels: { fill: "transparent" }
                    }}
                    labelRadius={60}
                    animate={{ duration: 2000 }}
                    colorScale={[ theme.color.blue, theme.color.orange, theme.color.white ]}
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onMouseEnter: () => {
                                return [{
                                    target: "data",
                                    mutation: (props) => {
                                        changeStuff(props.index);
                                        switch (props.index) {
                                            case 0:
                                                console.log('équipements perso')
                                                return { style: { stroke: "#000", strokeWidth: 2, fill: theme.color.blue }};
                                            case 1:
                                                console.log('infra réso')
                                                return { style: { stroke: "#000", strokeWidth: 2, fill: theme.color.orange }};
                                            case 2:
                                                console.log('le cloud')
                                                return { style: { stroke: "#000", strokeWidth: 2, fill: theme.color.white }};
                                        }
                                    }
                                }, {
                                    target: "labels",
                                    mutation: (props) => {
                                        console.log('unhover')
                                        switch (props.index) {
                                            case 0:
                                                return { style: { fill: "#fff", fontSize: 32 }};
                                            case 1:
                                                return { style: { fill: "#000", fontSize: 32 }};
                                            case 2:
                                                return { style: { fill: "#000", fontSize: 32 }};
                                        }
                                    }
                                }];
                            },
                            onMouseLeave: () => {
                                changeStuff('none');
                                return [{
                                    target: "data",
                                    mutation: () => {
                                        return {strokeWidth: 4}
                                    }
                                }, {
                                    target: "labels",
                                    mutation: () => {
                                        return { style: { fill: "transparent", fontSize: 32, } };
                                    }
                                }];
                            }
                        }
                    }]}
                />
            </PieContainer>
        </Transition>
    );
};



export default PieChart;