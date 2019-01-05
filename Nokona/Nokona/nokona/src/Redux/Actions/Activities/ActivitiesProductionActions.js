import flowState from '../../../Constants/Activities/ProductionActiviteStates'

export  function activitiesProductionBlanketRaw(click) {
    return {
        type: flowState.BLANKET_RAW_MATERIALS_CHARGE,
        click
    }
}

export  function activitiesProductionExportData(click) {
    return {
        type: flowState.EXPORT_PRODUCTION_DATA,
        click
    }
}

export  function activitiesProductionRMData(click) {
    return {
        type: flowState.IMPORT_RM_DATA,
        click
    }
}



