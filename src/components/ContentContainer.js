import React from 'react'
import {Container, Header, Segment, List, Divider, Grid, Image} from 'semantic-ui-react'

import WeatherList from './WeatherList'

const ContentContainer = () => {
    return (
        <div>
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>Bethesda, MD</Header>
                <WeatherList />
            </Container>
        </div>
    )
}

export default ContentContainer;