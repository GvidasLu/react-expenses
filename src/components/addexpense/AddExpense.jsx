import {Card, Form, Button, FloatingLabel} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import expenseValidation from "../../utilities/expenseValidation";
import Error from "../error/Error";
import {useParams, useNavigate} from "react-router-dom";
import * as services from '../../services/expensesServices'
const AddExpense = (props)=>{
    const [items, setItems] = useState({
        date:'',
        type:'',
        description:'',
        amount:''
    })
    const [errors, setErrors] =useState('');
    const {id}=useParams();
    const navigate = useNavigate();
    console.log(`Puiku gavau dokumento ID: ${id}`)

    useEffect(()=>{
        id && services.getExpenseById(item=>setItems(item),id)
    },[id])

    const handleChange = (e)=>{

        setItems({
            ...items,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        const validate = expenseValidation(items); // Validuojam duomenis
        setErrors(validate) //Setinam state klaidas
        if(Object.keys(errors).length !== 0){ //Tikrinam ar yra klaidu

        }
        props.onSave(items)

    }

    const updateHandler = ()=>{
        services.updateExpense(id,items)
        navigate("/");
    }

    return(
        <>
            <Card>
                <Card.Header>
                    Pridėkite išlaidas į išlaidų sąrašą
                </Card.Header>
                <Card.Body>
                    {errors &&
                        Object.keys(errors).map(keyName=>(<Error error={errors[keyName]}/>))
                    }
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3">
                            <Form.Label>Pasirinkite datą:</Form.Label>
                            <Form.Control type="date" name="date" value={(errors)?errors.date:items.date} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <FloatingLabel label="Pasirinkite išlaidų tipą">
                                <Form.Select value={items.type} name="type" onChange={handleChange}>
                                    <option>Pramogos</option>
                                    <option>Nuoma</option>
                                    <option>Kreditai</option>
                                    <option>Kuras</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                            as="textarea"
                            placeholder="Aprašykite išlaidas"
                            style={{height:'100px'}}
                            name="description"
                            value={items.description}
                            onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Išlaidų suma</Form.Label>
                            <Form.Control type="text" name="amount" value={items.amount} onChange={handleChange}/>
                        </Form.Group>
                        {(id)?
                            <Button onClick={updateHandler}>Atnaujinti</Button>:
                            <Button  type="submit">Saugoti</Button>
                        }
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default AddExpense