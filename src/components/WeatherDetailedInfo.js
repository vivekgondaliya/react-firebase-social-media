import React from 'react'
import {Container, Header} from 'semantic-ui-react'

class WeatherDetailedInfo extends React.Component {
  render() {
    const { params } = this.props.match
    return (
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1' color='yellow'>
          Weather Detailed Info - {params.id}
        </Header>
      </Container>
    )
  }
}
export default WeatherDetailedInfo