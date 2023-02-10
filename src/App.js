import './App.css';
import React, { useEffect } from "react";
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import Payment from './Payment/Payment'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './datalayer/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders/Orders';

const promise = loadStripe('pk_test_51MZ7ZvSEklETklfBE3KRIEba14xaJO9OBOkdvVLlJD1rETMUq2fRxZklc8OyXUaxVvouqf8Uuv93GNVaB27xrf0Z00dQ9S69jU');

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will run only once when the app component loads
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])
  return (
    // BEM naming convention
    <Router>
      <div className="app">
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>  
  );
}

export default App;
