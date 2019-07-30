import React, { Component } from 'react';
import PassportData from './PassportData';
import { Container, Row } from 'react-bootstrap';

const date = '[{"id":1,"header":"Заголовок 1","options":["элемент списка 1","элемент списка 2","элемент списка 5"],"text":"какой-то текст wer we rwer wer 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1"},{"id":2,"header":"Заголовок 1","options":["элемент списка 1","элемент списка 2","элемент списка 5"],"text":"какой-то текст 1  werwer we rwe rwer we twet wt et wet 1 какой-то текст 1 текст какой-то 1"},{"id":3,"header":"Заголовок 1","options":["элемент списка 1","элемент списка 2","элемент списка 5"],"text":"какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1"},{"id":4,"header":"Заголовок 1","options":["элемент списка 1","элемент списка 2","элемент списка 5"],"text":"какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1"}]'

export default class ListCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            arrItem: []
        };

    }

    componentDidMount() {
        this.setState({ arrItem: JSON.parse(date) });
    }

    render() {
        const { arrItem } = this.state;

        if ( arrItem.length === 0 ) {
            return null
        }

        const ads = arrItem.map((item, index) => {
            return (<PassportData key={ item.id } { ...item } />)
        });

        return (
            <Container>
                <Row>
                    {ads}
                </Row>
            </Container>
        )
    }

}