import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import SVG from "react-inlinesvg";
import TweenMax, { Power1 } from "gsap/TweenMax";
import Transition from 'react-transition-group/Transition'

const StyledSVG = styled(SVG)`
    backface-visibility: hidden;
    position: absolute;
    top: ${props => props.top ? props.top : ""};
    bottom: ${props => props.bottom ? props.bottom : ""};
    left: ${props => props.left ? props.left : ""};
    right: ${props => props.right ? props.right : ""};
    max-width: ${props => props.maxWidth ? props.maxWidth : ""};
    width: ${props => props.width ? props.width : ""};
    height: ${props => props.height ? props.height : ""};
    z-index: ${props => props.zIndex ? props.zIndex : ""};
    @media (min-height: 1100px){
        left: ${props => props.mediawave ? "610px;" : null}
    }
`;

const animate = {
    enter(target, direction, duration = 3, dl = 0){
        const { x, y } = direction;
        return TweenMax.from(target, duration, {
            x,
            y,
            delay: dl,
            ease: Power1.easeOut,
        })
    },
    leave(target, direction, duration = 1.5){
        const { x, y } = direction;
        return TweenMax.to(target, 1.5, {
            x,
            y,
            ease: Power1.easeOut,
        })
    }
};

class Shape extends React.Component {
    constructor(props){
        super(props);
        this.dom = {};
        this.elRef = React.createRef();
    }

    componentDidMount(){
        this.dom.root = ReactDOM.findDOMNode(this);
        animate.enter(this.dom.root, this.props.direction, this.props.duration, this.props.delay );
    }

    render() {
        return (
            <StyledSVG ref={ this.elRef } {...this.props}  />
        );
    }
}

const AnimatedShape = (props) => {
    let duration = 3000;

    if(props.duration){
        duration = props.duration*1000;
    }
    return (
        <Transition
            in={props.in}
            timeout={duration}
            onEnter={node => {
                animate.enter(node, props.direction);
            }}
            onExit={node => {
                if(props.noExit){
                    return;
                }
                animate.leave(node, props.direction);
            }}
            mountOnEnter
            unmountOnExit
        >
            <Shape {...props}/>
        </Transition>
    )
};

export default AnimatedShape;

