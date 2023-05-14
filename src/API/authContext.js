// import { setDate } from 'date-fns';
import PropTypes from 'prop-types'
import { useState, createContext, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [data, SetData] = useState(null);

  const login = () => {
    SetData(data);
  };

  const logout = () => {
    SetData(null);
  };

  return <AuthContext.Provider
    value={{
      ...data,
      login,
      logout
    }}
  >{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext)


AuthProvider.propTypes = {
  children: PropTypes.node,
};

