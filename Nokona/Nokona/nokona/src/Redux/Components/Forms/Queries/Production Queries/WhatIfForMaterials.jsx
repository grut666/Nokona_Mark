import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types';
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

class WhatIfForMaterials extends React.Component {

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
                    This Form Was Empty - Check with Mark
                </Typography>
                <form className={classes.container} noValidate autoComplete="off">
                    <div style={listStyles().textFields}>
                        <TextField
                            id="filled-uncontrolled"
                            label="Raw Material"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                            variant="filled"
                        />
                    </div>
                </form>


            </div>
        )
    }
}

WhatIfForMaterials.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WhatIfForMaterials);