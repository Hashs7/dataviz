import React from 'react';
import styled from 'styled-components';
import AnimatedTitle from '../../UI/AnimatedTitle';
import posed from 'react-pose';
import ButtonContainer from '../../../containers/ButtonContainer';
import * as Snap from "snapsvg";
import { theme } from "../../../constantes";

const Title = posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
});

const StyledTitle = styled(Title)`
    margin: calc(50vh - 36px) 0 0 220px;
    max-width: 740px;
    text-align: left;
    font: 60px "Eksell", serif;
`;

const LaunchPlane = styled.button`
    cursor: pointer;
    position: relative;
    z-index: 10;
    padding: 5px 10px;
    background-color: #FF0;
    color: ${theme.color.blue}
`;

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            txt: '',
        };
        this.timer = () => {};
        this.timerSecond = () => {};
    }

    componentDidMount(){
        this.timer = setTimeout(() => {
            this.setState({txt: 'Le saviez-vous ?'});

            this.timerSecond = setTimeout(() => {
                this.setState({txt: "L'avion ci-dessous pollue plus que l’aviation civile !"})
            }, 4000)
        }, 500)
    }

    componentWillUnmount(){
        clearTimeout(this.timer);
        clearTimeout(this.timerSecond);
    }

    planeAnim(){
        const snapC = Snap("#svgC");

        // SVG C - "Squiggly" Path
        const myPathC = snapC.path("M62.9 14.9c-25-7.74-56.6 4.8-60.4 24.3-3.73 19.6 21.6 35 39.6 37.6 42.8 6.2 72.9-53.4 116-58.9 65-18.2 191 101 215 28.8 5-16.7-7-49.1-34-44-34 11.5-31 46.5-14 69.3 9.38 12.6 24.2 20.6 39.8 22.9 91.4 9.05 102-98.9 176-86.7 18.8 3.81 33 17.3 36.7 34.6 2.01 10.2.124 21.1-5.18 30.1").attr({
            id: "squiggle",
            fill: "none",
            strokeWidth: "4",
            stroke: "#000",
            strokeMiterLimit: "10",
            strokeDasharray: "9 9",
            strokeDashOffset: "988.01"
        });

        // SVG C - Draw Path
        const lenC = myPathC.getTotalLength();

        // SVG C - Animate Path
        myPathC.attr({
            stroke: '#fff',
            strokeWidth: 4,
            fill: 'none',
            // Draw Path
            "stroke-dasharray": "12 6",
            "stroke-dashoffset": "180"
        }).animate({"stroke-dashoffset": 10}, 4500);

        // SVG C - Triangle (As Polyline)
        const Plane1 = snapC.path("M0,10.27,29.81,0,8.4,15.68H0Z");
        const Plane2 = snapC.path("M9.73,16.44,29.81,0,20.24,22.56l-7.2,0Z");
        const Plane3 = snapC.path("M4.81,17.24H8.29L10,20.76,7.39,22.58H4.81Z");
        Plane1.attr({ id: "plane1", fill: "#000" });
        Plane2.attr({ id: "plane1", fill: "#000" });
        Plane3.attr({ id: "plane1", fill: "#000" });

        const triangleGroup = snapC.g( Plane1, Plane2, Plane3  ); // Group polyline

        setTimeout( function() {
            Snap.animate(0, lenC, function( value ) {
                let movePoint = myPathC.getPointAtLength( value );
                triangleGroup.transform( 't' + parseInt(movePoint.x - 15) + ',' + parseInt( movePoint.y - 15) + 'r' + (movePoint.alpha - 90));
            }, 4500);
        });
    }

    render(){
        return (
            <div>
                <StyledTitle>
                    <AnimatedTitle size={60}>
                        {this.state.txt}
                    </AnimatedTitle>
                </StyledTitle>

                <LaunchPlane onClick={this.planeAnim}>Plane</LaunchPlane>
                <svg id="svgC" width="100%" height="100%" viewBox="0 0 620 120" preserveAspectRatio="xMidYMid meet">

                </svg>
                <ButtonContainer link="/pourquoi">
                    Envoyer
                </ButtonContainer>
            </div>
        );
    }
}

export default Home;
