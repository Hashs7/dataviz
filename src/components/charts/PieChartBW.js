import React from 'react';
import { theme } from "../../constantes";
import { VictoryPie, VictorySharedEvents, VictoryBar, VictoryLabel, VictoryStack } from 'victory';
import styled from "styled-components";
import Transition from 'react-transition-group/Transition'
import TweenMax, {Power1} from "gsap/TweenMax";
import { VUE } from "../../store/actions";
import {isVue} from "../../methods";

const PieContainer = styled.svg`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 5;
`;

const OutPie = styled(VictoryPie)`
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
    const { vueIndex, changeStuff} = props;
    return (
        <Transition
            in={isVue(vueIndex, [VUE.TRAFIC_BW, VUE.TRAFIC_SERV])  }
            timeout={1500}
            onEnter={ node => animate.enter(node) }
            onExit={ node => animate.leave(node) }
            mountOnEnter
            unmountOnExit
        >
            <PieContainer className="DoublePie">
                <VictorySharedEvents
                    events={[{
                        childName: ["pie", "bar"],
                        target: "data",
                        eventHandlers: {
                            onMouseOver: () => {
                                return [{
                                    childName: ["pie", "bar"],
                                    mutation: (props) => {
                                        if(props.index === 3 || props.index === 5) {
                                            return
                                        }
                                        console.log(props)
                                        return {
                                            style: Object.assign({}, props.style, {opacity: 1, fill: "red"})
                                        };
                                    }
                                }];
                            },
                            onMouseOut: () => {
                                return [{
                                    childName: ["pie", "bar"],
                                    mutation: () => {
                                        return null;
                                    }
                                }];
                            }
                        }
                    }]}
                >
                    <g transform={`translate(${props.width - 800}, 0), scale(1.5)`}>
                    <VictoryPie
                        standalone={false}
                        data={[
                            { x: "Vidéos 58%", y: 58 },
                            { x: "Web 17%", y: 17 },
                            { x: "Jeux 8%", y: 8 },
                            { x: "Socials 5%", y: 5 },
                            { x: "Autres 12%", y: 12 }
                        ]}
                        height={350}
                        style={{
                            data: { stroke: "#000", strokeWidth: 2 },
                            labels: { fill: "transparent" }
                        }}
                        labelRadius={5}
                        animate={{
                            duration: 1200,
                            onLoad: { duration: 500 }
                        }}
                        colorScale={[ theme.color.blue, theme.color.orange, theme.color.green, theme.color.white,  '#646464']}
                        events={[{
                            target: "data",
                            eventHandlers: {
                                onMouseEnter: () => {
                                    return [{
                                        target: "data",
                                        mutation: (props) => {
                                            switch (props.index) {
                                                case 0:
                                                    return { style: { stroke: "#000", strokeWidth: 1, fill: theme.color.blue }};
                                                case 1:
                                                    return { style: { stroke: "#000", strokeWidth: 1, fill: theme.color.orange }};
                                                case 2:
                                                    return { style: { stroke: "#000", strokeWidth: 1, fill: theme.color.white }};
                                                case 3:
                                                    return { style: { stroke: "#000", strokeWidth: 1, fill: theme.color.white }};
                                                case 4:
                                                    return { style: { stroke: "#000", strokeWidth: 1, fill: '#646464' }};
                                            }
                                        }
                                    }, {
                                        target: "labels",
                                        mutation: (props) => {
                                            switch (props.index) {
                                                case 0:
                                                    return { style: { fill: "#fff", fontSize: 20 }};
                                                default:
                                                    return { style: { fill: "#000", fontSize: 20 }};
                                            }
                                        }
                                    }];
                                },
                                onMouseLeave: () => {
                                    return [{
                                        target: "data",
                                        mutation: () => {
                                            return {strokeWidth: 3}
                                        }
                                    }, {
                                        target: "labels",
                                        mutation: () => {
                                            return { style: { fill: "transparent", fontSize: 20, } };
                                        }
                                    }];
                                }
                            }
                        }]}
                    />
                    <g transform={"scale(1.35), translate(-52, -45)"}>
                        {isVue(vueIndex, [VUE.TRAFIC_SERV]) ?
                            <OutPie
                                name="pie"
                                standalone={false}
                                data={[
                                    { x: "Netflix", y: 15 },
                                    { x: "Youtube", y: 12 },
                                    { x: "Amazon Prime Video", y: 4 },
                                    { x: "empty", y: 52 },
                                    { x: "Facebook", y: 2 },
                                    { x: "empty2", y: 15 },
                                ]}
                                height={350}
                                innerRadius={100}
                                style={{
                                    data: { stroke: "#000", strokeWidth: 0 },
                                    labels: { fill: "transparent" }
                                }}
                                labelRadius={60}
                                animate={{
                                    duration: 1200,
                                    onLoad: { duration: 500 }
                                }}
                                colorScale={[ theme.color.black, '#FF2F4E', '#03ABE6', 'transparent',  '#4C7BE3', 'transparent']}
                                events={[{
                                    target: "data",
                                    eventHandlers: {
                                        onMouseEnter: () => {
                                            return [{
                                                target: "data",
                                                mutation: (props) => {
                                                    return;
                                                    /*switch (props.index) {
                                                        case 0:
                                                            return { style: { stroke: "#000", strokeWidth: 2, fill: theme.color.blue }};
                                                        case 1:
                                                            return { style: { stroke: "#000", strokeWidth: 2, fill: theme.color.orange }};
                                                        case 2:
                                                            return { style: { stroke: "#000", strokeWidth: 2, fill: theme.color.white }};
                                                        case 4:
                                                            return { style: { stroke: "#000", strokeWidth: 2, fill: '#646464' }};*/
                                                    // }
                                                }
                                            }];
                                        },
                                        onMouseLeave: () => {
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

                        : null}
                    </g>
                    </g>

                    <g
                        transform={"translate(0, 462)"}
                    >
                    {isVue(vueIndex, [VUE.TRAFIC_SERV])  ?
                        <VictoryStack
                            standalone={false}
                            style={{
                                data: { stroke: "black", strokeWidth: '2px', opacity: 0.8 }
                            }}
                            width={500}
                            domainPadding={{ y: -18 }}
                            colorScale={[theme.color.orange, theme.color.green, theme.color.blue]}
                            animate={{
                                duration: 1200,
                                onLoad: { duration: 500 }
                            }}>
                            <VictoryBar
                                barWidth={50}
                                name="bar"
                                horizontal
                                labels={(d) => `${d.y}%`}
                                padding={{ right: 20 }}
                                style={{
                                    labels: { fill: "#000" }
                                }}
                                labelComponent={<VictoryLabel x={100}/>}
                                data={[
                                    { x: 'netflix', y: 80 },
                                    { x: 'youtube', y: 39 },
                                    { x: 'amazon', y: 80 },
                                    { x: '', y: 0 },
                                    { x: 'facebook', y: 31 },
                                ]}
                            />
                            <VictoryBar
                                barWidth={50}
                                name="bar"
                                labels={(d) => `${d.y}%`}
                                padding={{ right: 20 }}
                                style={{
                                    labels: { fill: "#000" }
                                }}
                                horizontal
                                labelComponent={<VictoryLabel x={390}/>}

                                data={[
                                    { x: 'netflix', y: 17 },
                                    { x: 'youtube', y: 56 },
                                    { x: 'amazon', y: 17 },
                                    { x: '', y: 0 },
                                    { x: 'facebook', y: 67 },
                                ]}
                            />
                            <VictoryBar
                                barWidth={50}
                                name="bar"
                                labels={(d) => `${d.y}%`}
                                horizontal
                                labelComponent={<VictoryLabel x={460}/>}
                                padding={{ right: 20 }}
                                style={{
                                    labels: { fill: "#000" }
                                }}
                                data={[
                                    { x: 'netflix', y: 3 },
                                    { x: 'youtube', y: 5 },
                                    { x: 'amazon', y: 3 },
                                    { x: '', y: 0 },
                                    { x: 'facebook', y: 2 },
                                ]}
                            />
                        </VictoryStack>
                    : null}
                    </g>

                </VictorySharedEvents>
            </PieContainer>
        </Transition>
    );
};

export default PieChart;
