import React from "react";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      error: "",
    };
  }

  render() {
    return (
      <div className="auth-screen">
        <div className="back-header">
          <Icon
            onClick={() => this.props.history.push("/login")}
            className="hover-opacity"
          >
            arrow_back
          </Icon>
        </div>
        <div className="content sign-up">
          <form onSubmit={(e) => this.signUp(e)}>
            <div className="middle">
              <div className="font-light color-main mb-3">
                Create an Account
              </div>
              <div className="fields-block">
                <TextField
                  className="app-style"
                  autoComplete="new-password"
                  maxLength="100"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                  required
                  label="Name"
                />
                <hr style={{ marginTop: '0.5rem', marginBottom: '0.5rem'}}/>
                <TextField
                  className="app-style"
                  autoComplete="new-password"
                  maxLength="100"
                  value={this.state.surname}
                  onChange={(e) => this.setState({ surname: e.target.value })}
                  required
                  label="Surname"
                />
                <hr style={{ marginTop: '0.5rem', marginBottom: '0.5rem'}}/>
                <TextField
                  className="app-style"
                  autoComplete="new-password"
                  maxLength="200"
                  value={this.state.email}
                  onChange={(e) =>
                    this.setState({ email: e.target.value.toLowerCase() })
                  }
                  required
                  type="email"
                  label="Email"
                />
                <hr style={{ marginTop: '0.5rem', marginBottom: '0.5rem'}}/>
                <TextField
                  className="app-style"
                  autoComplete="new-password"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                  required
                  type="password"
                  label="Password"
                />
                <hr style={{ marginTop: '0.5rem', marginBottom: '0.5rem'}}/>
                <TextField
                  className="app-style"
                  autoComplete="new-password"
                  value={this.state.confirmPassword}
                  onChange={(e) =>
                    this.setState({ confirmPassword: e.target.value })
                  }
                  required
                  type="password"
                  label="Confirm Password"
                />
                <hr style={{ marginTop: '0.5rem', marginBottom: '0.5rem'}}/>
                <TextField
                  className="app-style"
                  autoComplete="new-password"
                  value={this.state.phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                  required
                  type="number"
                  label="Phone"
                />
              </div>
              <label className="color-main font-light mt-3 font-12 d-inline-block">
                <input required type="checkbox" style={{margin: 4}}/>
                Accept Terms & Conditions
              </label>
              <br />
              <p className="alert-error">{this.state.error}</p>
              <button
                disabled={this.state.loading}
                className="hover-opacity with-spinner"
              >
                {this.state.loading && (
                  <CircularProgress color="inherit" size={14} thickness={2} />
                )}
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  signUp = async (e) => {
    e.preventDefault();
    const {
      email,
      password,
      confirmPassword,
    } = this.state;

    this.setState({ loading: true, error: "" });
    if (password !== confirmPassword) {
      this.setState({ loading: false, error: "Password doesn't match" });
      return;
    }

    try {
      this.props.history.push("/confirm-account", { email: email });
    } catch (e) {
      this.setState({ loading: false, error: e.message });
    }
  };
}

export default Signup;
