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

const listStyles = theme => ({
    listLeft: {
        position: "absolute",
        left: "50px",

    },
    listRight: {
        position: "absolute",
        right: "50px",

    },
    mainSection: {
        height: "350px"
    },
    middle: {
        height: "350px",
        width: "105px",
        position: "absolute",
        left: "50%",
        right: "50%",
    },
    textFields: {
        margin: "auto",
    }
})

const styles = theme => ({
    root: {
        width: '50%',
        maxWidth: 325,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,

    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    container: {
        display: 'flex',
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

class LaborCode extends React.Component {

    state = {
        checked: [0],
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
                    Labor Table - Labor Code
                </Typography>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Selection Bar"
                        className={classes.textField}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        margin="normal"
                        fullWidth
                    >

                    </TextField>
                    <div style={listStyles().textFields}>
                        <TextField
                            required
                            id="filled-name"
                            label="Labor Code"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            variant="filled"

                        />
                        <TextField
                            id="filled-uncontrolled"
                            label="Description"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                            variant="filled"
                        />
                        <TextField
                            id="filled-required"
                            label="Labor Rate"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                            variant="filled"
                        />
                        <TextField
                            id="filled-error"
                            label="Category"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                            variant="filled"
                        />
                    </div>

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

LaborCode.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LaborCode);