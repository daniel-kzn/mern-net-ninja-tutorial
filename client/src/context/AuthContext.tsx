import { FC, createContext, useReducer } from "react";
import { User } from "../models/User";

// REDUCER

/// type action for reducer

type AuthAction =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT"; payload: null };

/// reducer fonction
export const authReducer = (
  state: AuthState,
  action: AuthAction
): typeof initialAuthState => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

// CONTEXT

interface AuthState {
  user: User;
}

const initialAuthState: AuthState = {
  user: null,
};

interface AuthContext {
  state: AuthState;
  // Generics is action from dispatch
  dispatch: React.Dispatch<AuthAction>;
}

export const AuthContext = createContext<AuthContext>({
  state: { user: null },
  dispatch: () => {},
});

export const AuthProdiver: FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
