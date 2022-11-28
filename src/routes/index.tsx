import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Add, All, Detail, Edit } from "@src/features/hospital-management";

export const ALL_PATH = "/hospitals/all";
export const ADD_PATH = "/hospitals/add";
export const DETAILS_PATH = "/hospitals/detail";
export const EDIT_PATH = "/hospitals/edit";
export const ERROR_PATH = "/404";
const ROOT_PATH = "/";

export const Routes = () => (
  <Switch>
    <Route path={`${DETAILS_PATH}/:id`} component={Detail} />
    <Route path={ALL_PATH} component={All} />
    <Route path={ADD_PATH} component={Add} />
    <Route path={`${EDIT_PATH}/:id`} component={Edit} />
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
