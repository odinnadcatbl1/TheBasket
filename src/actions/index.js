const addToBasket = (good) => {
    return {
        type: 'GOOD_ADDED_TO_BASKET',
        payload: good
    };
};

export {addToBasket};