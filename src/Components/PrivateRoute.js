import React from 'react';
import { Route } from 'react-router-dom';
import { userSelector } from 'react-redux';

export default ({ children, ...rest }) => {
    const history = userHistory();
    const token = userSelector(state => state.user.token);

    if(!token || token == '') {
        history.push(login);
        return null;
    }

    return <Route {...rest}>{children}</Route>;
}