import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { theme, greenPath, bluePath, orangePath } from '../../constantes';
import { VUE } from "../../store/actions";
import posed from 'react-pose';
import { tween, easing } from 'popmotion';
import { interpolate } from 'flubber';
import HomeLayout from "../pages/Home/HomeLayout";
import DataCentersLayoutContainer from "../../containers/DataCentersLayoutContainer";
import MailLayoutContainer from "../../containers/MailLayoutContainer";
import PieChartContainer from "../../containers/PieChartContainer";
import MorphingShape from './MorphingShape';
import ArrowButton from './ArrowButton';
import { isVue } from '../../methods';

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
const NextButton = styled.div`
    position: absolute;
    right: 100px;
    bottom: 80px;
    z-index: 6;
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

const morphTransition = ({ from, to }) => (
    tween({
        from: 0,
        to: 1,
        duration: 1800,
        ease: easing.circOut
    }).pipe(interpolate(from, to))
);



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
                pointerEvents: 'none',
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
                zIndex: 5,
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
                    pointerEvents: 'none',
                    backfaceVisibility: 'hidden',
                    right: 'auto',
                    left: 0,
                    position: "absolute",
                    bottom: 0,
                    height: '100%',
                    margin: 'auto',
                    zIndex: 5
                }
            });
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.pathIndex === 0 && prevProps.vueIndex === 1){
            setTimeout(this.morphShape, 400);
        }
        if(prevState.pathIndex === 0 && prevProps.vueIndex === 2){
            setTimeout(this.morphShape, 1700);
        }
    }

    render(){
        const { vueIndex } = this.props;
        const { INDEX, WHY, DISCOVER, MAIL_QUANTITY, MAIL_TYPE, MAIL_DATA, TRAFIC } = VUE;
        return (
            <Layout>
                <About color={vueIndex !== 1 ? '#000' : '#FFF'}>à propos</About>

                {isVue(vueIndex, [INDEX, WHY, DISCOVER]) ?
                    <MorphingShape pathObj={greenPath} event={vueIndex === WHY} color={theme.color.green}/>
                : null}
                {isVue(vueIndex, [WHY, DISCOVER, MAIL_QUANTITY, MAIL_TYPE]) ?
                    <MorphingShape pathObj={bluePath} event={vueIndex === MAIL_QUANTITY} color={theme.color.blue}/>
                : null}
                {isVue(vueIndex, [MAIL_QUANTITY, MAIL_TYPE, MAIL_DATA, TRAFIC]) ?
                    <MorphingShape pathObj={orangePath} event={this.props.vueIndex === 6} color={theme.color.orange}/>
                : null}

                <HomeLayout in={this.props.vueIndex === 1}/>

                {vueIndex === INDEX ?
                    <div>
                        <SVGDot src="./assets/svg/shapes/vue-1/shape-dot.svg" />
                        <SVGLine src="./assets/svg/shapes/vue-1/shape-line.svg" />
                        <SVGWave src="./assets/svg/shapes/vue-1/shape-wave.svg" />
                    </div>
                : null}

                {isVue(vueIndex, [WHY, DISCOVER]) ?
                    <div>
                        <DataCentersLayoutContainer />
                        <PieChartContainer enter={this.props.vueIndex}/>
                    </div>
                : null}

                {vueIndex === DISCOVER ?
                    <NextButton>
                        <Link to="/mail">
                            <ArrowButton action={() => this.props.changeVue(MAIL_QUANTITY)}/>
                        </Link>
                    </NextButton>
                : null }

                {vueIndex === MAIL_DATA ?
                    <NextButton>
                        <Link to="/mail">
                            <ArrowButton action={() => this.props.changeVue(MAIL_QUANTITY)}/>
                        </Link>
                    </NextButton>
                    : null }
                    
                { isVue(vueIndex, [MAIL_QUANTITY, MAIL_TYPE]) ?
                    <MailLayoutContainer />
                : null}

                {this.props.children}
            </Layout>
        );
    }
};

export default ShapesLayout;
