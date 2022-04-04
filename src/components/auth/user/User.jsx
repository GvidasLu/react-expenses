import { Navbar, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, logout } from "../../../services/authService";
import * as userServices from "../../../services/userServices";

const User = () => {

  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate('/')
    }else{
    userServices.getUserData(user, setUserData)
    }
  }, [user, loading])

  console.log(userData);
  return (
    <>
      {user ? ( //Ar turim prisijungusi vartotoja ?
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title={userData.name} id="basic-nav-dropdown">
            <NavDropdown.Item>{userData.email}</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logout}>Atsijungti</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      ) : (
        <Navbar.Collapse className="justify-content-end">
          <p>Prisijungti</p>
        </Navbar.Collapse>
      )}
    </>
  );
};

export default User;
