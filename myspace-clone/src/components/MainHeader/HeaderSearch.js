import React from 'react';

import '../../styles/MainHeader.scss';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap'


const HeaderSearch = () => {
    return(
        <div className="searchBar">
            <Form inline>
                <FormGroup check className="searchWeb">
                    <Label check>
                        <Input type="radio" name="web" />{' '}
                        The Web
                    </Label>
                </FormGroup>

                <FormGroup check className="searchMyspace">
                    <Label check>
                        <Input type="radio" name="myspace" />{' '}
                        The Web
                    </Label>
                </FormGroup>

                <FormGroup className="searchInputContainer">
                    <input className="searchInput"/>
                </FormGroup>

                <FormGroup className="searchButtonContainer">
                    <button className="searchButton">Search</button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default HeaderSearch