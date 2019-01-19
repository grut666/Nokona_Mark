import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
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
        width: '100%',
        maxWidth: 800,
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

class BlanketRawMaterialsChange extends React.Component {

    state = {
        checked: [0],
    };

    handleChange = name => event => {
        this.setState({
            [name] : event.target.value,
        });
    };

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Typography variant="h6" color="inherit" style={headerStyle.styling}>
                    Production Status By Job
                </Typography>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Job Name"
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

                </form>
                <form className={classes.container} noValidate autoComplete="off">

                </form>
                <section style={listStyles().mainSection}>
                    <Typography variant="h6" color="inherit" style={headerStyle.styling}>
                        Data Created - Ticket Status - Date of Last Status - Ticket Quantity - Last Op. Completed - Total Operations - Percent Complete - Last Operation - Ticket Key
                    </Typography>
                    <List className={classes.root} style={listStyles().listLeft}>
                        {[0, 1, 2, 3,5,6,7].map(value => (
                            <ListItem key={value} role={undefined} dense button onClick={this.handleToggle(value)}>
                                <Checkbox
                                    checked={this.state.checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                />
                                <ListItemText primary={`Line item ${value + 1}`} />
                            </ListItem>
                        ))}
                    </List>
                </section>
                <div>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Get Jobs
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Close Tickets
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Close
                    </Button>

                </div>
            </div>
        )
    }
}

BlanketRawMaterialsChange.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlanketRawMaterialsChange);