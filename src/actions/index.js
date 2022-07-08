const addToBasket = (good) => {
    return {
        type: 'GOOD_ADDED_TO_BASKET',
        payload: good
    };
};

const deletedFromBasket = (goodId) => {
    return {
        type: 'GOOD_DELETED_FROM_BASKET',
        payload: goodId
    };
};

const addSale = (sale) => {
    return {
        type: 'ADD_SALE',
        payload: sale
    };
}; 

export {addToBasket, deletedFromBasket, addSale};