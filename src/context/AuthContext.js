import {createContext, useReducer} from 'react';
import AuthReducer from './AuthReducer';


const INITIAL_STATE = {
    product : [],
    cart: [],
};

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return(
        <AuthContext.Provider value={{product: state.product, cart:state.cart , dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}