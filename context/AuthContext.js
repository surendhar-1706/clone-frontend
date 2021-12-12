import { createContext, useEffect, useReducer } from "react";

import { AuthReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [authstate, dispatch] = useReducer(AuthReducer, {
    isAuthenticated: false,
    access: null,
    refresh: null,
  });
  useEffect(() => {}, [authstate]);

  return (
    <div>
      <AuthContext.Provider value={{ authstate, dispatch }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthContextProvider;
