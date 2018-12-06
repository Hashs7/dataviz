import React, {Component} from 'react';
import { VictoryBar, VictoryStack, VictoryChart } from 'victory';
import Slider from 'react-rangeslider';
import styled from 'styled-components';
import { theme } from '../../../constantes';
import { assign } from "lodash";

const Container = styled.div`
    width: 505px;
`;


// *
// * Colors
// *
const colors = [
    "#252525",
    "#525252",
    "#737373",
    "#969696",
    "#bdbdbd",
    "#d9d9d9",
    "#f0f0f0"
];

const charcoal = "#252525";
const grey = "#969696";
// *
// * Typography
// *
const sansSerif = "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif";
const letterSpacing = "normal";
const fontSize = 14;
// *
// * Layout
// *
const baseProps = {
    width: 450,
    height: 300,
    padding: 50,
    colorScale: colors
};
// *
// * Labels
// *
const baseLabelStyles = {
    fontFamily: sansSerif,
    fontSize,
    letterSpacing,
    padding: 10,
    fill: charcoal,
    stroke: "transparent"
};

const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);

const themeChart = {
    axis: assign({
        style: {
            axis: {
                fill: "transparent",
                stroke: charcoal,
                strokeWidth: 3,
            },
            axisLabel: assign({}, centeredLabelStyles, {
                padding: 25,
            }),
            grid: {
                fill: "none",
                stroke: "none",
                pointerEvents: "painted"
            },
            ticks: {
                fill: "transparent",
                size: 1,
                stroke: "transparent"
            },
            tickLabels: baseLabelStyles
        }
    }, baseProps),

};

class MailChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            scale: 1,
            personalData: [
                { x: ' ', y: 9 },
            ],
            countryData:  [
                { x: ' ', y: 78 },
            ],
            worldData:  [
                { x: ' ', y: 7000 },
            ],
            emptyData : [
                { x: ' ', y: 0 },
            ]

        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        this.setState({ scale: value });
    }

    render() {
        const labels = {
            1: 'Vous',
            2: 'France',
            3: 'Monde',
        };

        return (
            <Container>
                <VictoryChart
                    height={190}
                    theme={themeChart}
                    origin={{ x: 1, y: 1 }}
                    // domain={{x: [0, 3], y: [0, 1]}}
                >
                    <VictoryStack
                        style={{
                            data: { stroke: "black", strokeWidth: 3 }
                        }}
                        colorScale={[theme.color.orange, theme.color.blue, theme.color.white]}
                        animate={{
                            duration: 1500,
                        }}>
                            <VictoryBar
                                barWidth={50}
                                horizontal
                                data={this.state.personalData}
                            />
                            <VictoryBar
                                barWidth={50}
                                horizontal
                                data={this.state.scale >= 2 ? this.state.countryData :  this.state.emptyData }
                            />
                            <VictoryBar
                                barWidth={50}
                                horizontal
                                data={this.state.scale >= 3 ? this.state.worldData :  this.state.emptyData }
                            />
                    </VictoryStack>
                </VictoryChart>

                <Slider
                    min={1}
                    max={3}
                    step={1}
                    labels={labels}
                    tooltip={false}
                    value={this.state.scale}
                    onChange={this.handleOnChange}
                />
            </Container>
        );
    }
}

export default MailChart;
