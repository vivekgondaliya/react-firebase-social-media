import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import WeatherCard from './WeatherCard'

const WeatherList = () => (
  <Grid relaxed columns={3}>
    <Grid.Column>
      <WeatherCard />
    </Grid.Column>
    <Grid.Column>
      <WeatherCard />
    </Grid.Column>
    <Grid.Column>
      <WeatherCard />
    </Grid.Column>
    <Grid.Column>
      <WeatherCard />
    </Grid.Column>
    <Grid.Column>
      <WeatherCard />
    </Grid.Column>
    <Grid.Column>
      <WeatherCard />
    </Grid.Column>
    <Grid.Column>
      <WeatherCard />
    </Grid.Column>
  </Grid>
)

export default WeatherList