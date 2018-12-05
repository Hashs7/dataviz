import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { theme, greenPath, bluePath } from '../../constantes';
import posed from 'react-pose';
import { tween, easing } from 'popmotion';
import { interpolate } from 'flubber';
import HomeLayout from "../pages/Home/HomeLayout";
import DataCentersLayoutContainer from "../../containers/DataCentersLayoutContainer";
import PieChartContainer from "../../containers/PieChartContainer";

const Layout = styled.div`
    position: relative;
    text-align: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    font-family: 'Cera Basic';
`;

const About = styled.button`
    position: absolute; 
    top: 40px;
    right: 70px;
    z-index: 10;
    cursor: pointer;
    font: 16px ${theme.font.second};
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${props => props.color};
    transition: all .2s ease;
`;

// Vue 1
const SVGDot = styled(SVG)`
    position: absolute;
    right: -3px;
    bottom: -7px;
    width: 445px;
    height: 370px;
    z-index: 5;
`;

const SVGWave = styled(SVG)`
    position: absolute;
    top: 11vw;
    right: 10vw;
    width: 365px;
    height: 203px;
`;

const SVGLine = styled(SVG)`
    position: absolute;
    top: -3px;
    left: -3px;
    z-index: 5;
    max-width: 615px;
    width: 30%;
    height: 550px;
`;


const morphTransition = ({ from, to }) =>
    tween({
        from: 0,
        to: 1,
        duration: 1800,
        ease: easing.circOut
    }).pipe(interpolate(from, to));

const pathIdsGreen = Object.keys(greenPath);
const pathIdsBlue = Object.keys(bluePath);

const IconGreen = posed.path(
    pathIdsGreen.reduce((config, id) => {
        config[id] = {
            d: greenPath[id],
            transition: morphTransition
        };

        return config;
    }, {})
);

const IconBlue = posed.path(
    pathIdsBlue.reduce((config, id) => {
        config[id] = {
            d: bluePath[id],
            transition: morphTransition
        };

        return config;
    }, {})
);

class ShapesLayout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pathIndex: props.vueIndex - 1,
            styleSvgGreen: {
                backfaceVisibility: 'hidden',
                position: "absolute",
                bottom: 0,
                right: 0,
                left: 'auto',
                height: '100%',
                margin: 'auto',
                zIndex: 4,
            },
            styleSvgBlue: {
                position: "absolute",
                bottom: 0,
                right: 0,
                left: 'auto',
                height: '100%',
                margin: 'auto',
                zIndex: 4,
            },
        };
        this.morphShape = this.morphShape.bind(this);
    }

    morphShape(pathIds){
        const { pathIndex } = this.state;
        const nextIndex = pathIndex + 1;
        this.setState({
            pathIndex: nextIndex
        });
        if(nextIndex === 1){
            this.setState({
                styleSvgGreen: {
                    backfaceVisibility: 'hidden',
                    right: 'auto',
                    left: 0,
                    position: "absolute",
                    bottom: 0,
                    height: '100%',
                    margin: 'auto',
                    zIndex: 4
                }
            });
        }
        console.log('morph', nextIndex);
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevProps, prevState);
        if(prevState.pathIndex === 0 && prevProps.vueIndex === 1){
            setTimeout(this.morphShape, 400);
        }
        if(prevState.pathIndex === 0 && prevProps.vueIndex === 2){
            setTimeout(this.morphShape, 1700);
        }
    }

    render(){
        return (
            <Layout>
                <About color={this.props.vueIndex !== 1 ? '#000' : '#FFF'}>à propos</About>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" style={this.state.styleSvgGreen}>
                    <IconGreen style={{fill: "#99ffd3"}} pose={pathIdsGreen[this.state.pathIndex]} />
                </svg>

                <HomeLayout in={this.props.vueIndex === 1}/>

                {this.props.vueIndex === 1 ?
                    <div>
                        <SVGDot src="./assets/img/svg/shapes/vue-1/shape-dot.svg" />
                        <SVGLine src="./assets/img/svg/shapes/vue-1/shape-line.svg" />
                        <SVGWave src="./assets/img/svg/shapes/vue-1/shape-wave.svg" />
                    </div>
                : null}

                {this.props.vueIndex === 2 || this.props.vueIndex === 3 ?
                    <div>
                        <DataCentersLayoutContainer vueIndex={this.props.vueIndex}/>
                        <PieChartContainer enter={this.props.vueIndex}/>

                        {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" style={this.state.styleSvgBlue}>
                            <IconBlue style={{fill: "#1C1CAF"}} pose={pathIdsBlue[this.state.pathIndex]} />
                        </svg>*/}
                    </div>
                : null}

                {this.props.children}
            </Layout>
        );
    }
};

export default ShapesLayout;
