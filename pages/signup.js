import React from "react";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Form from 'react-bootstrap/Form'

function SignUp() {
    const [email, setEmail] = useState("");
    const [username, setUser] = useState("");
    const [password, setPass] = useState("");

    return (
        <container>
            <div><h1>Sign Up!</h1></div>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email"
                            onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email"
                            onChange={(e) => setUser(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                            onChange={(e) => setPass(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </div>
        </container>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SignUp />);

export default SignUp;