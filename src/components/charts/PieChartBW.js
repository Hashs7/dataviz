import React from 'react';
import { theme } from "../../constantes";
import { VictoryPie, VictorySharedEvents, VictoryBar, VictoryLabel, VictoryStack } from 'victory';
import styled from "styled-components";
import Transition from 'react-transition-group/Transition'
import TweenMax, {Power1} from "gsap/TweenMax";
import { VUE } from "../../store/actions";
import { isVue } from "../../methods";

const PieContainer = styled.svg`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 25
`;

const OutPie = styled(VictoryPie)``;

const animate = {
    enter(target) {
        return TweenMax.from(target, 1, {
            opacity: 0,
            x: '50%',
            delay: 2.5,
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
    const { vueIndex, enter } = props;
    return (
        <Transition
            in={enter}
            timeout={1500}
            onEnter={ node => animate.enter(node) }
            onExit={ node => animate.leave(node) }
            mountOnEnter
            unmountOnExit
        >
            <PieContainer className="DoublePie PieChart">
                <VictorySharedEvents
                    events={[{
                        childName: ["pie", "bar"],
                        target: "data",
                        eventHandlers: {
                            onMouseOver: () => {
                                return [{
                                    childName: ["pie", "bar"],
                                    mutation: (props) => {
                                        if(!isVue(vueIndex, [VUE.TRAFIC_SERV])){
                                            return;
                                        }
                                        switch (props.index) {
                                            case 0:
                                                return { style: Object.assign({}, props.style, {fill: "rgba(79, 98, 204, .8)", strokeWidth: 2, stroke: "#000", opacity: 1}) };
                                            case 1:
                                                return { style: Object.assign({}, props.style, {fill: "rgba(0, 0, 0, .8)", strokeWidth: 2, stroke: "#000", opacity: 1}) };
                                            case 2:
                                                return { style: Object.assign({}, props.style, {fill: "rgba(255, 47, 78, .8)", strokeWidth: 2, stroke: "#000", opacity: 1}) };
                                            case 3:
                                                return { style: Object.assign({}, props.style, {fill: "rgba(3, 171, 230, .8)", strokeWidth: 2, stroke: "#000", opacity: 1}) };
                                            case 4:
                                                return;
                                        }
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
                <g transform={`translate(${props.width - 800}, 0), scale(1.5)`} className="firstPie">
                <VictoryPie
                    standalone={false}
                    data={[
                        { x: "Vidéos 58%", y: 58 },
                        { x: "Web 17%", y: 17 },
                        { x: "Autres 12%", y: 12 },
                        { x: "Jeux 8%", y: 8 },
                        { x: "Socials 5%", y: 5 }
                    ]}
                    height={350}
                    style={{data: { stroke: "#000", strokeWidth: 2 }, labels: { fill: "transparent", fontSize: 10 }}}
                    labelRadius={5}
                    animate={{ duration: 1200, onLoad: { duration: 500 }}}
                    colorScale={[ theme.color.blue, theme.color.orange, '#646464', theme.color.green, theme.color.white ]}
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
                                                return { style: { stroke: "#000", strokeWidth: 1, fill: '#646464' }};
                                            case 3:
                                                return { style: { stroke: "#000", strokeWidth: 1, fill: theme.color.green }};
                                            case 4:
                                                return { style: { stroke: "#000", strokeWidth: 1, fill: theme.color.white }};
                                        }
                                    }
                                }, {
                                    target: "labels",
                                    mutation: (props) => {
                                        switch (props.index) {
                                            case 0:
                                                return { style: { fill: "#fff", fontSize: 16 }};
                                            case 2:
                                                return { style: { fill: "#fff", fontSize: 16 }};
                                            default:
                                                return { style: { fill: "#000", fontSize: 16 }};
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
                                        return { style: { fill: "transparent", fontSize: 16, } };
                                    }
                                }];
                            }
                        }
                    }]}
                />
                <g transform={"scale(1.35), rotate(-8 -150 520)"} className="secondPie">
                    <OutPie
                        name="pie"
                        standalone={false}
                        data={[
                            { x: "2%", y: 2 },
                            { x: "15%", y: 15 },
                            { x: "12%", y: 12 },
                            { x: "4%", y: 4 },
                            { x: "", y: 67 }
                        ]}
                        height={350}
                        innerRadius={100}
                        style={{
                            data: {
                                stroke: "#000",
                                strokeWidth: 0,
                                opacity: isVue(vueIndex, [VUE.TRAFIC_SERV]) ? 1 : 0},
                            labels: { fill: isVue(vueIndex, [VUE.TRAFIC_SERV]) ? "#FFF" : "transparent", fontSize: 12 }
                        }}
                        labelRadius={60}
                        animate={{
                            duration: 1200,
                            onLoad: { duration: 500 }
                        }}
                        colorScale={[ '#4F62CC', theme.color.black, '#FF2F4E', '#03ABE6', 'transparent' ]}
                    />
                </g>
                </g>

                <g transform={`translate(80, ${props.height - 505})`}>
                    <VictoryStack
                        standalone={false}
                        style={{
                            data: {
                                stroke: "black",
                                strokeWidth: '2px',
                                opacity:  isVue(vueIndex, [VUE.TRAFIC_SERV]) ? 1 : 0
                            }
                        }}
                        width={500}
                        domainPadding={{ y: -18 }}
                        colorScale={[theme.color.orange, theme.color.green, theme.color.white]}
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
                            style={{ labels: { fill: "#000", fontSize: 18, opacity:  isVue(vueIndex, [VUE.TRAFIC_SERV]) ? 1 : 0}}}
                            events={[{
                                target: "data",
                                eventHandlers: {
                                    onMouseEnter: () => ([{
                                        target: "labels",
                                        mutation: () =>  ({text: "Energie fossile", x: 200, dy: 35})
                                    }]),
                                    onMouseLeave: () => ([{
                                        target: "labels",
                                        mutation: (props) => ({text: props.data[props.index].y+'%'})
                                    }]),
                                }
                            }]}
                            labelComponent={<VictoryLabel x={100} />}
                            data={[
                                { x: 'facebook', y: 31 },
                                { x: 'netflix', y: 80 },
                                { x: 'youtube', y: 39 },
                                { x: 'amazon', y: 80 },
                            ]}
                        />
                        <VictoryBar
                            barWidth={50}
                            name="bar"
                            labels={(d) => `${d.y}%`}
                            padding={{ right: 20 }}
                            style={{labels: { fill: "#000", fontSize: 18, opacity:  isVue(vueIndex, [VUE.TRAFIC_SERV]) ? 1 : 0 }}}
                            events={[{
                                target: "data",
                                eventHandlers: {
                                    onMouseEnter: () => ([{
                                        target: "labels",
                                        mutation: () =>  ({text: "Energie renouvelable", x: 190, dy: 35 })
                                    }]),
                                    onMouseLeave: () => ([{
                                        target: "labels",
                                        mutation: (props) => ({text: props.data[props.index].y+'%'})
                                    }]),
                                }
                            }]}
                            horizontal
                            labelComponent={<VictoryLabel x={390} />}
                            data={[
                                { x: 'facebook', y: 67 },
                                { x: 'netflix', y: 17 },
                                { x: 'youtube', y: 56 },
                                { x: 'amazon', y: 17 },
                            ]}
                        />
                        <VictoryBar
                            barWidth={50}
                            name="bar"
                            labels={(d) => `${d.y}%`}
                            horizontal
                            labelComponent={<VictoryLabel x={460} />}
                            padding={{ right: 20 }}
                            style={{labels: { fill: "#000", fontSize: 18, opacity: isVue(vueIndex, [VUE.TRAFIC_SERV]) ? 1 : 0 }}}
                            events={[{
                                target: "data",
                                eventHandlers: {
                                    onMouseEnter: () => ([{
                                        target: "labels",
                                        mutation: () =>  ({text: "Inconnu", x: 220, dy: 35})
                                    }]),
                                    onMouseLeave: () => ([{
                                        target: "labels",
                                        mutation: (props) => ({text: props.data[props.index].y+'%'})
                                    }]),
                                }
                            }]}
                            data={[
                                { x: 'facebook', y: 2 },
                                { x: 'netflix', y: 3 },
                                { x: 'youtube', y: 5 },
                                { x: 'amazon', y: 3 },
                            ]}
                        />
                    </VictoryStack>
                </g>
                </VictorySharedEvents>
            </PieContainer>
        </Transition>
    );
};

export default PieChart;
