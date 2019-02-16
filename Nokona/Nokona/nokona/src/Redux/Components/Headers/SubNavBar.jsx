import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import subFlowState from '../../../Constants/SubHeaderStates';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Labor from '../SubHeaders/Tables/Labor'
import Products from '../SubHeaders/Tables/Products'
import LaborActivities from '../SubHeaders/Activities/LaborActivities'
import ProductionActivities from '../SubHeaders/Activities/ProductionActivities'
import { connect } from 'react-redux';
import { TablesLaborEmployee , TablesLaborJobs} from '../../Actions/Tables/TablesLaborAction'


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



class SubNavBar extends React.Component {
    state = {
        value: 0,
        anchorTables: null,
        anchorActivities: null,
    };




    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        if (this.props.state.SubNavBar == subFlowState.LABOR)
        {
            return (
                <div >
                    <Labor/>
                </div>
            )
        }
        else if (this.props.state.SubNavBar == subFlowState.PRODUCTS)
        {
            return (
                <div >
                    <Products/>
                </div>
            )
        }
        else if (this.props.state.SubNavBar == subFlowState.LABOR_ACTIVITIES)
        {
            return (
                <div >
                    <LaborActivities/>
                </div>
            )
        }
        else if (this.props.state.SubNavBar == subFlowState.PRODUCTION_ACTIVITIES)
        {
            return (
                <div >
                    <ProductionActivities/>
                </div>
            )
        }
        else {
            return (
                <div >
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    console.log("The subheader state is ", state)
    return {
        state: state,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         initialState: () =>
//             dispatch(mainPageState(FlowState.MAINPAGE))
//
//     }
// }

let subNavBar =  connect(mapStateToProps,null)(SubNavBar);
export default withStyles(styles)(subNavBar);

