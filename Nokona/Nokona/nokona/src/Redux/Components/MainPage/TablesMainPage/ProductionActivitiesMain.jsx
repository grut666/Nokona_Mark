import React from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles'
import activitiesProductionStates from '../../../../Constants/Activities/ProductionActiviteStates'

import ExportProductionData from '../../Forms/Activities/ProductionActivities/ExportProductionDataToExcel'
import ImportRmData from '../../Forms/Activities/ProductionActivities/ImportRmData'
import BlanketRawMaterials from '../../Forms/Activities/ProductionActivities/BlanketRawMaterialsChange'


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

class ProductionActivitiesMain extends React.Component {

    handleChange = name => event => {
        this.setState({
            [name] : event.target.value,
        });
    };

    render() {

        if (this.props.state.currentPageState === activitiesProductionStates.EXPORT_PRODUCTION_DATA) {
            return (
                <div>
                    <section>
                        <ExportProductionData/>
                    </section>
                </div>
            )
        } else if (this.props.state.currentPageState === activitiesProductionStates.IMPORT_RM_DATA) {
            return (
                <div>
                    <section>
                        <ImportRmData/>
                    </section>
                </div>
            )
        } else if (this.props.state.currentPageState === activitiesProductionStates.BLANKET_RAW_MATERIALS_CHARGE) {
            return (
                <div>
                    <section>
                        <BlanketRawMaterials/>
                    </section>
                </div>
            )
        } else {
            return (
                <div>
                    <section>
                        Please select a form.
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

let productionActivitiesMain = connect(mapStateToProps,null)(ProductionActivitiesMain);
export default withStyles(styles)(productionActivitiesMain);