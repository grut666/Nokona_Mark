import React from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import flowState from '../../../../Constants/Tables/TablesProductStates';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TablesProductsBillOfMaters , TablesProductsCategories, TablesProductsJobs, TablesProductsRawMaterials} from '../../../Actions/Tables/TablesProductsAction'
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

class Products extends React.Component {
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
                            onClick={this.props.TablesProductsBillOfMaters}
                            style={tabStyle}
                            label="Bill of Materials"
                        />


                        <Tab
                            onClick={this.props.TablesProductsCategories}
                            style={tabStyle}
                            label="Categories"
                        />

                        <Tab
                            onClick={this.props.TablesProductsJobs}
                            style={tabStyle}
                            label="Jobs"
                        />

                        <Tab
                            onClick={this.props.TablesProductsRawMaterials}
                            style={tabStyle}
                            label="Raw Materials"
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
        TablesProductsBillOfMaters: () => dispatch(TablesProductsBillOfMaters(flowState.BILL_OF_MATERIALS)),
        TablesProductsCategories: () => dispatch(TablesProductsCategories(flowState.CATEGORIES)),
        TablesProductsJobs: () => dispatch(TablesProductsJobs(flowState.JOBS)),
        TablesProductsRawMaterials: () => dispatch(TablesProductsRawMaterials(flowState.RAW_MATERIALS)),
    }
}

let labor =  connect(mapStateToProps,mapDispatchToProps)(Products);
export default withStyles(styles)(labor);

