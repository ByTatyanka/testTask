import React, {Component} from 'react';
import {Card, Col} from 'react-bootstrap';

export default class PassportData extends Component {

    render() {
        const { id, header, options, text } = this.props;

        const arrOption = options.map( (item, index) =>{ return (<li key={index}>{item}</li>)})

        return(
            <Col sm={12} md={6} lg={4}>
                <Card  style={{ marginTop: '10px'}} key={id}>
                    <Card.Body>
                        <Card.Title>{ header }</Card.Title>
                        <Card.Text>
                            <ul>
                                {arrOption}
                            </ul>
                            <span>{text}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}