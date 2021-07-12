import React, { useState } from 'react';


export const Count = () => {

    const [numero, setNumero] = useState(1);
    const [cant, setCant] = useState(0);
    
    // Hook
    const handleIncrement = () => {
        if (numero > 0) {
            setNumero(numero - 1);
            setCant(cant + 1);
        }
        };
        const handleDecrement = () => {
        if (cant > 0) {
            setNumero(numero + 1);
            setCant(cant - 1);
        }
        };

        return (
            <Card className="App">
                <Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                    STOCK: {numero} COMPRA: {cant}
                    </ListGroupItem>
                </ListGroup>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col">
                        <CartWidget />
                    </div>
                    <div className="col">
                        <Button onClick={handleIncrement} variant="outline-success">
                        +
                        </Button>
                    </div>
                    <div className="col">
                        <Button onClick={handleDecrement} variant="outline-primary">
                        -
                        </Button>
                    </div>
                    </div>
                </div>
        
                <Button
                    variant="primary"
                    onClick={() => props.paramOnAdd(cant, props.id)}
                    type="submit"
                >
                    AGREGAR
                </Button>
                <Link className="Link" to="/Cart" disabled={cart.length === 0 ? "true" : "false"}>
                    <Button >
                    TERMINAR COMPRA
                    </Button>
                </Link>
                </Card.Body>
            </Card>
            );
        }
        
        export default Count;