import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Description from './components/Description';
import Service from './components/Service';
import Product from './components/Product';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/description" component={Description} />
        <Route path="/service" component={Service} />
        <Route path="/product" component={Product} />
        <Route path="/overview" component={Description} /> {/* Assuming Overview is similar to Description */}
      </Switch>
    </Router>
  );
};

export default App;