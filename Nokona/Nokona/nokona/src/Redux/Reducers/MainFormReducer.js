import tablesLaborFlow from '../../Constants/Tables/TablesLaborStates'
import tablesProductFlow from '../../Constants/Tables/TablesProductStates'
import laborActivitiesFlow from '../../Constants/Activities/LaborActivitiesStates'
import productionActivitiesFlow from '../../Constants/Activities/ProductionActiviteStates'
function MainPageReducer(state = tablesLaborFlow.MAINPAGE, action) {

    let newState = Object.assign({},state);
    console.log("The main page reducer is ", action.type)
    switch(action.type) {
        case tablesLaborFlow.EMPLOYEE:
            newState = action.click;
            return newState;
        case tablesLaborFlow.LABORCODE:
            newState = action.click;
            return newState;
        case tablesLaborFlow.JOBS:
            newState = action.click;
            return newState;
        case tablesLaborFlow.OPERATIONS:
            newState = action.click;
            return newState;
        case tablesLaborFlow.SEGMENTS:
            newState = action.click;
            return newState;
        case tablesProductFlow.RAW_MATERIALS:
            newState = action.click;
            return newState;
        case tablesProductFlow.JOBS:
            newState = action.click;
            return newState;
        case tablesProductFlow.CATEGORIES:
            newState = action.click;
            return newState;
        case tablesProductFlow.BILL_OF_MATERIALS:
            newState = action.click;
            return newState;
        //----------------------------------
        case laborActivitiesFlow.PRODUCTION_LABELS_LASER:
            newState = action.click;
            return newState;
        case laborActivitiesFlow.EMPLOYEE_LABELS_LASER:
            newState = action.click;
            return newState;
        case laborActivitiesFlow.EXPORT_LABOR_TICKET_DATA:
            newState = action.click;
            return newState;
        case laborActivitiesFlow.READ_LABELS:
            newState = action.click;
            return newState;
        case productionActivitiesFlow.IMPORT_RM_DATA:
            newState = action.click;
            return newState;
        case productionActivitiesFlow.EXPORT_PRODUCTION_DATA:
            newState = action.click;
            return newState;
        case productionActivitiesFlow.BLANKET_RAW_MATERIALS_CHARGE:
            newState = action.click;
            return newState
        default :
            return state;
    }
}

export default MainPageReducer;