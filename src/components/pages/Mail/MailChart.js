import React, {Component} from 'react';
import { connect } from 'react-redux';
import { VictoryBar, VictoryStack, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import Slider from 'react-rangeslider';
import styled from 'styled-components';
import { theme } from '../../../constantes';
import { assign } from "lodash";
import SVG from 'react-inlinesvg';
import {CHANGE_SCALE} from "../../../store/actions";

const Container = styled.div`
    width: 645px;
    margin-top: -30px;
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

const Car = styled(SVG)`
    display: block;
    position: absolute;
    top: 108px;
    left: ${props => 7.5*props.carX}px;
    width: 108px;
    height: 43px;
`;

const Plane = styled(SVG)`
    display: block;
    position: absolute;
    top: 95px;
    right: 186px;
    width: 156px;
    height: 55px;
`;

const Multiplicator = styled.span`
    position: absolute;
    top: 130px;
    right: 30px;
    font-size: 30px;
    font-weight: 900;
`;

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
        const userCO2 = ((this.props.mailAmount + 10)*10*4);
        this.carKm = Math.floor(userCO2/111);
        const remaining = 52 - this.carKm;

        this.state = {
            scale: 1,
            personalData: [
                { x: ' ', y: this.carKm },
            ],
            remainingData:  [
                { x: ' ', y: remaining },
            ],
            totalData : [
                { x: ' ', y: 52 },
            ],
            emptyData : [
                { x: ' ', y: 0 },
            ],
            tickValues:  [0, this.carKm, 52]
        };

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        if(value === this.state.scale){
            return;
        }
        let tickValues = [0, 52];
        if (value === 1){
            tickValues = [0, this.carKm, 52]
        }
        this.props.changeScale(value);
        this.setState({ scale: value, tickValues });
        console.log('state', tickValues, value)
    }

    render() {
        const labels = {
            1: 'Moi',
            2: 'France',
            3: 'Monde',
        };

        return (
            <Container>
                {this.state.scale !== 1 ?
                    <Plane src="./assets/img/plane.svg"/> :
                    <Car src="./assets/img/car.svg" carX={this.carKm}/>
                }
                {this.state.scale === 2 ?
                    <Multiplicator>x 1600</Multiplicator>
                : null}
                {this.state.scale === 3 ?
                    <Multiplicator>x 274 286</Multiplicator>
                : null}
                <VictoryChart
                    height={170}
                    theme={themeChart}
                    origin={{ x: 1, y: 1 }}
                >
                    <VictoryAxis
                        tickValues={this.state.tickValues}
                        domain={[0, 52]}
                        width={500}
                        height={10}
                        offsetY={80}
                        padding={0}
                        style={{
                            axis: {stroke: "#000", strokeWidth: 3},
                            axisLabel: {fontSize: 18, padding: 30},
                            ticks: {stroke: "#000", size: 5, strokeWidth: 3},
                            tickLabels: {fontSize: 15, padding: 30}
                        }}
                        tickLabelComponent={<VictoryLabel dx={-10} />}
                        tickFormat={(t) => {
                            if(this.state.scale !== 1) {
                                if(t === 0){
                                    return 'Paris';
                                }
                                if(t === 52){
                                    return 'New York';
                                }
                                return null;
                            }
                            if(t === 0){
                                return 'Annecy';
                            }
                            if(t === 52){
                                return 'Chambéry';
                            }
                            return `${t}km`;
                        }}
                    />
                    <VictoryStack
                        style={{
                            data: { stroke: "black", strokeWidth: '2px' }
                        }}
                        colorScale={[theme.color.orange, theme.color.white]}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}>
                            <VictoryBar
                                barWidth={10}
                                horizontal
                                data={this.state.scale !== 1 ? this.state.totalData : this.state.personalData }
                            />
                            <VictoryBar
                                barWidth={10}
                                horizontal
                                data={this.state.scale !== 1 ? this.state.emptyData : this.state.remainingData}
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

const mapStateToProps = state => {
    return {
        mailAmount: state.current.mailAmount,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeScale: (i) => dispatch({type: CHANGE_SCALE, index: i}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MailChart);
