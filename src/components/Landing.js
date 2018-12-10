import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import Home from './pages/Home/Home';
import Mail from './pages/Mail/Mail';
import Energy from './pages/Energy/Energy';
import DataCentersContainer from '../containers/DataCentersContainer';
import ShapesLayoutContainer from '../containers/ShapesLayoutContainer';
import BandwidthContainer from '../containers/BandwidthContainer';
import { Route, Switch } from 'react-router-dom';

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
        opacity: 0
    }
});

const Landing = () => (
    <Route render={({ location }) => (
        <ShapesLayoutContainer>
                <PoseGroup>
                    <RouteContainer key={location.key ? location.key : "xp"} >
                        {console.log(location)}
                        <Switch location={location}>
                            <Route exact path="/" component={Home} key="home" />
                            <Route path="/pourquoi" component={DataCentersContainer} key="why" />
                            <Route path="/quelle-quantité" component={Mail} key="mail" />
                            <Route path="/par-qui" component={BandwidthContainer} key="bandwidth" />
                            <Route path="/a-venir" component={Energy} key="energy" />
                        </Switch>
                    </RouteContainer>
                </PoseGroup>
        </ShapesLayoutContainer>
    )} />
);

export default Landing;

