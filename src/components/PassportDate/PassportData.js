import React, {Component} from 'react';
import {Card, Col} from 'react-bootstrap';

export default class PassportData extends Component {
    constructor(props){
        super(props)

        this.state = {
            offsetHeightTitle: 10,
            offsetHeightUl: 10,
        };

        this.myRefTitle = React.createRef();
        this.myRefUl = React.createRef();
    }

    componentDidMount() {
        this.props.changeHeightTitle(this.myRefTitle.current, this.myRefUl.current)
    }

    static getDerivedStateFromProps(props, state) {
        const obj = {}
        if (props.offsetHeightTitle !== state.offsetHeightTitle) {
            obj.offsetHeightTitle = props.offsetHeightTitle
        }

        if (props.offsetHeightUl !== state.offsetHeightUl) {
            obj.offsetHeightUl = props.offsetHeightUl
        }

        if (Object.keys(obj).length !== 0) {
            return obj;
        }

        return null;
    }

    render() {
        const { id, header = '', options = [], text = ''} = this.props;

        const arrOption = options.map( (item, index) =>{ return (<li key={index}>{item}</li>)});

        return(
            <Col sm={12} md={6} lg={4} style={{ marginTop: '5px'}} >
                <Card style={{ height: '100%' }} key={id}>
                    <Card.Body>
                        <Card.Title
                            ref={this.myRefTitle}
                            style={{ height: this.state.offsetHeightTitle !== 0 ? this.state.offsetHeightTitle : null }}
                        >
                            { header }
                        </Card.Title>
                        <Card.Text>
                            <ul
                                ref={this.myRefUl}
                                style={{ height: this.state.offsetHeightUl !== 0 ? this.state.offsetHeightUl : null }}
                            >
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
