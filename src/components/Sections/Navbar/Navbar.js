import React, { Component } from "react";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav className="navbar-items">
          <h1 className="navbar-logo">Code<span>Stuwar</span></h1>

          <div className="navbar-menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>

          <ul
            className={
              this.state.clicked ? "navbar-menu active" : "navbar-menu"
            }
          >
            {MenuItems.map((items, index) => {
              return (
                <li className="navbar-lista-item" key={index}>
                  <a className={items.cName} href={items.url}>{items.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
