import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import BookContents from './components/BookContents/index';
import BookMeta from './components/BookMeta/index'

export default class PhoneBook extends Component {
    render() {
        return (
            <section>
                <Container fluid={true}>
                    <Row className="d-sm-flex flex-row-reverse">
                        <Col md="4" sm="12" className="mb-2">
                            <BookMeta/>
                        </Col>
                        <Col>
                            <BookContents></BookContents>
                        </Col>
                    </Row>

                </Container>
            </section>
        )
    }
}