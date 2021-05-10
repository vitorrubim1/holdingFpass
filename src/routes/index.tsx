import { BrowserRouter, Route, Switch } from "react-router-dom";

import Search from "../pages/Search";
import List from "../pages/List";
import Details from "../pages/Details";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Search} path="/" exact />
        <Route component={List} path="/list" />
        <Route component={Details} path="/details" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
