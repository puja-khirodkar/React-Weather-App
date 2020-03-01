import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


class HumidityComponent extends React.Component<{humidity:number}, Object> {
    render(){
        return(
            <Container>
                <Row >
                    <div className="mx-auto"> <h2 className="sub-title">{"Humidity"}</h2> </div>
                </Row>
                <Row>
                    <div  className="mx-auto number"> <h4>{this.props.humidity}&#37;</h4></div>
                </Row>
            </Container>
        )
    }
}

export default HumidityComponent;