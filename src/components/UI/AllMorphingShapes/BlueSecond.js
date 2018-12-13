import React, { Component } from 'react';
import posed from "react-pose";
import { tween, easing } from 'popmotion';
import {interpolate} from "flubber";
import {bluePathSecond} from '../../../constantes';
import TweenMax, { Power1 } from "gsap/TweenMax";
import Transition from "react-transition-group/Transition";

const pathIdsBlue = Object.keys(bluePathSecond);

const animate = {
    enter(target, direction, duration = 3, dl = 1){
        const { x, y } = direction;
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
                zIndex: 14
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

    outMorphing(duration){
        setTimeout(() => {
            this.morphShape();
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
                    zIndex: 14
                }
            });
        }, duration);
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.pathIndex === 0 && this.props.event ){

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
                        zIndex: 14
                    }
                });
            }, 400);
        }
        if(this.props.transition && this.props.eventOut && this.state.pathIndex === 1 ){
            this.outMorphing(200);
        }
    }

    render() {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" style={this.state.styleSvg}>
                <IconBlue style={{fill: this.props.color}} pose={this.pathIds[this.state.pathIndex]} />
            </svg>
        )
    }
}

const Blue = (props) => {
    let duration = 3000;

    return (
        <Transition
            in={props.in}
            timeout={duration}
            onEnter={node => {
                animate.enter(node, props.direction);
            }}
            onExit={node => {
                animate.leave(node, props.direction);
            }}
            mountOnEnter
            unmountOnExit
        >
            <Shape {...props}/>
        </Transition>
    )
};


export default Blue;
