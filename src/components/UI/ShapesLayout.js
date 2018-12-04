import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { theme } from '../../constantes';
import posed from 'react-pose';
import { tween, easing } from 'popmotion';
import { interpolate } from 'flubber';
import HomeLayout from "../pages/Home/HomeLayout";
import DataCentersLayout from "../pages/DataCenters/DataCentersLayout";
import PieChart from "../charts/PieChart";

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

const greenPath = {
    first:
        'M1440,800V124.44s-243.45,145.22-217.17,230.37a231.74,231.74,0,0,0,12.58,32.08,214.11,214.11,0,0,0,49.23,65.53c36.17,32.92,142.46,144.38-28.27,183.19-45.87,12.62-94.23,42.59-124.58,85.18S981,800,981,800h459Z',
    middle:
        'M-93.09-51.34s115.15-232.8,464-119.14c648.32,211.26,897,20.1,897,20.1S1597-290.31,1583.24-90.06,1418.38,163.61,1549,442.75c88.81,189.85,78.86,521.13-78.85,555.42S920.24,716.34,331.84,953.6C-95.77,1126-171.56,800-171.56,800s-82.15-337.78-58-454C-205.67,231-93.09-51.34-93.09-51.34Z',
    last:
        'M0,0H216.8S324.26,102.94,435.37,104.21,580,200.78,580,200.78s77.48,178.49-5.35,284.48C549,530.11,525.33,633,525.33,633s-25.6,105.56-224.68,34.25S103.86,483.39,103.86,483.39,123.52,304.62,0,286.43Z',
};
const morphTransition = ({ from, to }) =>
    tween({
        from: 0,
        to: 1,
        duration: 1800,
        ease: easing.circOut
    }).pipe(interpolate(from, to));

const pathIds = Object.keys(greenPath);

const Icon = posed.path(
    pathIds.reduce((config, id) => {
        config[id] = {
            d: greenPath[id],
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
            styleSvg: {
                position: "absolute",
                bottom: 0,
                right: 0,
                left: 'auto',
                height: '100%',
                margin: 'auto',
                zIndex: 4,
            }
        };
        this.morphShape = this.morphShape.bind(this);
    }

    morphShape(){
        const { pathIndex } = this.state;
        const nextIndex = pathIndex + 1;
        this.setState({
            pathIndex: nextIndex > pathIds.length - 1 ? 0 : nextIndex
        });
        if(pathIndex === 0){
            this.setState({
                styleSvg: {
                    right: 'auto',
                    left: 0,
                    position: "absolute",
                    bottom: 0,
                    height: '100%',
                    margin: 'auto',
                    zIndex: 4,
                }
            });
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.pathIndex === 0 && prevProps.vueIndex === 1){
            setTimeout(this.morphShape, 400);
        }
        if(prevState.pathIndex === 0 && prevProps.vueIndex === 2){
            setTimeout(this.morphShape, 1400);
        }
    }

    render(){
        return (
            <Layout>
                <About color={this.props.vueIndex !== 1 ? '#000' : '#FFF'}>à propos</About>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" style={this.state.styleSvg}>
                    <Icon style={{fill: "#99ffd3"}} pose={pathIds[this.state.pathIndex]} />
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
                        <DataCentersLayout in={this.props.vueIndex === 2 || this.props.vueIndex === 3}/>

                        {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" style={styleSvg}>
                            <Icon style={{fill: "#1C1CAF"}} pose={pathIds[this.state.pathIndex]} />
                        </svg>*/}
                    </div>
                : null}
                {this.props.vueIndex === 3 ?
                   <PieChart />
                : null}
                {this.props.children}
            </Layout>
        );
    }
};

export default ShapesLayout;
