import React from 'react';
import styled from 'styled-components';
import AnimatedTitle from '../../UI/AnimatedTitle';
import { VUE } from '../../../store/actions/index';
import SVG from 'react-inlinesvg';

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

const PieChartTitle = styled.p`
    font: 28px 'Cera Basic';
    font-weight: bold;
    line-height: 1.25;
`;

const Container = styled.div`
    position: relative;
    text-align: left;
    z-index: 6;
    margin: 180px 0 0 200px;
    max-width: 440px;
`;

class DataCenters extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            txt: '',
            desc: 'Découpez le nuage à l’aide de votre curseur pour le découvrir.'
        };
        this.discoverHandler = this.discoverHandler.bind(this);
    }

    componentDidMount(){
        setTimeout(() => this.setState({txt: 'Pourquoi ?'}), 1700);
    }

    discoverHandler(){
        this.props.changeVue(VUE.DISCOVER);
        this.setState({
            desc: 'Car derrière Internet et des termes comme « Cloud » se cache toute une infrastructure réseau ainsi' +
                ' que de multiples data centers stockant tous le contenu d’Internet.' +
                ' Ces équipements ainsi que vos ordinateurs et smartphones personnelles génèrent du gaz à effet de serre.'
        });
    }

    render(){
        return (
            <Container>
                <Title>
                    <AnimatedTitle size={48} weight="bold">
                        {this.state.txt}
                    </AnimatedTitle>
                </Title>
                <TitleUnderline src="./assets/img/svg/wave-underline.svg"/>
                <Description>
                    {this.state.desc}
                </Description>

                {this.props.vueIndex === 3 ?
                    <PieChartTitle>
                        Répartition du gaz à effet de serre généré par le numérique
                    </PieChartTitle>
                : null}

                <button onClick={this.discoverHandler}>découpe sa mer</button>
            </Container>
        );
    }
}

export default DataCenters;
