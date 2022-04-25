import Header from '../shared/Header';
import React, { useState, useEffect } from "react";
import { api } from '../utils/api';
import { Container, Col, Button, Tab, Row, Table } from 'react-bootstrap';

function Month(){

    var url = "http://localhost/downloadMensual.php?file=";

    const [ archivos, setArchivos ] = useState([]);

    useEffect(() => {
        //con esta funcion pedimos todos los datos a la api
        const fetchData = async () => {
            const traerDatos = await api.files.Mensual();
            setArchivos(Object.values(traerDatos));
            //console.log(Object.values(traerDatos));
        };

        fetchData();

        }, []);

    if (!archivos.length) {
        return (
            <>
                <Header />
                <h1 class="title">No se registran Informes!</h1>
            </>
        );
        } 
    else {
        return(
            <>
                <Header/>
                    <Container className="secondary">
                    <Col>
                        <Button variant="secondary" className="border border-5 border-white" href="/">Volver</Button>{ ' ' }
                        <Tab.Container defaultActiveKey="first" className="border border-5 Table" >
                            <Row className="border border-5 border-white">
                                <Col md="auto" style={{padding: '5rem'}, {width: '70rem'}}>
                                    <Table bordered hover size="sm" responsive="xl">
                                        <thead>
                                            <tr>
                                                <th colSpan="2">Informes Diarios</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                        { archivos.map((value) => (
                                            <tr>
                                                <a href={url+value} download>{Object.values(value)}</a>
                                            </tr>
                                        )) }
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                    </Container>
            </>
        )
    }
}

export default Month;