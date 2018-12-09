import React from 'react';
import styled from 'styled-components';
import AnimatedTitle from '../../UI/AnimatedTitle';
import posed from 'react-pose';
import ButtonContainer from '../../../containers/ButtonContainer';

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

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            txt: ''
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

    render(){
        return (
            <div>
                <StyledTitle>
                    <AnimatedTitle size={60}>
                        {this.state.txt}
                    </AnimatedTitle>
                </StyledTitle>
                <ButtonContainer link="/pourquoi">
                    Envoyer
                </ButtonContainer>
            </div>
        );
    }
}

export default Home;
