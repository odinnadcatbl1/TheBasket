const initialState = [
    {
        id: 1,
        name: "first",
        price: "400"
    }, 

    {
        id: 2,
        name: "second",
        price: "500"
    }
]

const addToBasket = (state, good) => {
    state.push(good);
    console.log(state);
    return state;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GOOD_ADDED_TO_BASKET':
            addToBasket(state, action.payload);

        default:
            return state;

    }
}

export default reducer;