import React from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import AnimatedTitle from '../../UI/AnimatedTitle';
import posed from 'react-pose';
import Button from '../../UI/TextButton';
import lottie from 'lottie-web';
import { VUE } from "../../../store/actions";

const Title = posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
});

const ButtonContainer = posed.div({
    enter: {
        y: 60,
        opacity: 0,
        transition: {
            duration: 1000,
        }
    },
    exit: {
        y: -94,
        opacity: 1,
        transition: {
            duration: 1000,
        }
    }
});

const StyledButton = styled(ButtonContainer)`
    position: absolute;
    bottom: -55px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 17;
`;

const StyledTitle = styled(Title)`
    margin: calc(50vh - 36px) 0 0 220px;
    max-width: 740px;
    text-align: left;
    font: 60px "Eksell", serif;
`;

const Plane = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right:0;
    margin: auto;
    z-index: 16; 
`;

class EnterTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: '',
            colored: false,
        };
        this.timer = () => {};
        this.timerSecond = () => {};
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({txt: 'Le saviez-vous ?'});

            this.timerSecond = setTimeout(() => {
                this.setState({txt: "L'avion ci-dessous pollue plus que l’aviation civile !", colored: true})
            }, 4000)
        }, 500)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.txt !== nextState.txt;
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
        clearTimeout(this.timerSecond);
    }

    render(){
        return (
            <StyledTitle>
                <AnimatedTitle size={60} colored={this.state.colored}>
                    {this.state.txt}
                </AnimatedTitle>
            </StyledTitle>
        );
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            button: 'Envoyer',
            buttonEnter: false,
            redirect: false,
            planeAnim: false
        };
        this.plane = React.createRef();
        this.timer = () => {};
        this.nextVue = this.nextVue.bind(this);
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({ buttonEnter: true})
        }, 4500)
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    nextVue() {
        const sound = new Audio("./assets/audio/send.mp3");
        sound.play();

        this.setState({ button: "Envoyé", planeAnim: true });
        setTimeout(() => {
            lottie.loadAnimation({
                container: this.plane.current,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: './assets/avion-enter.json'
            });
        }, 200);

        setTimeout(() => {
            this.setState({ redirect: true});
            this.props.changeVue(VUE.WHY);
        }, 2000)
    }

    render(){
        if(this.state.redirect) {
            console.log("redirect");
            return <Redirect push to="/pourquoi" />;
        }
        return (
            <div>
                <EnterTitle />

                <Plane ref={this.plane} />

                <StyledButton pose={this.state.buttonEnter ? 'exit' : 'enter'}>
                    <Button click={this.nextVue} exit={this.state.planeAnim}>
                        {this.state.button}
                    </Button>
                </StyledButton>
            </div>
        );
    }
}

export default Home;
