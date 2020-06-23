import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';

// Lazy load - Code splitting
const Admin = React.lazy(() => import('./features/Admin'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          {/* <Header /> */}

          <Switch>
            <Redirect exact from="/" to="/Home" />

            <Route path="/admin" component={Admin} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;