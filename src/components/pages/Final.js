import React, {Component} from 'react';
import lottie from "lottie-web";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
`;

const Plane = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right:0;
    margin: auto;
    width: 1440px;
    height: 800px; 
`;
const ContentContainer = styled.div`
    
`;



class Final extends Component {
    constructor(props){
        super(props);
        this.plane = React.createRef();
    }
    componentDidMount(){
        setTimeout(() => {
            lottie.loadAnimation({
                container: this.plane.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: './assets/avion-exit.json'
            });
        }, 200);
    }
    render() {
        return (
            <Container>
                <Plane ref={this.plane} />

            </Container>
        );
    }
}

export default Final;
