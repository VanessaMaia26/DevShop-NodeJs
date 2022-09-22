const initialState = {
    products: [],
    addres: [],
    discount: 0,
    delivery: 0
};

export default (state = initialState, action) => {
    let products = [...state.products];
    
    switch(action.type) {
        case 'ADD_PRODUCT':
            let id = action.payload.data.id;

            let index = products.findIndex(item => item.id == id);
            if(index > -1){
                products[index].qt += action.payload.qt;
            } else {
                products.push({
                    ...action.payload.data,
                    qt: action.payload.qt
                });
             }

             return {...state, products};
        break;
        case 'CHANGE_PRODUCT':
            let products = [...state.products];

            if(products[action.payload.key]) {
                switch(action.payload.type) {
                 case '-':
                     if(products[action.payload.key].qt <= 0) {
                        products = products.filter((item, index)=>index != action.payload.key);
                     }
                 break;
                 case '+':
                     products[action.payload.key].qt++;
                    break;
                }
            }

            return {...state, products};
            break;

        /*case 'SET_TOKEN':
            return {...state, token: action.payload.token};
            break;
            case 'SET_NAME':
            return {...state, token: action.payload.name};
            break;*/
    }

    return state;
}