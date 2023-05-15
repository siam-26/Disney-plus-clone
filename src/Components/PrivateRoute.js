import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectUserEmail } from '../features/user/userSlice';

const PrivateRoute = ({children, ...rest }) => {
  const userEmail = useSelector(selectUserEmail);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        userEmail ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
