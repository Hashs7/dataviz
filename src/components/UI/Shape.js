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
`;

const animate = {
    enter(target, direction, cb){
        const { x, y } = direction;
        return TweenMax.from(target, 3, {
            x,
            y,
            ease: Power1.easeOut,
        })
    },
    leave(target, direction, cb){
        const { x, y } = direction;
        return TweenMax.to(target, 3, {
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
        animate.enter(this.dom.root, this.props.direction);
        // animate.enter(this.elRef.current, () => {});
    }

    render() {
        return (
            <StyledSVG ref={ this.elRef } {...this.props}  />
        );
    }
}

const AnimatedShape = (props) => {
    return (
        <Transition
            in={props.in}
            timeout={1500}
            onEnter={node => {
                console.log('entering')
                animate.enter(node, props.direction, () => {});
            }}
            onExit={node => {
                console.log('exit')
                animate.leave(node, props.direction, () => {});
            }}
            mountOnEnter
            unmountOnExit
        >
            <Shape {...props}/>
        </Transition>
    )
};

export default AnimatedShape;

