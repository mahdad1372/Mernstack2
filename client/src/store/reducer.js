const initialState = {
    text : "Registration for owner resturant"
};

const reducer = ( state = initialState , action) => {

    const newState = {...state}

    if (action.type === 'press1'){
        newState.text ='Registration for owner resturant';
    }

    if (action.type === 'press2'){
        newState.text ='Registration for customer';
    }
   
    return newState
}


export default reducer;
