import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

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

class ReadLabels extends React.Component {

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
                    Export Labels And Tickets Data
                </Typography>
                <Typography variant="h6" color="inherit" style={headerStyle.styling}>
                    Employee Scan
                </Typography>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        required
                        id="filled-name"
                        label="Date"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        variant="filled"

                    />
                    <TextField
                        id="filled-uncontrolled"
                        label="Employee ID"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-required"
                        label="Employee Name"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />
                </form>
                <div>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Page Scan
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Missing Ticket
                    </Button>

                </div>

                <Typography variant="h6" color="inherit" style={headerStyle.styling}>
                    Ticket Scan
                </Typography>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        required
                        id="filled-name"
                        label="Ticket"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        variant="filled"

                    />
                    <TextField
                        id="filled-uncontrolled"
                        label="Quantity"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-required"
                        label="Job Name"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-required"
                        label="Description"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-required"
                        label="Std. Quantity"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />

                </form>
                <Typography variant="h6" color="inherit" style={headerStyle.styling}>
                    Ticket Scan
                </Typography>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        required
                        id="filled-name"
                        label="OpCode"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        variant="filled"

                    />
                    <TextField
                        id="filled-uncontrolled"
                        label="Desciption"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-required"
                        label="Hourly\RateSAH"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-required"
                        label="LaborCode"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-required"
                        label="LaborCode Desc"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-required"
                        label="LaborCode Rate"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />

                </form>
                <List>
                    List Stuff Here - Populate with List Data
                </List>
                <div>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Process
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Abort
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Remove
                    </Button>
                    <Button variant="contained" color="primary"  className={classes.button}>
                        Close
                    </Button>
                </div>
            </div>
        )
    }
}

ReadLabels.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReadLabels);