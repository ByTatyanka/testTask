import React, { Component } from 'react';
import PassportData from '../PassportDate';
import { Container, Row } from 'react-bootstrap';

const date = '[{"id":1,"header":"Заголовок тервый тестовый для длинны","options":["элемент списка 1","элемент списка 2","элемент списка 3","элемент списка 4","элемент списка 5"],"text":"какой-то текст wer we rwer wer 1 текст какой-то 1 какойкой-то текст wer we rwer wer 1 текст какой-то 1 какойкой-то текст wer we rwer wer 1 текст какой-то 1 какойкой-то текст wer we rwer wer 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1"},{"id":2,"header":"Заголовок 1 Заголовок 1 Заголовок 1 Заголовок 1 Заголовок 1 Заголовок 1 Заголовок 1 Заголовок 1","options":["элемент списка 1","элемент списка 2","элемент списка 5"],"text":"какой-то текст 1  werwer we rwe rwer we twet wt et wet 1 какой-то текст 1 текст какой-то 1"},{"id":3,"header":"Заголовок 1","options":["элемент списка 1","элемент списка 2","элемент списка 5"],"text":"какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1"}]'
let HeightTitle_GB = 0;
let HeightUl_GB = 0;

export default class ListCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            arrItem: [],
            offsetHeightTitle: 0,
            offsetHeightUl: 0,
        };
    }

    componentDidMount() {
        this.setState({ arrItem: JSON.parse(date) });
    }

    changeHeightTitle = ( elTitle, elUl) => {

        if ( elTitle.offsetHeight > HeightTitle_GB) {
            HeightTitle_GB = elTitle.offsetHeight
            this.setState( { offsetHeightTitle: elTitle.offsetHeight } )
        }

        if ( elUl.offsetHeight > HeightUl_GB) {
            HeightUl_GB = elUl.offsetHeight;
            this.setState( { offsetHeightUl: elUl.offsetHeight } )
        }

        return null
    };

    render() {
        const { arrItem } = this.state;

        if ( arrItem.length === 0 ) {
            return null
        }

        const ads = arrItem.map(( item ) => {
            return (<PassportData
                key={ item.id }
                offsetHeightTitle={ this.state.offsetHeightTitle }
                offsetHeightUl={ this.state.offsetHeightUl }
                changeHeightTitle={ this.changeHeightTitle }
                { ...item }
            />)
        });

        return (
            <Container lg={12}>
                <Row>
                    {ads}
                </Row>
            </Container>
        )
    }
}
