"use client";
import { useContext } from "react";
import { Context } from "@/context/appContext";
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
} from "@/components/bootstrap/client-bootstrap";
import Link from "next/link";

const Demo = () => {
    const { store, actions } = useContext(Context);
    return (
        <Container>
            <ListGroup>
                {store.demo.map((item, index) => {
                    return (
                        <ListGroupItem
                            key={index}
                            className="d-flex justify-content-between"
                            style={{ background: item.background }}
                        >
                            <Link href={"/single/" + index}>
                                <span>Link to: {item.title}</span>
                            </Link>
                            {
                                // Conditional render example
                                // Check to see if the background is orange, if so, display the message
                                item.background === "orange" ? (
                                    <p style={{ color: item.initial }}>
                                        Check context/flux.js scroll to the
                                        actions to see the code
                                    </p>
                                ) : null
                            }
                            <Button
                                variant="success"
                                onClick={() =>
                                    actions.changeColor(index, "orange")
                                }
                            >
                                Change Color
                            </Button>
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
            <br />
            <Link href="/">
                <Button variant="primary">Back home</Button>
            </Link>
        </Container>
    );
};

export default Demo;
