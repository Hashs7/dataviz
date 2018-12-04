import React, {Component} from 'react';
import { theme } from "../../constantes";
import { VictoryPie } from 'victory';
import styled from "styled-components";

const PieContainer = styled.div`
    position: absolute;
    bottom: 120px;
    left: 368px;
    z-index: 5;
`;

class PieChart extends Component {
    render() {
        return (
            <PieContainer>
                <VictoryPie
                    animate={{ duration: 2000 }}
                    colorScale={[theme.color.blue, theme.color.orange, theme.color.white ]}
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onMouseEnter: () => {
                                return [{
                                    target: "data",
                                    mutation: (props) => {
                                        switch (props.index) {
                                            case 0:
                                                return { style: { stroke: "#000", strokeWidth: 2, fill: theme.color.blue }};
                                            case 1:
                                                return { style: { stroke: "#000", strokeWidth: 2, fill: theme.color.orange }};
                                            case 2:
                                                return { style: { stroke: "#000", strokeWidth: 2, fill: theme.color.white }};
                                        }
                                    }
                                }, {
                                    target: "labels",
                                    mutation: (props) => {
                                        switch (props.index) {
                                            case 0:
                                                return { style: { fill: "#fff", fontSize: 40, fontWeight: 900, fontFamily: "Cera Basic, sans-serif" } };
                                            case 1:
                                                return { style: { fill: "#000", fontSize: 40, fontWeight: 900, fontFamily: "Cera Basic, sans-serif" } };
                                            case 2:
                                                return { style: { fill: "#000", fontSize: 40, fontWeight: 900, fontFamily: "Cera Basic, sans-serif" } };
                                        }
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
                                        return { style: { fill: "transparent", fontSize: 40, } };
                                    }
                                }];
                            }
                        }
                    }]}
                    labelRadius={70}
                    height={400}
                    style={{
                        data: { stroke: "#000", strokeWidth: 4 },
                        labels: { fill: "transparent" }
                    }}
                    name="series-1"
                    data={[
                        { x: "48%", y: 48 },
                        { x: "28%", y: 28 },
                        { x: "25%", y: 25 }
                    ]}
                />
            </PieContainer>
        );
    }
}

export default PieChart;
