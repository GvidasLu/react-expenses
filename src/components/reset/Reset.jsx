import { Form, Button } from "react-bootstrap";

const Reset = () => {
    const [email, setEmail] = useState("");
    console.log(email)
    return (
    <>
      <h2 className="mt-3 text-center">Atstatykite savo pamirsta slaptazodi</h2>
      <Form className="mx-auto col-sm-6">
        <Form.Group className="mb-3">
          <Form.Control 
          type="text" 
          placeholder="El. pasto adresas"
          onChange={()=>setEmail{event.target.value}}}
          value={email}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Priminti
        </Button>
      </Form>
    </>
  );
};

export default Reset;
