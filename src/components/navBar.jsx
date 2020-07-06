import React, { Component } from "react";
import { Link } from "react-scroll";

class NavBar extends Component {
  links = ["About", "Experience", "Projects", "Skills", "Contact"];

  collapseRef = React.createRef();

  state = {
    scrollTop: 0,
    screenWidth: 0,
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({ screenWidth: window.innerWidth });
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

  handleCollapse = () => {
    if (this.state.screenWidth < 768) this.collapseRef.current.click();
  };

  render() {
    return (
      <nav className={this.changeBackground()}>
        <button
          ref={this.collapseRef}
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
                <Link
                  key={link}
                  style={{ cursor: "pointer" }}
                  className="nav-item nav-link text-light px-4 py-3"
                  to={`#${link}`}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={this.handleCollapse}
                >
                  {link}
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
