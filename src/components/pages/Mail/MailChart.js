import React, {Component} from 'react';
import { VictoryBar, VictoryStack, VictoryChart } from 'victory';
import Slider from 'react-rangeslider';
import styled from 'styled-components';
import { theme } from '../../../constantes';
import { assign } from "lodash";

const Container = styled.div`
    width: 645px;
    margin-top: -90px;
`;

const sansSerif = "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif";
const letterSpacing = "normal";
const fontSize = 14;

const baseProps = {
    width: 450,
    height: 300,
    padding: 50,
};

const baseLabelStyles = {
    fontFamily: sansSerif,
    fontSize,
    letterSpacing,
    padding: 10,
    fill: '#000',
    stroke: "transparent"
};

const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);

const themeChart = {
    axis: assign({
        style: {
            axis: {
                fill: "transparent",
                stroke: 'transparent',
                strokeWidth: '2px',
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
                    height={170}
                    theme={themeChart}
                    origin={{ x: 1, y: 1 }}
                >
                    <VictoryStack
                        style={{
                            data: { stroke: "black", strokeWidth: '2px' }
                        }}
                        colorScale={[theme.color.orange, theme.color.blue, theme.color.white]}
                        animate={{
                            duration: 1200,
                            onLoad: { duration: 500 }
                        }}>
                            <VictoryBar
                                barWidth={35}
                                horizontal
                                data={this.state.personalData}
                            />
                            <VictoryBar
                                barWidth={35}
                                horizontal
                                data={this.state.scale >= 2 ? this.state.countryData :  this.state.emptyData }
                            />
                            <VictoryBar
                                barWidth={35}
                                horizontal
                                data={this.state.scale >= 3 ? this.state.worldData :  this.state.emptyData }
                            />
                    </VictoryStack>
                </VictoryChart>

                <Slider
                    className="chartSlider"
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