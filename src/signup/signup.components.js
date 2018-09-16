import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { userAction, technologiesAction } from '../_actions';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import classNames from 'classnames';
import NoSsr from '@material-ui/core/NoSsr';
import Select from 'react-select';
import { technologies } from '../_reducers/technologies.reducers';


const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
    { label: 'American Samoa' },
    { label: 'Andorra' },
    { label: 'Angola' },
    { label: 'Anguilla' },
    { label: 'Antarctica' },
    { label: 'Antigua and Barbuda' },
    { label: 'Argentina' },
    { label: 'Armenia' },
    { label: 'Aruba' },
    { label: 'Australia' },
    { label: 'Austria' },
    { label: 'Azerbaijan' },
    { label: 'Bahamas' },
    { label: 'Bahrain' },
    { label: 'Bangladesh' },
    { label: 'Barbados' },
    { label: 'Belarus' },
    { label: 'Belgium' },
    { label: 'Belize' },
    { label: 'Benin' },
    { label: 'Bermuda' },
    { label: 'Bhutan' },
    { label: 'Bolivia, Plurinational State of' },
    { label: 'Bonaire, Sint Eustatius and Saba' },
    { label: 'Bosnia and Herzegovina' },
    { label: 'Botswana' },
    { label: 'Bouvet Island' },
    { label: 'Brazil' },
    { label: 'British Indian Ocean Territory' },
    { label: 'Brunei Darussalam' },
  ].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
  }));

  
const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      container: {
          display: 'flex',
          flexWrap: 'wrap',
      },
      margin: {
        margin: theme.spacing.unit,
      },
      withoutLabel: {
        marginTop: theme.spacing.unit * 3,
      },
      textField: {
          marginLeft: theme.spacing.unit,
          marginRight: theme.spacing.unit,
          width: 200,
      },
  
      paper: {
          padding: theme.spacing.unit * 2,
          textAlign: 'center',
          color: theme.palette.text.secondary,
      },
  
      button: {
          margin: theme.spacing.unit,
      },

      input: {
        display: 'flex',
        padding: 0,
      },
  
    //   input: {
    //       display: 'none',
    //   },

      valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
      },
      chip: {
        margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
      },
      chipFocused: {
        backgroundColor: emphasize(
          theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
          0.08,
        ),
      },
      noOptionsMessage: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      },
      singleValue: {
        fontSize: 16,
      },
      placeholder: {
        position: 'absolute',
        left: 2,
        fontSize: 16,
      },
    //   paper: {
    //     position: 'absolute',
    //     zIndex: 1,
    //     marginTop: theme.spacing.unit,
    //     left: 0,
    //     right: 0,
    //   },
    //   divider: {
    //     height: theme.spacing.unit * 2,
    //   },
});


function NoOptionsMessage(props) {
    return (
      <Typography
        color="textSecondary"
        className={props.selectProps.classes.noOptionsMessage}
        {...props.innerProps}
      >
        {props.children}
      </Typography>
    );
  }
  
  function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
  }
  
  function Control(props) {
    console.log("props ", props);

    return (
      <TextField
        fullWidth
        InputProps={{
          inputComponent,
          inputProps: {
            className: props.selectProps.classes.input,
            inputRef: props.innerRef,
            children: props.children,
            ...props.innerProps,
          },
        }}
        {...props.selectProps.textFieldProps}
      />
    );
  }
  
  function Option(props) {
    return (
      <MenuItem
        buttonRef={props.innerRef}
        selected={props.isFocused}
        component="div"
        style={{
          fontWeight: props.isSelected ? 500 : 400,
        }}
        {...props.innerProps}
      >
        {props.children}
      </MenuItem>
    );
  }
  
//   function Placeholder(props) {
//     return (
//       <Typography
//         color="textSecondary"
//         className={props.selectProps.classes.placeholder}
//         {...props.innerProps}
//       >
//         {props.children}
//       </Typography>
//     );
//   }
  
//   function SingleValue(props) {
//     return (
//       <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
//         {props.children}
//       </Typography>
//     );
//   }
  
