import React from 'react';
import styled from 'styled-components';
import AnimatedTitle from '../../UI/AnimatedTitle';
import { VUE } from '../../../store/actions/index';
import SVG from 'react-inlinesvg';
import MailControlsContainer from '../../../containers/MailControlsContainer';

import '../../../assets/css/range.css'

const Title = styled.div`
    font: 48px "Cera Basic", sans-serif;
`;

const TitleUnderline = styled(SVG)`
    display: block;
    width: 230px;
`;

const Description = styled.p`
    font: 20px 'Demos Next Pro';
    line-height: 1.6;
`;

const TitleContainer = styled.div`
    color: #fff;
    position: relative;
    text-align: left;
    z-index: 6;
    margin: 180px 0 0 200px;
    max-width: 450px;
    & polyline{
        stroke: #fff;
    }
`;

class Mail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            txt: '',
            desc: 'Répondez aux questions  pour avoir une estimation de votre impact sur l’environnement.'
        };
    }

    componentDidMount(){
        setTimeout(() => this.setState({txt: 'En quelle quantité ?'}), 1700);
    }

    render(){
        return (
            <div>
                <TitleContainer>
                    <Title>
                        <AnimatedTitle size={48} weight="bold">
                            {this.state.txt}
                        </AnimatedTitle>
                    </Title>
                    <TitleUnderline src="./assets/svg/wave-underline-double.svg"/>
                    <Description>
                        {this.state.desc}
                    </Description>
                </TitleContainer>
                <MailControlsContainer />

            </div>
        );
    }
}

export default Mail;
