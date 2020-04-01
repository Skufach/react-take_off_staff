import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import styled from "styled-components";
import { configureStore, history } from "./store/configureStore";

import {
  StartPage,
  BlackListPage,
  CallCenterPage,
  InterviewPage,
  UsersPage
} from "./ui/pages";

import { Menu } from "./ui/organisms";

const { store } = configureStore();

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContainer>
          <Router>
            <Menu />
            <Switch>
              <Route exact path="/">
                <StartPage />
              </Route>
              <Route path="/interview">
                <InterviewPage />
              </Route>
              <Route path="/users">
                <UsersPage />
              </Route>
              <Route path="/blacklist">
                <BlackListPage />
              </Route>
              <Route path="/callcenter">
                <CallCenterPage />
              </Route>
              <Redirect to="/interview" />
            </Switch>
          </Router>
        </AppContainer>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
