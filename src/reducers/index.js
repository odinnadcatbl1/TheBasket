const initialState = {
    goods: [
        {
            id: '1',
            key: '1',
            name: "first",
            price: "400"
        }, 
    
        {
            id: '2',
            key: '2',
            name: "second",
            price: "500"
        }
    ],

    sale: 10,
};



const addToBasket = (state, good) => {
    return { 
        ...state,
        goods: [
            ...state.goods,
            good
        ]
    }
};

const deletedFromBasket = (state, goodId) => {
    console.log(goodId)
    const newData = state.goods.filter((good) => {return good.id !== goodId});
    return {
        ...state,
        goods: [
            ...newData
        ]
    };    
};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GOOD_ADDED_TO_BASKET':
            return addToBasket(state, action.payload);
        
        case 'GOOD_DELETED_FROM_BASKET': 
            return deletedFromBasket(state, action.payload);
        
        case 'ADD_SALE': 
            return {
                ...state,
                sale: action.payload
            }

        default:
            return state;

    }
};

export default reducer;