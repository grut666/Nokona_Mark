import React from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles'
//import  {mainPageState} from '../../../Actions/MainPageAction'
import flowState from '../../../../Constants/Tables/TablesLaborStates'
import Employee from '../../Forms/Tables/Labor/Employee'
import LaborCode from '../../Forms/Tables/Labor/LaborCode'
import JobsTable from '../../Forms/Tables/Labor/Jobs'
import Operations from '../../Forms/Tables/Labor/Operations'
import Segments from '../../Forms/Tables/Labor/Segments'


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

class LaborMain extends React.Component {

    handleChange = name => event => {
        this.setState({
            [name] : event.target.value,
        });
    };

    render() {

        if (this.props.state.currentPageState === flowState.EMPLOYEE){
            return (
                <div>
                    <section>
                        <Employee/>
                    </section>
                </div>
            )


        } else if (this.props.state.currentPageState === flowState.LABORCODE) {
            return (
                <div>
                    <section>
                        <LaborCode/>
                    </section>
                </div>
            )
        } else if (this.props.state.currentPageState === flowState.OPERATIONS) {
            return (
                <div>
                    <section>
                        <Operations/>
                    </section>
                </div>
            )
        } else if (this.props.state.currentPageState === flowState.SEGMENTS) {
            return (
                <div>
                    <section>
                        <Segments/>
                    </section>
                </div>
            )
        } else if (this.props.state.currentPageState === flowState.JOBS) {
            return (
                <div>
                    <section>
                        <JobsTable/>
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         initialState: () =>
//             dispatch(mainPageState(flowState.MAINPAGE))
//
//     }
// }

let laborMain = connect(mapStateToProps,null)(LaborMain);
export default withStyles(styles)(laborMain);