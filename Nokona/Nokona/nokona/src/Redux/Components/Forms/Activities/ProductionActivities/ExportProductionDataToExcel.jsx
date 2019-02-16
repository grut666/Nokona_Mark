import React from 'react'
import { withStyles } from '@material-ui/core/styles'
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

class ExportProductionDataToExcel extends React.Component {


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
                    Export
                </Typography>
                <div>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Export
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Exit
                    </Button>
                </div>
            </div>
        )
    }
}

ExportProductionDataToExcel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExportProductionDataToExcel);