import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from "react-rangeslider";
import SVG from 'react-inlinesvg';
import ArrowButton from '../../UI/ArrowButton';
import { VUE } from '../../../store/actions';
import { theme } from '../../../constantes';
import '../../../assets/css/checkbox.css';

const Container = styled.div`
    position: absolute;
    width: 690px;
    height: 400px;
    left: 195px;
    bottom: 110px;
    z-index: 5;
`;

const ButtonContainer = styled.div`
    position: absolute;
    top: 47px;
    right: 0;
`;

const RelativeContainer = styled.div`
    position: relative;
    text-align: left;
`;

const SelectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 350px;
    height: 180px;
    margin: 50px auto 0 auto;
    transform: translateX(-25%);
`;

const HelpAction = styled.p`
    font-family: "Demos Next Pro", serif;
    font-size: 20px;
`;

const StyledMailbox = styled.div`
    position: relative;
    width: 120px;
    text-align: center;
`;

const Icon = styled.label`
    cursor: pointer;
`;

const IconValue = styled.span`
    position: absolute;
    top: -22px;
    right: -18px;
    width: 70px;
    height: 44px;
    line-height: 40px;
    font-size: 21px;
    background-color: ${theme.color.orange}; 
    border: 3px solid #000;
    border-radius: 45px;
`;

const StyledInput = styled.input`
    position: relative;
    margin-top: 20px;
    width: 28px;
    height: 28px;
    border-radius: 5px;
    border: 3px solid #000;
    background-color: #FFF;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
`;

const StyledSlider = styled(Slider)`
    max-width: 500px;
    font-family: "Cera Basic", sans-serif;
    font-size: 20px;
    font-weight: bold;
`;

class MailControls extends Component {
    constructor(props){
        super(props);
        this.state = {
            mailAmount: 0,
            mailType: '',
            helpAction: "En moyenne, combien de mails envoyez-vous par semaine ?"
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.nextAction = this.nextAction.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
    }

    handleOnChange = (value) => {
        this.setState({ mailAmount: value })
    }

    nextAction(vue){
        if(this.props.vueIndex === VUE.MAIL_QUANTITY) {
            this.setState({ helpAction: "Quelle allure a votre messagerie ?" });
            this.props.changeVue(vue);
            this.props.changeMailAmount(this.state.mailAmount);
        }

        if(this.props.vueIndex === VUE.MAIL_TYPE){
            this.props.changeVue(vue);
            this.props.changeMailType(this.state.mailType);
        }
    }

    checkboxHandler(e){
        this.setState({ mailType: e.target.id })
    }

    render() {
        const labels = {
            0: '0 - 19',
            20: '20 - 39',
            40: '40 - 59',
            60: '60 - 79',
            80: '>80',
        };

        return (
            <Container>
                <RelativeContainer>
                    <HelpAction>
                        {this.state.helpAction}
                    </HelpAction>
                    {this.props.vueIndex === 4 ?
                        <StyledSlider
                            min={0}
                            max={80}
                            step={20}
                            labels={labels}
                            tooltip={false}
                            value={this.state.mailAmount}
                            onChange={this.handleOnChange}
                            />
                    : null}
                    {this.props.vueIndex === 5 ?
                        <SelectContainer>
                            <StyledMailbox>
                                <Icon htmlFor="clean">
                                    <SVG src="./assets/svg/mailbox.svg" />
                                </Icon>
                                <StyledInput
                                    type="radio"
                                    name="mailbox"
                                    onChange={this.checkboxHandler}
                                    id="clean"
                                    className="checkbox" />
                                <SVG src="./assets/svg/check.svg" className="check" />
                            </StyledMailbox>
                            <StyledMailbox>
                                <Icon htmlFor="not-clean">
                                    <SVG src="./assets/svg/mailbox.svg" />
                                    <IconValue>1642</IconValue>
                                </Icon>
                                <StyledInput
                                    type="radio"
                                    name="mailbox"
                                    onChange={this.checkboxHandler}
                                    id="not-clean"
                                    className="checkbox" />
                                <SVG src="./assets/svg/check.svg" className="check" />
                            </StyledMailbox>
                        </SelectContainer>
                    : null}
                    {this.props.vueIndex === VUE.MAIL_QUANTITY || this.props.vueIndex === VUE.MAIL_TYPE ?
                        <ButtonContainer>
                            <ArrowButton action={() => this.nextAction(this.props.vueIndex + 1)} direction="-90deg"/>
                        </ButtonContainer>
                    : null}
                </RelativeContainer>
            </Container>
        );
    }
}

export default MailControls;
