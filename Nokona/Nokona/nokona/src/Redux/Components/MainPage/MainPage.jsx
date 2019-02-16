import React from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles'
import  {mainPageState} from '../../Actions/MainPageAction'
import flowState from '../../../Constants/Tables/TablesLaborStates'
import SubHeaderStates from '../../../Constants/SubHeaderStates'
import LaborMain from './TablesMainPage/LaborMain'
import ProductsMain from './TablesMainPage/ProductsMain'
import LaborActivitiesMain from './TablesMainPage/LaborActivitiesMain'
import ProductionActivitiesMain from './TablesMainPage/ProductionActivitiesMain'


// import EmployeeLabels from '../Forms/Activities/LaborActivities/PrintLabelsLaser/EmployeeLabels'
// import ProductionLabels from '../Forms/Activities/LaborActivities/PrintLabelsLaser/ProductionLabels'
// import ExportLabelAndTicketsData from '../Forms/Activities/LaborActivities/ExportLabelAndTicketsData'
// import ExportProductionDataToExcel from '../Forms/Activities/ProductionActivities/ExportProductionDataToExcel'
// import ImportRmData from '../Forms/Activities/ProductionActivities/ImportRmData'
// import BlanketRawMaterialsChange from '../Forms/Activities/ProductionActivities/BlanketRawMaterialsChange'
// import ProductionStatusByJob from '../Forms/Queries/Production Queries/ProductionStatusByJob'
// import WhatIfForMaterials from '../Forms/Queries/Production Queries/WhatIfForMaterials'
// import ReadLabels from '../Forms/Activities/LaborActivities/ReadLabels'
// import RawMaterials from '../Forms/Tables/Products/RawMaterials'


const styles = theme => ({
    container: {
        //display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class MainPage extends React.Component {



    handleChange = name => event => {
        this.setState({
            [name] : event.target.value,
        });
    };

    render() {

        if (this.props.state.currentPageState === "MAINPAGE"){
            return (
                <div>
                    <h1>
                        Main Page
                    </h1>
                    <section>
                        This is the main page section. Please select a form from the navigation bar above to begin.
                    </section>
                </div>
            )
        }

        if (this.props.state.SubNavBar === SubHeaderStates.LABOR){
            return (
                <div>
                    <section>
                        <LaborMain/>
                    </section>
                </div>
            )


        } else if (this.props.state.SubNavBar === SubHeaderStates.PRODUCTS){
            return (
                <div>
                    <section>
                        <ProductsMain/>
                    </section>
                </div>
            )
        } else if (this.props.state.SubNavBar === SubHeaderStates.LABOR_ACTIVITIES){
            return (
                <div>
                    <section>
                        <LaborActivitiesMain/>
                    </section>
                </div>
            )
        } else if (this.props.state.SubNavBar === SubHeaderStates.PRODUCTION_ACTIVITIES){
            return (
                <div>
                    <section>
                        <ProductionActivitiesMain/>
                    </section>
                </div>
            )

        }

    }
}

const mapStateToProps = (currentPageState) => {
    return {
        state: currentPageState,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        initialState: () =>
            dispatch(mainPageState(flowState.MAINPAGE))

    }
}

let mainPage = connect(mapStateToProps,mapDispatchToProps)(MainPage);
export default withStyles(styles)(mainPage);