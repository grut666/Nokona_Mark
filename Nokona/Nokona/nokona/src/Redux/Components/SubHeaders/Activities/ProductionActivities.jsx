import React from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { activitiesProductionBlanketRaw , activitiesProductionExportData, activitiesProductionRMData} from '../../../Actions/Activities/ActivitiesProductionActions'
import flowState from '../../../../Constants/Activities/ProductionActiviteStates';

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

class ProductionActivities extends React.Component {
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
                            onClick={this.props.activitiesProductionBlanketRaw}
                            style={tabStyle}
                            label="Blanket Raw Materials"
                        />

                        <Tab
                            onClick={this.props.activitiesProductionExportData}
                            style={tabStyle}
                            label="Export Production Data"
                        />

                        <Tab
                            onClick={this.props.activitiesProductionRMData}
                            style={tabStyle}
                            label="Import RM Data"
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
        activitiesProductionBlanketRaw: () => dispatch(activitiesProductionBlanketRaw(flowState.BLANKET_RAW_MATERIALS_CHARGE)),
        activitiesProductionExportData: () => dispatch(activitiesProductionExportData(flowState.EXPORT_PRODUCTION_DATA)),
        activitiesProductionRMData: () => dispatch(activitiesProductionRMData(flowState.IMPORT_RM_DATA)),
    }
}

let productionActivities =  connect(mapStateToProps,mapDispatchToProps)(ProductionActivities);
export default withStyles(styles)(productionActivities);

