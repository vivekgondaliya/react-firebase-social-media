import React from 'react'
import { Route, Link } from 'react-router-dom'
import {Container, Header} from 'semantic-ui-react'

const Weather = ({ match }) => <Header as='h3' color='green'>Selected weather type --> {match.params.id}</Header>

class WeatherTypes extends React.Component {
  render() {
    // const { url } = this.props.match
    return (
        <Container text style={{ marginTop: '7em' }}>
            <Header as='h1' color='blue'>
                Weather Types
            </Header>
            <strong>Select a weather: </strong>
            <ul>
                <li>
                    <Link to="/weather/1">Type 1 </Link>
                </li>
                <li>
                    <Link to="/weather/2">Type 2 </Link>
                </li>
                <li>
                    <Link to="/weather/3">Type 3 </Link>
                </li>
            </ul>
            <Route path="/weather/:id" component={Weather} />
        </Container>
    )
  }
}
export default WeatherTypes