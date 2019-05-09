export const cart = {
    state: {
        cartItems: [
            // {
            //   productId: 1,
            //   amount: 2
            // }
        ]
    },
    reducers: {
        // handle state changes with pure functions
        addItem(state, payload) {
            console.log('addItem: ', state)
            const item = state.cartItems.find(o => o.productId === payload);
            if (item) {
                const cartItems = state.cartItems.map(o => {
                    if (o.productId === payload) {
                        return {
                            ...o,
                            amount: o.amount + 1
                        }
                    }
                    return o
                })
                return {
                    ...state,
                    cartItems
                }
            }
            return {
                ...state,
                cartItems: [{
                    productId: payload,
                    amount: 1
                }, ...state.cartItems]
            }
        },
        deleteItem(state, payload) {
            return state
        }
    },
    effects: (dispatch) => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        // async incrementAsync(payload, rootState) {
        //   await new Promise(resolve => setTimeout(resolve, 1000))
        //   dispatch.count.increment(payload)
        // }
    })
}