import React from 'react'
import {Container, Header} from 'semantic-ui-react'

class NotFound extends React.Component {
  render() {
    return  (
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1' color='red'>
          Page - Not Found
        </Header>
      </Container>
    )
  }
}
export default NotFound