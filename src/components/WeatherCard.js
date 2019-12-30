import React from 'react'
import { Card, Icon, Image, Segment, Statistic } from 'semantic-ui-react'


const weather = {
    type: 'Sunny',
    date: '12/30/2019',
    iconUrl: 'http://openweathermap.org/img/wn/01d@2x.png',
    maxTemp: 60,
    minTemp: 39
}
const WeatherCard = () => (
<Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src= {weather.iconUrl}
        />
        <Card.Header>{weather.type}</Card.Header>
        <Card.Meta>{weather.date}</Card.Meta>
        <Card.Description>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          <Segment inverted>
            <Statistic.Group inverted size="tiny" widths='two'>
                <Statistic>
                    <Statistic.Value>{weather.maxTemp}</Statistic.Value>
                    <Statistic.Label>Max</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>{weather.minTemp}</Statistic.Value>
                    <Statistic.Label>Min</Statistic.Label>
                </Statistic>
            </Statistic.Group>
          </Segment>
      </Card.Content>
    </Card>
)

export default WeatherCard