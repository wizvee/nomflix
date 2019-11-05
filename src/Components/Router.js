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
        <Route path="wizvee.github.io/nomflix" exact component={Home} />
        <Route path="wizvee.github.io/nomflix/tv" component={TV} />
        <Route path="wizvee.github.io/nomflix/search" component={Search} />
        <Route path="wizvee.github.io/nomflix/movie/:id" component={Detail} />
        <Route path="wizvee.github.io/nomflix/show/:id" component={Detail} />
        <Redirect from="*" to="wizvee.github.io/nomflix" />
      </Switch>
    </>
  </Router>
);
