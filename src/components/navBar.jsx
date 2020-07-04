import React, { Component } from "react";

class NavBar extends Component {
  links = ["About", "Projects", "Skills", "Contact"];

  state = {
    scrollTop: 0,
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = (event) => {
    let scrollTop = event.target.scrollingElement.scrollTop;
    this.setState({ scrollTop });
  };

  changeBackground = () => {
    const classes = "navbar navbar-expand-lg fixed-top navbar-dark";
    return this.state.scrollTop > 100 ? classes + " silver" : classes;
  };

  render() {
    return (
      <nav className={this.changeBackground()}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {this.links.map((link) => {
              return (
                <a
                  key={link}
                  className="nav-item nav-link text-light px-4 py-3"
                  href="#"
                >
                  {link}
                </a>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
