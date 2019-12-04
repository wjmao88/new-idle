
import React from "react";
import ControlsBar from "./landmarks/ControlsBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { staticRoutes } from './staticRoutes';

import OverviewPage from "./pages/OverviewPage";
import GovernmentPage from "./pages/GovernmentPage";
import PopulationPage from "./pages/PopulationPage";
import IndustryPage from "./pages/IndustryPage";
import SciencePage from "./pages/SciencePage";
import MilitaryPage from "./pages/MilitaryPage";
import DiplomacyPage from "./pages/DiplomacyPage";
import NavBar from "./landmarks/NavBar";
import GameStateProvider from "./GameStateProvider";

const App = () => {
  return (
    <GameStateProvider>
      <Router>
        <ControlsBar />
        <NavBar />
        <hr />
        <Switch>
          <Route path={staticRoutes.overview}>
            <OverviewPage />
          </Route>
          <Route path={staticRoutes.government}>
            <GovernmentPage />
          </Route>
          <Route path={staticRoutes.population}>
            <PopulationPage />
          </Route>
          <Route path={staticRoutes.industry}>
            <IndustryPage />
          </Route>
          <Route path={staticRoutes.science}>
            <SciencePage />
          </Route>
          <Route path={staticRoutes.military}>
            <MilitaryPage />
          </Route>
          <Route path={staticRoutes.diplomacy}>
            <DiplomacyPage />
          </Route>
          <Redirect to={staticRoutes.overview} />
        </Switch>
      </Router>
    </GameStateProvider>
  );
};

export default App;