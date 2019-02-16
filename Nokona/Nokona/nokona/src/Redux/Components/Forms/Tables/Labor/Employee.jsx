import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const headerStyle = {
    styling: {
        color: "black",
        marginTop: "30px",
    },
};

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

class Employee extends React.Component {

    state = {
        SelectionBar: '',
        LastName: '',
        FirstName: '',
        EmpId: '',
        BarCodeId: '',
        LaborCode: '',
        Active: ''
    };

    handleChange = name => event => {
        this.setState({
            [name] : event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Typography variant="h6" color="inherit" style={headerStyle.styling}>
                    Labor Table - Employee
                </Typography>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        required
                        id="filled-name"
                        label="Employee Names"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        variant="filled"

                    />
                    <TextField
                        id="filled-uncontrolled"
                        label="Last Name"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-required"
                        label="First Name"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-error"
                        label="Emp ID"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-disabled"
                        label="Bar Code ID"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id=""
                        label="Labor Code"
                        className={classes.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="filled"
                    />

                </form>
                 <div>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Add
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Delete
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Refresh
                    </Button>
                    <Button variant="contained" color="primary"  className={classes.button}>
                        Update
                    </Button>
                     <Button variant="contained" color="primary"  className={classes.button}>
                         Cancel
                     </Button>
                     <Button variant="contained" color="primary"  className={classes.button}>
                         Close
                     </Button>
                </div>
            </div>
        )
    }
}

Employee.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Employee);