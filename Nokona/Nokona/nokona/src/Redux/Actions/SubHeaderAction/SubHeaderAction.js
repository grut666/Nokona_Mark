import flowState from '../../../Constants/SubHeaderStates'

export  function SubHeaderLabor(click) {
    return {
        type: flowState.LABOR,
        click
    }
}

export  function SubHeaderProducts(click) {
    return {
        type: flowState.PRODUCTS,
        click
    }
}

export  function SubHeaderLaborActivities(click) {
    return {
        type: flowState.PRODUCTS,
        click
    }
}

export  function SubHeaderProductionActivities(click) {
    return {
        type: flowState.PRODUCTS,
        click
    }
}

