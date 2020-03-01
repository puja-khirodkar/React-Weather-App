import React from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

type TempProps = {
    minTemp: Number,
    maxTemp: Number
}

type TempState = {}

class TemperatureComponent extends React.Component<TempProps, TempState> {
    render() {
        return (
            <Container  className="center">
                <Row ><Col><h2 className="sub-title">Temperature</h2></Col></Row>
                <Row>
                    <Col xs={6}>
                        <h4>Min</h4>
                    </Col>
                    <Col  xs={6} >
                        <h4>Max</h4>
                    </Col>

                </Row>
                <Row>
                    <Col  xs={6}>
                        <h4 className="number">{this.props.minTemp}&deg;C</h4>
                    </Col>
                    <Col  xs={6}>
                        <h4 className="number">{this.props.maxTemp}&deg;C</h4>
                    </Col>
                </Row>
            </Container>

        );
    }

}

export default TemperatureComponent;