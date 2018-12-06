import React, { Component } from 'react';
import posed from "react-pose";
import { tween, easing } from 'popmotion';
import {interpolate} from "flubber";
import { greenPath, bluePath, orangePath } from '../../constantes';

const pathIdsGreen = Object.keys(greenPath);
const pathIdsBlue = Object.keys(bluePath);
const pathIdsOrange = Object.keys(orangePath);

const morphTransition = ({ from, to }) => (
    tween({
        from: 0,
        to: 1,
        duration: 1800,
        ease: easing.circOut
    }).pipe(interpolate(from, to))
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

const IconGreen = posed.path(
    pathIdsGreen.reduce((config, id) => {
        config[id] = {
            d: greenPath[id],
            transition: morphTransition
        };
        return config;
    }, {})
);

const IconOrange = posed.path(
    pathIdsOrange.reduce((config, id) => {
        config[id] = {
            d: orangePath[id],
            transition: morphTransition
        };
        return config;
    }, {})
);

class MorphingShape extends Component {
    constructor(props){
        super(props);
        this.state = {
            pathIndex: 0,
            styleSvg: {
                pointerEvents: 'none',
                backfaceVisibility: 'hidden',
                left: 'auto',
                right: 0,
                position: "absolute",
                bottom: 0,
                height: '100%',
                margin: 'auto',
                zIndex: 4
            }
        };
        this.pathIds = Object.keys(this.props.pathObj);

        this.morphShape = this.morphShape.bind(this);
    }

    morphShape(){
        const { pathIndex } = this.state;
        const nextIndex = pathIndex + 1;
        this.setState({
            pathIndex: nextIndex > this.pathIds.length - 1 ? pathIndex : nextIndex
        });
        if(nextIndex === 1){
            this.setState({
                styleSvg: {
                    pointerEvents: 'none',
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
    }

    componentDidUpdate(prevProps, prevState){
        if(!this.props.event){ return }

        console.log("update", this.props.event);
        if(this.state.pathIndex === 0){
            setTimeout(this.morphShape, 400);
        }
        if(prevState.pathIndex === 1 && this.state.pathIndex === 1){
            setTimeout(this.morphShape, 1700);
        }
    }

    render() {
        switch(this.props.pathObj){
            case bluePath:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" style={this.state.styleSvg}>
                        <IconBlue style={{fill: this.props.color}} pose={this.pathIds[this.state.pathIndex]} />
                    </svg>
                );
            case greenPath:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" style={this.state.styleSvg}>
                        <IconGreen style={{fill: this.props.color}} pose={this.pathIds[this.state.pathIndex]} />
                    </svg>
                );
            case orangePath:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" style={this.state.styleSvg}>
                        <IconOrange style={{fill: this.props.color}} pose={this.pathIds[this.state.pathIndex]} />
                    </svg>
                );
        }
    }
}

export default MorphingShape;
