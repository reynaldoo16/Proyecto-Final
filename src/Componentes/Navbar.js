import { React, useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'

import { Dispositivos } from "./Dispositivos";
import { Domotica } from "./Domotica";
import { Home } from "./Home";
import './Navbar.css'

export const Navegacion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Router>
        <Navbar expand="lg" color="dark" className="py-1 fixed-top">
          <Link className="h3 nav-link" to="/tech">T.E.C.H</Link>
          <NavbarToggler onClick={toggle}><FaBars color="white"/></NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="mx-2">
                <Link className="nav-link" to="/tech/dispositivos">Dispositivos</Link>
              </NavItem>
              <NavItem className="mx-2">
                <Link className="nav-link" to="/tech/domotica">Domotica</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route path="/tech" exact>
            <Home />
          </Route>
          <Route path="/tech/dispositivos">
            <Dispositivos />
          </Route>
          <Route path="/tech/domotica">
            <Domotica />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
