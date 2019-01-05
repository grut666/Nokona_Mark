import React from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { activitiesLaborEmployeeLaser , activitiesLaborTicketData, activitiesLaborProductionLaser, activitiesLaborReadLabels} from '../../../Actions/Activities/ActivitiesLaborActions'
import flowState from '../../../../Constants/Activities/LaborActivitiesStates';

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        position: "centered"
    },
    mainDiv: {
        background: "#2196f3",
    }

});

const tabStyle = {
    color: "white",
};

class LaborActivities extends React.Component {
    state = {
        value: 0,
        anchorTables: null,
        anchorActivities: null,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {

        return (
            <div >
                <AppBar position="centered" style={styles().mainDiv}>
                    <Tabs
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        centered
                    >
                        <Tab
                            onClick={this.props.activitiesLaborEmployeeLaser}
                            style={tabStyle}
                            label="Print Label Employee"
                        />

                        <Tab
                            onClick={this.props.activitiesLaborProductionLaser}
                            style={tabStyle}
                            label="Print Label Production"
                        />

                        <Tab
                            onClick={this.props.activitiesLaborTicketData}
                            style={tabStyle}
                            label="Export Label or Ticket Data"
                        />

                        <Tab
                            onClick={this.props.activitiesLaborReadLabels}
                            style={tabStyle}
                            label="Read Labels"
                        />

                    </Tabs>
                </AppBar>

            </div>
        )
    }
}

const mapStateToProps = (currentPageState) => {
    return {
        state: currentPageState,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        activitiesLaborEmployeeLaser: () => dispatch(activitiesLaborEmployeeLaser(flowState.EMPLOYEE_LABELS_LASER)),
        activitiesLaborTicketData: () => dispatch(activitiesLaborTicketData(flowState.EXPORT_LABOR_TICKET_DATA)),
        activitiesLaborProductionLaser: () => dispatch(activitiesLaborProductionLaser(flowState.PRODUCTION_LABELS_LASER)),
        activitiesLaborReadLabels: () => dispatch(activitiesLaborReadLabels(flowState.READ_LABELS)),
    }
}

let laborActivities =  connect(mapStateToProps,mapDispatchToProps)(LaborActivities);
export default withStyles(styles)(laborActivities);

