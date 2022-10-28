export const addProduct = (product) => ({
    type: "ADD_PRODUCT",
    payload: product,
})

export const addtocart = (item) => ({
    type: "ADD_CART",
    payload: item,
})

export const removefromcart = (id) => ({
    type: "REMOVE",
    payload: id,
})