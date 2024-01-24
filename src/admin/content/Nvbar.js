import React from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
   
  } from "reactstrap";

export default function Nvbar(){
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    return(

        <Navbar className="bg-info" expand="lg">
                <Container>
                  <NavbarBrand
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Icons
                  </NavbarBrand>
                  <button
                    onClick={() => {
                      document.documentElement.classList.toggle("nav-open");
                      setCollapseOpen(!collapseOpen);
                    }}
                    aria-expanded={collapseOpen}
                    className="navbar-toggler"
                    type="button"
                  >
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                  <Collapse isOpen={collapseOpen} navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <NavLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i
                            aria-hidden={true}
                            className="now-ui-icons ui-1_send"
                          ></i>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          to='/admin/profile'
                          tag={Link}
                        >
                          <i
                            aria-hidden={true}
                            className="now-ui-icons users_single-02"
                          ></i>
                        </NavLink>
                      </NavItem>
                      <UncontrolledDropdown nav>
                        <DropdownToggle
                          caret
                          color="default"
                          href="#pablo"
                          nav
                          onClick={(e) => e.preventDefault()}
                        >
                          <i
                            aria-hidden={true}
                            className="now-ui-icons ui-1_settings-gear-63"
                          ></i>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem header tag="a" >
                         

                            Make an action
                          </DropdownItem>
                          <DropdownItem
                            classname='d-dlex mx-2'
                            to='/admin/profile'
                          tag={Link}
                            
                          >
                              <i className="now-ui-icons users_single-02" style={{ marginRight: '10px' }} />
                              View Profile
                          </DropdownItem>
                          <DropdownItem
                            classname='d-dlex mx-2'
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="now-ui-icons media-1_button-power" style={{ marginRight: '10px' }} />
                            Logout


                          </DropdownItem>
                          
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>
                  </Collapse>
                </Container>
              </Navbar>
    );
}