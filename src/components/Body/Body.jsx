import React from 'react';
import { Switch, Route, Redirect } from "react-router";
import HomePage from '../pages/HomePage/HomePage';
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage';
import NonExistentPage from '../pages/NonExistentPage/NonExistentPage';

const Body = () => {
    return (
        <Switch>
            <Route 
                path='/'
                exact
            >
                <HomePage/>
            </Route>
            <Route 
                path='/about-us'
                exact
            >
                <AboutUsPage/>
            </Route>
            <Route 
                path='/contacts'
                exact
            >
                <ContactsPage/>
            </Route>
            <Route 
                path='/checkout'
                exact
            >
                <CheckoutPage/>
            </Route>
            <Route 
                path='/404' 
                exact
            >
                <NonExistentPage/>
            </Route>
            <Redirect 
                to='/404'
            />
        </Switch>
    )
};

export { Body };