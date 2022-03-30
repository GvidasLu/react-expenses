import {Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";
import {register} from "../../../services/authService";

const Register = () => {
    const [userData, setUserData] = useState({
        name:'',
        email:'',
        password:''
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]:event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        register(userData.name,userData.email,userData.password)
    }
    console.log(userData)
    return(
        <>
            <h2 className="mt-3 text-center">Registruotis</h2>
            <Form className="col-sm-6 mx-auto" onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="text"
                    placeholder="Iveskite varda"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="email"
                    name="email"
                    placeholder="Iveskite el.pasto adresa"
                    value={userData.email}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="password"
                    name="password"
                    placeholder="Iveskite savo slaptazodi"
                    value={userData.password}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">
                    Registruotis
                </Button>
                <div>
                    Turite paskyra? Galite <Link to="/login">Prisijungti</Link>
                </div>
            </Form>
        </>
    )

}

export default Register;