import React from 'react'
import PropTypes from 'prop-types'
import { Container, Navbar } from 'react-bootstrap'

const NaveBar = ({ login }) => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src="/logo_go_my_code.png" alt='GoMyCode logo' style={{ width: "75px" }} /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <p>Signed in as:&ensp;<a href="#login">{login}</a></p>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
NaveBar.defaultProps={
    login:"User full Name"
}
NaveBar.propTypes = {
    login: PropTypes.string,
};

export default NaveBar