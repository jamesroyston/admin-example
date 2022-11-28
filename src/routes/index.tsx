import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { All, Detail } from "@src/features/hospital-management";

export const ALL_PATH = "/hospitals/all";
export const DETAILS_PATH = "/hospitals/detail";
export const ERROR_PATH = "/404";
const ROOT_PATH = "/";

export const Routes = () => (
  <Switch>
    <Route path={`${DETAILS_PATH}/:id`} component={Detail} />
    <Route path={ALL_PATH} component={All} />
    <Route path={ERROR_PATH}>
      <div>Whoops, something went wrong.</div>
    </Route>
    <Route exact path={ROOT_PATH}>
      <Redirect to={ALL_PATH} />
    </Route>
    <Route>
      <Redirect to={ERROR_PATH} />
    </Route>
  </Switch>
);
