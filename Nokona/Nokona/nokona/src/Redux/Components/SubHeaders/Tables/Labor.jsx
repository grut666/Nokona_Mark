import React from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import flowState from '../../../../Constants/Tables/TablesLaborStates';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TablesLaborEmployee , TablesLaborJobs, TablesLaborCodes, TablesLaborOperations, TablesLaborSegments} from '../../../Actions/Tables/TablesLaborAction'
import subFlowState from '../../../../Constants/SubHeaderStates';



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

class Labor extends React.Component {
    state = {
        value: 0,
        anchorTables: null,
        anchorActivities: null,
    };

    handleTables = event => {
        this.setState({ anchorTables: event.currentTarget });
    };

    handleActivities = event => {
        this.setState({ anchorActivities: event.currentTarget });
    };

    handleQueries = event => {
        this.setState({ queries: event.currentTarget });
    };

    handleReports = event => {
        this.setState({ reports: event.currentTarget });
    };

    handleLists = event => {
        this.setState({ lists: event.currentTarget });
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
                            onClick={this.props.TablesLaborEmployee}
                            style={tabStyle}
                            label="Employees"
                        />


                        <Tab
                            onClick={this.props.TablesLaborJobs}
                            style={tabStyle}
                            label="Jobs"
                        />

                        <Tab
                            onClick={this.props.TablesLaborCodes}
                            style={tabStyle}
                            label="Labor Codes"
                        />



                        <Tab
                            onClick={this.props.TablesLaborOperations}
                            style={tabStyle}
                            label="Operations"
                        />


                        <Tab
                            onClick={this.props.TablesLaborSegments}
                            style={tabStyle}
                            label="Segments"
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
        TablesLaborEmployee: () => dispatch(TablesLaborEmployee(flowState.EMPLOYEE)),
        TablesLaborJobs: () => dispatch(TablesLaborJobs(flowState.JOBS)),
        TablesLaborCodes: () => dispatch(TablesLaborCodes(flowState.LABORCODE)),
        TablesLaborOperations: () => dispatch(TablesLaborOperations(flowState.OPERATIONS)),
        TablesLaborSegments: () => dispatch(TablesLaborSegments(flowState.SEGMENTS)),
    }
}

let labor =  connect(mapStateToProps,mapDispatchToProps)(Labor);
export default withStyles(styles)(labor);

