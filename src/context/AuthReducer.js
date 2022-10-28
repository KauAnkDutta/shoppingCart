const AuthReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return{
               ...state,
               product: [...action.payload] 
            }

        case "ADD_CART":
            const to_add = action.payload;
            const to_add_id = action.payload.id;

            const exist = state.cart.some((n) => n.id === to_add_id)
            if(exist){
                const cart = state.cart.map((n) => (n.id === to_add_id) ? {...n}: {})
                return{...state, cart}
            }else{
                return{
                    ...state,
                    cart: [...state.cart, to_add] 
                }
            }
            

        case "REMOVE":
            return{
               ...state,
               cart: state.cart.filter((item) => item.id !== action.payload)
            }


        default:
            return state
    }
}

export default AuthReducer;