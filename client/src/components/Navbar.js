import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import "semantic-ui-css/semantic.min.css";
import "./style.css";

 class NavBar extends Component {
  state = { activeItem: "home" };

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { user } = this.props.auth;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name="Home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Item
            name="Todo"
            active={activeItem === "todo"}
            onClick={this.handleItemClick}
            as={Link}
            to="/todo"
          />
          <Menu.Item
            name="users"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
            as={Link}
            to="/users-list"
          />
          <Menu.Item
            
            color="violet"
            position="right"
            name="LOGOUT"
            active={activeItem === "logout"}
            onClick={this.onLogoutClick}
          />
        </Menu>
      </Segment>
    );
  }
}

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(NavBar);