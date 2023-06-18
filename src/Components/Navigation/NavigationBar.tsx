import * as FaIcons from 'react-icons/fa';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { HomePageTitle, NavBarWrapper } from "./styedNav";
import { Dropdown } from "react-bootstrap";

export const NavigationBar = () => {
    const navigate = useNavigate();
    return (
        <NavBarWrapper>
            <Navbar bg="dark" expand="lg" data-bs-theme="dark" >
                <HomePageTitle><span onClick={() => navigate("/repos")}>Git Repos</span></HomePageTitle>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="justify-content-end" style={{ width: "90%" }}>
                        {sessionStorage.getItem("token") != null ? (
                            <Nav.Link onClick={() => { }}>
                                <Dropdown>
                                    <Dropdown.Toggle variant='' style={{ borderRadius: "35px" }} >
                                        <FaIcons.FaUserCircle style={{ color: "grey", fontSize: "2rem" }}></FaIcons.FaUserCircle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >Dark Mode<FaIcons.FaToggleOff style={{ color: "grey", marginLeft: "50px", fontSize: "1.5rem" }}></FaIcons.FaToggleOff> </Dropdown.Item>
                                            <Dropdown.Item >Profile</Dropdown.Item>
                                            <Dropdown.Item onClick={() => {
                                                sessionStorage.removeItem("token");
                                                navigate("/login");
                                            }}>Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown.Toggle>
                                </Dropdown>
                            </Nav.Link>
                        ) : null}
                        {sessionStorage.getItem("token") == null ? (
                            <Nav.Link onClick={() => navigate("/login")}>Signin</Nav.Link>
                        ) : null}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavBarWrapper>
    );
}

export default NavigationBar;