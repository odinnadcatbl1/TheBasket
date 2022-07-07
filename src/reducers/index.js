const initialState = {
    goods: [
        {
            id: '1',
            name: "first",
            price: "400"
        }, 
    
        {
            id: '2',
            name: "second",
            price: "500"
        }
    ]
};



const addToBasket = (state, good) => {
    console.log(state, good);
    return { 
        goods: [
            ...state.goods,
            good
        ]
    }
};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GOOD_ADDED_TO_BASKET':
            return addToBasket(state, action.payload);

        default:
            return state;

    }
};

export default reducer;