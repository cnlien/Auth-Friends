import React from 'react';

// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/MainHeader.scss';

// COMPONENTS
import HeaderSearch from './HeaderSearch'
import {
    Col,
    Row,
    Container
} from 'reactstrap'

const MainHeader = () => {
    return(
        <div className="mainHeader">
            <Container>
                <Row>
                    <Col>
                        <p className="mainHeader-left">Myspace.com | Home</p>
                    </Col>

                    <HeaderSearch />

                    <Col>
                        <p className="mainHeader-right">Help | SignOut</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainHeader