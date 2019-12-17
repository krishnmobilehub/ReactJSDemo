import React from 'react'
import '../assets/css/app.css'
import { Container, Form, FormGroup, Label, Row, Col } from 'reactstrap'
import InputField from "../component/InputField"
import Header from "../component/Header"

class ComponentView extends React.Component { 
  render() {
    return (
      <div className="app">
        <Header page="component" screen="Components"/>
        <Container>
          <Row>
            <Col md="8">
              <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <InputField size="lg" id="name" placeholder="Name" />
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ComponentView;
