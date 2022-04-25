import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CardGroup } from "react-bootstrap";

function Cards(){
    return(
        <>  
            <CardGroup className="g-4" style={{ margin: '5rem' }}>
                <Card border="secondary" style={{ margin: '20px' }}>
                <Card.Header>Capacidad Diario</Card.Header>
                <Card.Body>
                    <Card.Title>Reporte de capacidad diario</Card.Title>
                    <Card.Text>
                    Este reporte sumistra informacion detallada de los enlaces con capacidades y utilizacion, ademas de datos como su configuración en los ultimos 30 días.
                    </Card.Text>
                    <Button variant="danger" href="/daily">Ir a los informes</Button>
                </Card.Body>
                </Card>

                <br />

                <Card border="secondary" style={{ margin: '20px' }}>
                <Card.Header>Capacidad Semanal</Card.Header>
                <Card.Body>
                    <Card.Title>Reporte de capacidad semanal</Card.Title>
                    <Card.Text>
                    Este reporte sumistra informacion detallada de los enlaces con capacidades y utilizacion, ademas de datos como su configuración de las ultimas 4 semanas.
                    </Card.Text>
                    <Button variant="danger" href="/week">Ir a los informes</Button>
                </Card.Body>
                </Card>

                <br />

                <Card border="secondary" style={{ margin: '20px' }}>
                <Card.Header>Capacidad Mensual</Card.Header>
                <Card.Body>
                    <Card.Title>Reporte de capacidad mensuales</Card.Title>
                    <Card.Text>
                    Este reporte sumistra informacion detallada de los enlaces con capacidades y utilizacion, ademas de datos como su configuración del ultimo mes.
                    </Card.Text>
                    <Button variant="danger" href="/month">Ir a los informes</Button>
                </Card.Body>
                </Card>
            </CardGroup>
        </>
    )
}

export default Cards;