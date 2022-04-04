import {Form, Button} from "react-bootstrap";
import {useState} from "react";
import {auth,resetPassword} from "../../../services/authServices";
const Reset = ()=>{
    const [email, setEmail] = useState("");
    console.log(email)

    const submitHandler = (event)=>{
        event.preventDefault()
        resetPassword(email)
    }

    return(
        <>
            <h2 className="mt-3 text-center">Atstatykite savo pamirštą slaptažodį!</h2>
             <Form className="mx-auto col-sm-6" onSubmit={submitHandler}>
                 <Form.Group className="mb-3">
                    <Form.Control
                    type="text"
                    placeholder="El. pašto adresas"
                    onChange={(event)=>setEmail(event.target.value)}
                    value={email}
                    />
                 </Form.Group>
                 <Button variant="primary" type="submit">Priminti</Button>
             </Form>
        </>
    )

}

export default Reset;