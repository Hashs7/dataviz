import React from 'react';
import styled from 'styled-components';
import AnimatedTitle from '../../UI/AnimatedTitle';
import SVG from 'react-inlinesvg';
import MailControlsContainer from '../../../containers/MailControlsContainer';
import { VUE } from "../../../store/actions";
import '../../../assets/css/range.css'
import { connect } from 'react-redux';
import { BoxPosed } from "../../style/animation";
import { isVue } from "../../../methods";
import { Description } from "../../style/heading";

const Title = styled.div`
    font: 48px "Cera Basic", sans-serif;
`;

const TitleUnderline = styled(SVG)`
    display: block;
    width: 433px;
`;

const TitleContainer = styled.div`
    color: #fff;
    position: relative;
    text-align: left;
    z-index: 16;
    margin: 110px 0 0 200px;
    max-width: 450px;
    & polyline {
        stroke: #fff;
    }
    @media (max-height: 1060px) {
        margin: 30px 0 0 200px;
    }
`;

class Mail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            txt: '',
            desc: '',
            show: false
        };
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                txt: 'En quelle quantité ?',
                desc: 'Répondez aux questions  pour avoir une estimation de l’impact de vos mails sur l’environnement.',
                show: true
            })
        }, 1700);
    }

    render(){
        const vueIndex = this.props.vueIndex;

        return (
            <div>
                <TitleContainer>
                    <Title>
                        <AnimatedTitle size={48} weight="bold">
                            {this.state.txt}
                        </AnimatedTitle>
                    </Title>
                    <BoxPosed>
                        <TitleUnderline src="./assets/svg/wave-underline-quantity.svg"/>
                    </BoxPosed>
                    <Description>
                        {isVue(vueIndex, [VUE.MAIL_QUANTITY, VUE.MAIL_TYPE] ) ? this.state.desc :
                            'À l’échelle d’un utilisateur cet impact semble\n' +
                            'dérisoire. Mais, à l’échelle mondiale, l’impact\n' +
                            'est colossal.'}
                    </Description>
                </TitleContainer>
                <BoxPosed>
                    <MailControlsContainer />
                </BoxPosed>
            </div>
        );
    }
}

/**
 *
 * @param state
 * @returns {{vueIndex: (number|boolean|*)}}
 */
const mapStateToProps = state => {
    return {
        vueIndex: state.current.vue,
    }
};

export default connect(mapStateToProps, null)(Mail)
