import React from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


type Props = {
    id: Number,
    iconName: string,
    title: String,
    temperature: Number,
    desc: String,

}

type State = {}

class MainComponent extends React.Component<Props, State> {

    render() {
        console.log(JSON.stringify( this.props, null, 3));
        return (
            <Container>
                <Row>
                    <i className={"mx-auto main-icon wi wi-" + this.props.iconName}/>
                </Row>
                <Row>
                    <h3 className="main-temp number mx-auto">{this.props.temperature}&deg;C</h3>
                </Row>
                <Row>
                    <h1 className="main-title mx-auto">{this.props.title}</h1>
                </Row>
                <Row>
                    <h4 className="main-subtitle mx-auto">{this.props.desc}</h4>
                </Row>
            </Container>
        );
    }
}

export default MainComponent;