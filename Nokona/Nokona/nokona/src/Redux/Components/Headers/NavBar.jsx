import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import flowState from '../../../Constants/Tables/TablesLaborStates';
import subFlowState from '../../../Constants/SubHeaderStates';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { TablesLaborEmployee , TablesLaborJobs} from '../../Actions/Tables/TablesLaborAction'
import { SubHeaderLabor , SubHeaderProducts, SubHeaderLaborActivities, SubHeaderProductionActivities} from '../../Actions/SubHeaderAction/SubHeaderAction'



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

class NavBar extends React.Component {
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

    handleTablesClose = () => {
        this.setState({ anchorTables: null });
    };

    handleQueriesClose  = () => {
        this.setState({ queries: null });
    };

    handleReportsClose  = () => {
        this.setState({ reports: null });
    };

    handleListsClose  = () => {
        this.setState({ lists: null });
    };

    handleActivitiesClose = () => {
        this.setState({ anchorActivities: null });
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const { anchorTables, anchorActivities, queries, reports, lists} = this.state;

        return (
            <div >
                <AppBar position="centered" style={styles().mainDiv}>
                    <Tabs
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        centered
                    >
                        <Tab
                            onClick={this.handleTables}
                            style={tabStyle}
                            label="Tables"
                        />

                        <Menu
                            anchorEl={anchorTables}
                            open={Boolean(anchorTables)}
                            onClick={this.handleTablesClose}
                        >
                            <MenuItem onClick={this.props.SubHeaderLabor}>Labor</MenuItem>
                            <MenuItem onClick={this.props.SubHeaderProducts}>Products</MenuItem>

                        </Menu>

                        <Tab
                            onClick={this.handleActivities}
                            style={tabStyle}
                            label="Activities"
                        />
                        <Menu
                            anchorEl={anchorActivities}
                            open={Boolean(anchorActivities)}
                            onClick={this.handleActivitiesClose}
                        >
                            <MenuItem onClick={this.props.SubHeaderLaborActivities}>Labor Activities</MenuItem>
                            <MenuItem onClick={this.props.SubHeaderProductionActivities}>Production Activities</MenuItem>

                        </Menu>


                        <Tab
                            onClick={this.handleQueries}
                            style={tabStyle}
                            label="Queries"
                        />
                        <Menu
                            anchorEl={queries}
                            open={Boolean(queries)}
                            onClick={this.handleQueriesClose}
                        >
                            <MenuItem onClick={this.handleQueriesClose}>Labor Queries</MenuItem>
                            <MenuItem onClick={this.handleQueriesClose}>Production Queries</MenuItem>

                        </Menu>


                        <Tab
                            onClick={this.handleReports}
                            style={tabStyle}
                            label="Reports"
                        />
                        <Menu
                            anchorEl={reports}
                            open={Boolean(reports)}
                            onClick={this.handleReportsClose}
                        >
                            <MenuItem onClick={this.handleReportsClose}>Labor</MenuItem>
                            <MenuItem onClick={this.handleReportsClose}>Products</MenuItem>
                            <MenuItem onClick={this.handleReportsClose}>Cost Books</MenuItem>

                        </Menu>

                        <Tab
                            onClick={this.handleLists}
                            style={tabStyle}
                            label="Lists"
                        />
                        <Menu
                            anchorEl={lists}
                            open={Boolean(lists)}
                            onClick={this.handleListsClose}
                        >
                            <MenuItem onClick={this.handleListsClose}>Labor</MenuItem>
                            <MenuItem onClick={this.handleListsClose}>Products</MenuItem>

                        </Menu>


                    </Tabs>
                </AppBar>

            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    console.log("The dispatch is ", dispatch)
    return {
        SubHeaderLabor: () => dispatch(SubHeaderLabor(subFlowState.LABOR)),
        SubHeaderProducts: () => dispatch(SubHeaderProducts(subFlowState.PRODUCTS)),
        SubHeaderLaborActivities: () => dispatch(SubHeaderLaborActivities(subFlowState.LABOR_ACTIVITIES)),
        SubHeaderProductionActivities: () => dispatch(SubHeaderProductionActivities(subFlowState.PRODUCTION_ACTIVITIES)),

    }
}

let navBar =  connect(null,mapDispatchToProps)(NavBar);
export default withStyles(styles)(navBar);

