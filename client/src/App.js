import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';
import { Spinner } from 'reactstrap';
// Lazy load - Code splitting
const Admin = React.lazy(() => import('./features/Admin'));
const ClientUser = React.lazy(() => import('./features/ClientUser'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div><Spinner style={{ width: '3rem', height: '3rem' }} color="success" /></div>}>
        <BrowserRouter>
          {/* <Header /> */}

          <Switch>
            <Redirect exact from="/" to="/Home" />

            <Route path="/Home" component={ClientUser} />
            <Route path="/admin" component={Admin} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;