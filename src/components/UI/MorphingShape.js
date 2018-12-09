import React, { Component } from 'react';
import posed from "react-pose";
import { tween, easing } from 'popmotion';
import {interpolate} from "flubber";
import {greenPath, bluePath, orangePath, bluePathSecond} from '../../constantes';
import TweenMax, {Power1} from "gsap/TweenMax";
import Transition from "react-transition-group/Transition";

const pathIdsGreen = Object.keys(greenPath);
const pathIdsBlueSecond = Object.keys(bluePathSecond);
const pathIdsBlue = Object.keys(bluePath);
const pathIdsOrange = Object.keys(orangePath);

const animate = {
    enter(target, direction, duration = 3, dl = 1){
        const { x, y } = direction;
        console.log(duration, dl)
        return TweenMax.from(target, duration, {
            x,
            y,
            delay: dl,
            ease: Power1.easeOut,
        })
    },
    leave(target, direction, duration = 3){
        const { x, y } = direction.opposite;
        return TweenMax.to(target, duration, {
            x,
            y,
            ease: Power1.easeOut,
        })
    }
};

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
            transition: morphTransition,
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

const IconBlueSecond = posed.path(
    pathIdsBlueSecond.reduce((config, id) => {
        config[id] = {
            d: bluePathSecond[id],
            transition: morphTransition
        };
        return config;
    }, {})
);

class Shape extends Component {
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
    }

    componentDidUpdate(prevProps, prevState){
        if(!this.props.event){ return }
        if(this.state.pathIndex === 0){
            setTimeout(() => {
                this.morphShape();
                this.setState({
                    styleSvg: {
                        pointerEvents: 'none',
                        backfaceVisibility: 'hidden',
                        transform: 'scaleX(1.3)',
                        transition: 'transform .2s ease',
                        right: 0,
                        left: 'auto',
                        position: "absolute",
                        bottom: 0,
                        height: '100%',
                        margin: 'auto',
                        zIndex: 4
                    }
                });
            }, 400);
        }
        if(prevState.pathIndex === 1 && this.state.pathIndex === 1){
            setTimeout(this.morphShape, 1700);
            setTimeout(() => {
                this.setState({
                    styleSvg: {
                        pointerEvents: 'none',
                        backfaceVisibility: 'hidden',
                        right: 'auto',
                        left: 0,
                        transition: 'transform 0s',
                        position: "absolute",
                        bottom: 0,
                        height: '100%',
                        margin: 'auto',
                        zIndex: 4
                    }
                });
            }, 1700);
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
            case bluePathSecond:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" style={this.state.styleSvg}>
                        <IconBlueSecond style={{fill: this.props.color}} pose={this.pathIds[this.state.pathIndex]} />
                    </svg>
                );
        }
    }
}

const MorphingShape = (props) => {
    let duration = 3000;

    /*if(props.duration){
        duration = props.duration*1000;
    }*/

    return (
        <Transition
            in={props.in}
            timeout={duration}
            onEnter={node => {
                console.log('enter', node);
                animate.enter(node, props.direction);
            }}
            onExit={node => {
                console.log('leave', node);
                animate.leave(node, props.direction);
            }}
            mountOnEnter
            unmountOnExit
        >
            <Shape {...props}/>
        </Transition>
    )
};


export default MorphingShape;
