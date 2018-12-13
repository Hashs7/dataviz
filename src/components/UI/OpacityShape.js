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
    transform: ${props => props.transform ? props.transform : ""};
    cursor: ${props => props.cursor ? props.cursor : ""};
    top: ${props => props.mediascissor ? "42px" : null};
`;

const animate = {
    enter(target, duration = 3, dl = 0){
        return TweenMax.from(target, duration, {
            opacity: 0,
            delay: dl,
            ease: Power1.easeOut,
        })
    },
    leave(target){
        return TweenMax.to(target, 1.5, {
            opacity: 0,
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
        animate.enter(this.dom.root, this.props.duration, this.props.delay );
    }

    render() {
        return (
            <StyledSVG onClick={this.props.click} ref={ this.elRef } {...this.props}  />
        );
    }
}

const OpacityShape = (props) => {
    let duration = 3000;

    if(props.duration){
        duration = props.duration;
    }
    return (
        <Transition
            in={props.in}
            timeout={duration}
            onEnter={node => {
                animate.enter(node, duration, props.delay);
            }}
            onExit={node => {
                if(props.noExit){
                    return;
                }
                animate.leave(node);
            }}
            mountOnEnter
            unmountOnExit
        >
            <Shape {...props}/>
        </Transition>
    )
};

export default OpacityShape;

