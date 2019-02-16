import flowState from '../../Constants/SubHeaderStates'
function SubNavBarReducer(state = {}, action) {

    let newState = Object.assign({},state);
    console.log("The sub header state is ", action.type)
    switch(action.type) {
        case flowState.LABOR:
            newState = action.click;
            return newState;
        case flowState.PRODUCTS:
            newState = action.click;
            return newState;
        case flowState.LABOR_ACTIVITIES:
            newState = action.click;
            return newState;
        case flowState.PRODUCTION_ACTIVITIES:
            newState = action.click;
            return newState;
        default :
            return state;
    }
}

export default SubNavBarReducer;