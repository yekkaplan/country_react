

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import 'bootstrap/dist/css/bootstrap.min.css';




function CountryCard(props) {

    return (
        <Card border="danger" bg="dark" text='light' style={{ width: '18rem' }}>
            <Card.Header>

            <br></br>

                <img width="175" height="150" src={props.flag} />

            </Card.Header>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    <b> {props.capital} </b>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}


export default CountryCard;