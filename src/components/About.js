import React from 'react'
import {Container, Header} from 'semantic-ui-react'

class About extends React.Component {
  render() {
    return  (
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1' color='yellow'>
          About Us
        </Header>
      </Container>
    )
  }
}
export default About