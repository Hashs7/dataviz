import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from "react-rangeslider";
import SVG from 'react-inlinesvg';
import ArrowButton from '../../UI/ArrowButton';
import { VUE } from '../../../store/actions';
import { theme } from '../../../constantes';
import { tween, easing } from 'popmotion';
import MailChart from "./MailChart";
import { isVue } from "../../../methods";
import { Tips } from '../../style/heading';
import '../../../assets/css/checkbox.css';
import { BoxPosed } from "../../style/animation";

const Container = styled.div`
    position: absolute;
    width: 690px;
    height: 390px;
    left: 195px;
    bottom: 60px;
    z-index: 5;
    @media (max-width: 1800px) {
        left: 85px;
    }
`;

const Lines = styled(SVG)`
    display: inline-block;
    width: 123px;
    height: 10px;
`;

const ButtonContainer = styled.div`
    position: absolute;
    top: 47px;
    right: 0;
`;

const RelativeContainer = styled.div`
    position: relative;
    height: 100%; 
    z-index: 1;
    text-align: left;
`;

const Light = styled.p`
    font-weight: normal;
    font-size: 20px;
`;

const ConvertContainer = styled.div`
    max-width: 220px;
    position: absolute;
    right: -220px;
    bottom: 24px;
    color: #fff;
    & polyline {
        stroke: #fff !important;
    }
`;

const ResultContainer = styled.div`
    font-size: 28px;
    font-weight: bold;
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

const Notif = styled.span`
    position: absolute;
    top: -22px;
    right: -18px;
    padding: 0px 10px;
    box-sizing: border-box;
    height: 44px;
    line-height: 34px;
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

const IndexContainer = styled.div`
    position: absolute;
    left: 200px;
    bottom: 90px;
    text-align: center;
`;

const Index = styled.span`
    display: inline-block;
    width: 14px;
    height: 14px;
    margin: 0 20px;
    box-sizing: border-box;
    border: 3px solid #000;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color: .3s ease;
    background-color: ${props => props.isActive ? '#000' : "#FFF"}
`;

class MailControls extends Component {
    constructor(props){
        super(props);
        this.state = {
            mailAmount: 0,
            mailType: '',
            mailNotif: 1,
            userCO2: 0,
            carKm: 0,
            helpAction: "En moyenne, combien de mails envoyez-vous par semaine ?"
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.nextAction = this.nextAction.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
    }

    handleOnChange = (value) => {
        this.setState({ mailAmount: value });
    };

    nextAction(vue) {
        switch(vue){
            case VUE.MAIL_QUANTITY: {
                this.props.changeVue(vue);
                this.setState({helpAction: "En moyenne, combien de mails envoyez-vous par semaine ?"});
                return;
            }
            case VUE.MAIL_TYPE: {
                this.setState({helpAction: "Supprimez-vous vos messages lus et indésirables ?"});
                this.props.changeVue(vue);
                this.props.changeMailAmount(this.state.mailAmount);
                tween({
                    from: 1,
                    to: 1642,
                    duration: 2500,
                    ease: easing.easeOut,
                }).start(v => this.setState({mailNotif: Math.floor(v)}));
                break;
            }
            case VUE.MAIL_DATA: {
                this.props.changeVue(vue);
                this.props.changeMailType(this.state.mailType);
                this.setState({helpAction: ""});
                break
            }
            default: break;
        }
    }

    changeVueHandler(nextVue) {
        if(nextVue === this.props.vueIndex){
            return;
        }
        this.nextAction(nextVue);
    }

    checkboxHandler(e){
        const userCO2 = ((this.state.mailAmount + 10)*10*4);
        this.setState({
            mailType: e.target.id,
            userCO2: userCO2/1000,
            carKm: Math.floor(userCO2/111)
        })
    }

    render() {
        const labels = {
            0: '0 - 19',
            20: '20 - 39',
            40: '40 - 59',
            60: '60 - 79',
            80: '>80',
        };
        const vueIndex = this.props.vueIndex;

        return (
            <Container>
                <RelativeContainer>
                    <HelpAction>
                        {this.state.helpAction}
                    </HelpAction>
                    {isVue(vueIndex, [VUE.MAIL_QUANTITY]) ?
                        <StyledSlider
                            className="mailSlider"
                            min={0}
                            max={80}
                            step={20}
                            labels={labels}
                            tooltip={false}
                            value={this.state.mailAmount}
                            onChange={this.handleOnChange}
                        />
                    : null}

                    {isVue(vueIndex, [VUE.MAIL_TYPE]) ?
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
                                    <Notif>{this.state.mailNotif}</Notif>
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

                    {vueIndex === VUE.MAIL_DATA ?
                        <ResultContainer>
                            <p>Votre empreinte carbone mail est d'environ <strong>{this.state.userCO2}Kg</strong> de CO2 par mois</p>
                            <Lines src="./assets/svg/wave-line-right.svg"/>
                            <MailChart />
                            <ul style={{marginTop: 85}}>
                                <Tips>Privilégiez les messageries instantanées aux mails</Tips>
                                <Tips>Supprimez vos mails lus et inutiles (spams et indésirables)</Tips>
                            </ul>
                            <ConvertContainer>
                                <p>Soit environ<br/>{this.state.carKm} km parcourus</p>
                                <Lines src="./assets/svg/wave-line-right.svg"/>
                                <Light>Pour un trajet en voiture</Light>
                            </ConvertContainer>
                        </ResultContainer>
                    : null}

                    <BoxPosed pose={isVue(vueIndex, [VUE.MAIL_QUANTITY, VUE.MAIL_TYPE]) ? 'enter' : 'exit'}>
                        <IndexContainer>
                            <Index
                                isActive={isVue(vueIndex, [VUE.MAIL_QUANTITY])}
                                onClick={() => this.changeVueHandler(VUE.MAIL_QUANTITY)}/>
                            <Index
                                isActive={isVue(vueIndex, [VUE.MAIL_TYPE])}
                                onClick={() => this.changeVueHandler(VUE.MAIL_TYPE)}/>
                        </IndexContainer>
                    </BoxPosed>


                    {isVue(vueIndex, [VUE.MAIL_QUANTITY, VUE.MAIL_TYPE]) ?
                        <ButtonContainer>
                            <ArrowButton action={() => this.nextAction(this.props.vueIndex + 1)} direction="-90deg"/>
                        </ButtonContainer>
                    : null }
                </RelativeContainer>
            </Container>
        );
    }
}

export default MailControls;
