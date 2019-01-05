import flowState from '../../../Constants/Activities/LaborActivitiesStates'

export  function activitiesLaborEmployeeLaser(click) {
    return {
        type: flowState.EMPLOYEE_LABELS_LASER,
        click
    }
}

export  function activitiesLaborTicketData(click) {
    return {
        type: flowState.EXPORT_LABOR_TICKET_DATA,
        click
    }
}

export  function activitiesLaborProductionLaser(click) {
    return {
        type: flowState.PRODUCTION_LABELS_LASER,
        click
    }
}

export  function activitiesLaborReadLabels(click) {
    return {
        type: flowState.READ_LABELS,
        click
    }
}

