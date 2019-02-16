import React from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles'
import activitiesLaborStates from '../../../../Constants/Activities/LaborActivitiesStates'

import ReadLabels from '../../Forms/Activities/LaborActivities/ReadLabels'
import ExportLabelAndTicketsData from '../../Forms/Activities/LaborActivities/ExportLabelAndTicketsData'
import EmployeeLabels from '../../Forms/Activities/LaborActivities/PrintLabelsLaser/EmployeeLabels'
import ProductionLabels from '../../Forms/Activities/LaborActivities/PrintLabelsLaser/ProductionLabels'

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

class LaborActivitiesMain extends React.Component {

    handleChange = name => event => {
        this.setState({
            [name] : event.target.value,
        });
    };

    render() {

        if (this.props.state.currentPageState === activitiesLaborStates.READ_LABELS) {
            return (
                <div>
                    <section>
                        <ReadLabels/>
                    </section>
                </div>
            )
        } else if (this.props.state.currentPageState === activitiesLaborStates.EXPORT_LABOR_TICKET_DATA) {
            return (
                <div>
                    <section>
                        <ExportLabelAndTicketsData/>
                    </section>
                </div>
            )
        } else if (this.props.state.currentPageState === activitiesLaborStates.EMPLOYEE_LABELS_LASER) {
            return (
                <div>
                    <section>
                        <EmployeeLabels/>
                    </section>
                </div>
            )
        } else if (this.props.state.currentPageState === activitiesLaborStates.PRODUCTION_LABELS_LASER) {
            return (
                <div>
                    <section>
                        <ProductionLabels/>
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

let laborActivitiesMain = connect(mapStateToProps,null)(LaborActivitiesMain);
export default withStyles(styles)(laborActivitiesMain);