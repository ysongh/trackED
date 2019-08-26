import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Signup from './components/auth/Signup';
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Router>
    
  );
}

export default App;
