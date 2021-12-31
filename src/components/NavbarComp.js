import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default class NavbarComp extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand="lg" bg={this.props.mode} varient={this.props.mode} >
            <Container fluid>
              <Navbar.Brand href="#title">{this.props.title}</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
                  className="me-auto"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Link className='nav-link active' to="/">Home</Link>
                  <Link  className='nav-link ' to="/about">About</Link>
                  <NavDropdown title="dropdown" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                {/*<Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>*/}
              <div className={`form-check form-switch text-${this.props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={this.props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
               </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
            </>
        )
    }
}
