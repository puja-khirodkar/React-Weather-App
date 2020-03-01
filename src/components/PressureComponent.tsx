import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class PressureComponent extends React.Component<{pressure:number}, Object> {
    render(){
        return(
            <Container>
                <Row >
                    <div className="mx-auto"> <h2 className="sub-title">{"Pressure"}</h2> </div>
                </Row>
                <Row>
                    <div  className="mx-auto number" > <h4>{this.props.pressure} hPa</h4></div>
                </Row>
            </Container>
        )
    }
}

export default PressureComponent;