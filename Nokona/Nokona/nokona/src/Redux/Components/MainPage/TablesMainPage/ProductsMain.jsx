import React from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles'
//import  {mainPageState} from '../../../Actions/MainPageAction'
import tableProductStates from '../../../../Constants/Tables/TablesProductStates'

import Jobs from '../../Forms/Tables/Products/Jobs'
import BillOfMaterials from '../../Forms/Tables/Products/BillOfMaterials'
import RawMaterials from '../../Forms/Tables/Products/RawMaterials'




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

class ProductsMain extends React.Component {



    handleChange = name => event => {
        this.setState({
            [name] : event.target.value,
        });
    };

    render() {
            console.log(this.props.state)
      if (this.props.state.currentPageState === tableProductStates.BILL_OF_MATERIALS) {
            return (
                <div>
                    <section>
                        <BillOfMaterials/>
                    </section>
                </div>
            )
        } else if (this.props.state.currentPageState === tableProductStates.CATEGORIES) {
            return (
                <div>
                    <section>
                        <RawMaterials/>
                    </section>
                </div>
            )
        } else if (this.props.state.currentPageState === tableProductStates.JOBS) {
            return (
                <div>
                    <section>
                        <Jobs/>
                    </section>
                </div>
            )
        } else if (this.props.state.currentPageState === tableProductStates.RAW_MATERIALS) {
            return (
                <div>
                    <section>
                        <RawMaterials/>
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

let productsMain = connect(mapStateToProps,null)(ProductsMain);
export default withStyles(styles)(productsMain);