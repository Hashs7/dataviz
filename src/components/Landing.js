import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import Mail from './pages/Mail/Mail';
import Energy from './pages/Energy/Energy';
import Final from './pages/Final';
import HomeContainer from '../containers/HomeContainer';
import DataCentersContainer from '../containers/DataCentersContainer';
import ShapesLayoutContainer from '../containers/ShapesLayoutContainer';
import BandwidthContainer from '../containers/BandwidthContainer';
import { Route, Switch } from 'react-router-dom';
import TipContainer from "../containers/TipContainer";

const RouteContainer = posed.div({
    enter: {
        opacity: 1,
        beforeChildren: true,
        transition: {
            duration: 3000,
            delay: 1500,
            opacity: { type: 'tween' },
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 500,
            opacity: { type: 'tween' },
        }
    }
});

const Landing = () => (
    <Route render={({ location }) => (
        <ShapesLayoutContainer>
                <PoseGroup>
                    <RouteContainer key={location.key ? location.key : "xp"} >
                        <Switch location={location}>
                            <Route exact path="/" component={HomeContainer} key="home" />
                            <Route path="/pourquoi" component={DataCentersContainer} key="why" />
                            <Route path="/conseil-equipement"
                                   render={() =>  <TipContainer id="equipement"/>}
                            />
                            <Route path="/quelle-quantite" component={Mail} key="mail" />
                            <Route path="/conseil-messagerie"
                                   render={() =>  <TipContainer id="messagerie"/>}
                            />
                            <Route path="/par-qui" component={BandwidthContainer} key="bandwidth" />
                            <Route path="/conseil-services"
                                   render={() =>  <TipContainer id="services"/>}
                            />
                            <Route path="/a-venir" component={Energy} key="energy" />
                            <Route path="/final" component={Final} key="final" />
                        </Switch>
                    </RouteContainer>
                </PoseGroup>
        </ShapesLayoutContainer>
    )} />
);

export default Landing;

