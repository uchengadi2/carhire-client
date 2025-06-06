import React from "react";
//import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import { signUp } from "./../../actions";
import SignUpForm from "../authForms/SignUpForm";
import SignUpCreatorForm from "../authForms/SignUpCreatorForm";

class UserSignUpCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      counter: 0,
    };
  }
  componentDidUpdate() {
    // this.props.setToken(this.props.token);
    // this.props.setUserId(this.props.token);
    if (this.state.counter < 0 && this.props.token !== undefined) {
      if (this.props.token.status === "success") {
        this.props.setToken(this.props.token);
        this.props.setUserId(this.props.token);
        this.props.handleSuccessfulSignUpCreatorDialogOpenStatusWithSnackbar(
          "You have successfully signed up"
        );
        this.setState({ counter: 5 });
      } else if (this.props.token.status !== undefined) {
        this.props.handleFailedSignUpDialogOpenStatusWithSnackbar(
          "Could not sign  you up. Please check your connection or the information your provided"
        );
        this.setState({ counter: 6 });
      }
    }
  }

  onSubmit = (formValues) => {
    this.props.signUp(formValues);
    this.setState({ counter: -1 });
  };
  handleMakeOpenLoginFormDialogStatus = () => {
    this.props.handleMakeOpenLoginFormDialogStatus();
  };

  handleMakeCloseSignUpDialogStatus = () => {
    this.props.handleMakeCloseSignUpDialogStatus();
  };

  render() {
    if (this.state.counter <= 0 || this.state.counter === 6) {
      return (
        <Box>
          <SignUpCreatorForm
            onSubmit={this.onSubmit}
           handleMakeOpenCreatorSignUpDialogStatus={
              this.props.handleMakeOpenCreatorSignUpDialogStatus
            }
            handleMakeCloseSignUpCreatorDialogStatus={
              this.props.handleMakeCloseSignUpCreatorDialogStatus
            }
            handleFailedSignUpCreatorDialogOpenStatusWithSnackbar={
              this.props.handleFailedSignUpCreatorDialogOpenStatusWithSnackbar
            }
            handleSuccessfulSignUpCreatorDialogOpenStatusWithSnackbar={
              this.props.handleSuccessfulSignUpCreatorDialogOpenStatusWithSnackbar
            }
           
            handleMakeOpenLoginFormDialogStatus={
              this.props.handleMakeOpenLoginFormDialogStatus
            }
            token={this.props.token}
          />
        </Box>
      );
    } else {
      // this.handleMakeCloseSignUpDialogStatus();
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return { token: state.auth.token };
};

export default connect(mapStateToProps, { signUp })(UserSignUpCreator);
