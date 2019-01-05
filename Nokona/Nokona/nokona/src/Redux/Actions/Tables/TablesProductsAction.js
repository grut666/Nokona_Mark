import flowState from '../../../Constants/Tables/TablesLaborStates'

export  function TablesProductsBillOfMaters(click) {
    return {
        type: flowState.EMPLOYEE,
        click
    }
}

export  function TablesProductsCategories(click) {
    return {
        type: flowState.JOBS,
        click
    }
}

export  function TablesProductsJobs(click) {
    return {
        type: flowState.LABORCODE,
        click
    }
}

export  function TablesProductsRawMaterials(click) {
    return {
        type: flowState.OPERATIONS,
        click
    }
}



