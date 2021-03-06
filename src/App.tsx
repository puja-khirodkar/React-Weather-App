import React from 'react';
import './App.css';
import MainComponent from "./components/MainComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TemperatureComponent from "./components/TemperatureComponent";
import PressureComponent from "./components/PressureComponent";
import HumidityComponent from "./components/HumidityComponent";
import {IconUtils} from "./utilities/IconUtils";
import Container from "react-bootstrap/Container";

type Props = {}
type State = {
    loading: boolean,
    data?: {
        city: string,
        iconName: string,
        title: string,
        description: string,
        temperature: number,
        pressure: number,
        humidity: number,
        minTemp: number,
        maxTemp: number
    }

}
type Position = {
    lat: number
    lon: number
}

class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    loadWeatherData(position: Position) {
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + position.lat
            + "&lon=" + position.lon
            + "&appid=7ea90f3cafa8cefea2d866032a9d944b&units=metric";
        console.log("URL=>" + apiUrl);

        fetch(apiUrl)
            .then(response => {
                console.log(response);
                return response.json()
            })
            .then(data => {
                    console.log(data);
                    const resultObj = {
                        city: data['name'],
                        iconName: IconUtils.getIconNameById(data['weather'][0]['id']),
                        title: data['weather'][0]['main'],
                        description: data['weather'][0]['description'],
                        temperature: data['main']['temp'],
                        pressure: data['main']['pressure'],
                        humidity: data['main']['humidity'],
                        minTemp: data['main']['temp_min'],
                        maxTemp: data['main']['temp_max'],
                    };
                    console.log("City=>" + data['name']);
                    this.setState({
                        loading: false,
                        data: resultObj
                    });
                }
            ).catch(error => {
                console.error(error);
            }
        )
    }

    getPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let coords = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            };
            this.loadWeatherData(coords);
        });
    };

    componentDidMount(): void {
        this.getPosition();
    }

    render() {
        if (this.state.loading) {
            return (<div className="App"><h1>Loading...</h1></div>)
        } else {
            const data = this.state.data!!;
            return (
                <div className="App">
                    <span className="city">{data.city}</span>
                    <Row className="main-component">
                        <MainComponent id={1} title={data.title} iconName={data.iconName}
                                       temperature={data.temperature}
                                       desc={data.description}/>
                    </Row>
                    <Container>
                        <Row noGutters={true}>
                            <Col xs={12} md={6} className="sub-component">
                                <TemperatureComponent minTemp={data.minTemp}
                                                      maxTemp={data.maxTemp}/>
                            </Col>
                            <Col xs={6} md={3} className="sub-component">
                                <PressureComponent pressure={data.pressure}/>
                            </Col>
                            <Col xs={6} md={3} className="sub-component">
                                <HumidityComponent humidity={data.humidity}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }


    }
}

export default App;
