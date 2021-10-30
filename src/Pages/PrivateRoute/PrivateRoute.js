import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    if (isLoading) {
        return <Spinner style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: '50% 50%',
        }}
            animation="grow" className="primaryColor"></Spinner>
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;