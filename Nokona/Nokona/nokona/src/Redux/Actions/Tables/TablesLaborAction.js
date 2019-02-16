import flowState from '../../../Constants/Tables/TablesLaborStates'

export  function TablesLaborEmployee(click) {
    return {
        type: flowState.EMPLOYEE,
        click
    }
}

export  function TablesLaborJobs(click) {
    return {
        type: flowState.JOBS,
        click
    }
}

export  function TablesLaborCodes(click) {
    return {
        type: flowState.LABORCODE,
        click
    }
}

export  function TablesLaborOperations(click) {
    return {
        type: flowState.OPERATIONS,
        click
    }
}

export  function TablesLaborSegments(click) {
    return {
        type: flowState.SEGMENTS,
        click
    }
}

