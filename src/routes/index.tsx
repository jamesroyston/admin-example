import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { All, Detail } from '@src/features/hospital-management'
import { StarterPage } from '@src/starter-page';

const ALL_PATH = ['/hospitals/all', '/hospitals'];
const DETAILS_PATH = '/hospitals/details/:id';
const ERROR_PATH = '/404';
const ROOT_PATH = '/';

export const Routes = () => (
  <Switch>
    <Route path={ALL_PATH} component={All}/>
    <Route path={DETAILS_PATH} component={Detail}/>
    <Route path={ERROR_PATH}>
      <div>Whoops, something went wrong.</div>
    </Route>
    <Route exact path={ROOT_PATH} component={StarterPage}/>
    <Route>
      <Redirect to={ERROR_PATH} />
    </Route>
  </Switch>
)
