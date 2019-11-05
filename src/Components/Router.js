import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
  // 두 개의 Route가 같이 Render되는 것을 막기 위해
  // Switch를 사용
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/nomflix" exact component={Home} />
        <Route path="/nomflix/tv" component={TV} />
        <Route path="/nomflix/search" component={Search} />
        <Route path="/nomflix/movie/:id" component={Detail} />
        <Route path="/nomflix/show/:id" component={Detail} />
        <Redirect from="*" to="/nomflix" />
      </Switch>
    </>
  </Router>
);
