import React, { Component } from 'react';
import posed from "react-pose";
import { tween, easing } from 'popmotion';
import {interpolate} from "flubber";

const morphTransition = ({ from, to }) => (
    tween({
        from: 0,
        to: 1,
        duration: 1800,
        ease: easing.circOut
    }).pipe(interpolate(from, to))
);

class MorphingShape extends Component {
    constructor(props){
        super(props);
        this.state = {
            pathIndex: 0,
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
        };
        this.pathIds = Object.keys(this.props.pathObj);

        this.morphShape = this.morphShape.bind(this);
    }

    morphShape(){
        console.log('morphing')
        const { pathIndex } = this.state;
        const nextIndex = pathIndex + 1;
        console.log(this.pathIds.length);
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
        console.log(prevState)

        console.log("update", this.props.event);
        if(this.state.pathIndex === 0){
            console.log('first')
            setTimeout(this.morphShape, 400);
        }
        if(prevState.pathIndex === 1 && this.state.pathIndex === 1){
            console.log('second')
            setTimeout(this.morphShape, 1700);
        }
    }

    render() {
        const Icon = posed.path(
            this.pathIds.reduce((config, id) => {
                console.log(morphTransition);
                config[id] = {
                    d: this.props.pathObj[id],
                    transition: ({ from, to }) => (
                        tween({
                            from: 0,
                            to: 1,
                            duration: 1800,
                            ease: easing.circOut
                        }).pipe(interpolate(from, to))
                    )
                };
                return config;
            }, {})
        );

        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" style={this.state.styleSvg}>
                <Icon style={{fill: this.props.color}} pose={this.pathIds[this.state.pathIndex]} />
            </svg>
        );
    }
}

export default MorphingShape;