//   function ValueContainer(props) {
//     return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
//   }
  
  function MultiValue(props) {
    return (
      <Chip
        tabIndex={-1}
        label={props.children}
        className={classNames(props.selectProps.classes.chip, {
          [props.selectProps.classes.chipFocused]: props.isFocused,
        })}
        onDelete={props.removeProps.onClick}
        deleteIcon={<CancelIcon {...props.removeProps} />}
      />
    );
  }
  
//   function Menu(props) {
//     return (
//       <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
//         {props.children}
//       </Paper>
//     );
//   }
  
  const components = {
    Control,
    //Menu,
    MultiValue,
    // NoOptionsMessage,
    Option,
    // Placeholder,
    // SingleValue,
    // ValueContainer,
  };
  

  
class SignUp extends Component{

    componentDidMount = () =>{
        const { dispatch } = this.props;
        dispatch(technologiesAction.getTechnologies());
        //console.log("Test Did Mount");
    }
    
    handleChange = prop => event => {
        const { dispatch } = this.props;
        dispatch(userAction.onChangeProps(prop, event));
    }

    signup = event =>{
        const { dispatch } = this.props;
        console.log(this.props.signup);
        let working_technologies = this.props.signup.working_technologies.map((item) => {
            return item.value
        })

        this.props.signup.working_technologies = working_technologies;
        dispatch(userAction.signUp(this.props.signup));
    }

    render(){
        const { classes, theme } = this.props;
        console.log(this.props);
        
        const selectStyles = {
            input: base => ({
              ...base,
              color: theme.palette.text.primary,
            }),
          };

        return(
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography><h1>{'Registration'}</h1></Typography>
                        </Paper>
                        <Paper className={classes.paper}>
                            <div>
                            <TextField
                                label="First Name"
                                value={this.props.signup.first_name}
                                className={classes.textField}
                                onChange = {this.handleChange('first_name')}
                                />
                            <br/>
                            <br/>

                            <TextField
                                label="Second Name"
                                value={this.props.signup.second_name}
                                className={classes.textField}
                                onChange = {this.handleChange('second_name')}
                                />
                            <br/>
                            <br/>

                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup
                                    aria-label="Gender"
                                    name="gender1"
                                    className={classes.group}
                                    value={this.props.signup.gender}
                                    style={{display: 'flex', flexDirection: 'row'}}
                                    onChange={this.handleChange('gender')}
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </RadioGroup>
                            </FormControl>
                            <br/>
                            <br/>

                            <TextField
                                label="User Id"
                                value={this.props.signup.user_id}
                                className={classes.textField}
                                onChange = {this.handleChange('user_id')}
                                />
                            <br/>
                            <br/>

                            <TextField
                                label="Email"
                                value={this.props.signup.email}
                                className={classes.textField}
                                type='email'
                                onChange = {this.handleChange('email')}
                                />
                            <br/>
                            <br/>

                            <TextField
                                label="Password"
                                autoComplete="current-password"
                                type="password"
                                className={classes.textField}
                                value={this.props.signup.password}
                                onChange={this.handleChange('password')}
                            />
                            <br/>
                            <br/>

                            <NoSsr>
                                <Select
                                    classes={classes}
                                    styles={selectStyles}
                                    textFieldProps={{
                                    label: 'Working Technologies',
                                    InputLabelProps: {
                                        shrink: true,
                                    },
                                    }}
                                    options={this.props.technologies.technologies}
                                    components={components}
                                    value={this.props.signup.working_technologies}
                                    onChange={this.handleChange('working_technologies')}
                                    placeholder="Select multiple countries"
                                    isMulti
                                />
                            </NoSsr>
                            <br/>
                            <br/>

                            <Button variant="contained" color="primary" className={classes.button} 
                                    onClick={(event)=>{this.signup()}}
                            >
                                Signup
                            </Button>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

SignUp.propTypes = {
    classes : PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}

const mapStateToProps = (state)=>{
    return {
        signup: state.signup,
        technologies: state.technologies
    }
}

const connectSignUpPage = withRouter(connect(mapStateToProps, null, null, {
    pure : false
})(withStyles(styles, { withTheme: true })(SignUp)))

export { connectSignUpPage as SignUp };