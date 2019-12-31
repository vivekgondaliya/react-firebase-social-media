import React from 'react'
import {
  Container,
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react'

import { Link } from 'react-router-dom';

const TopNavigation = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='https://cdn3.iconfinder.com/data/icons/bebreezee-weather-symbols/559/icon-weather-sunny-512.png' style={{ marginRight: '1.5em' }} />
          Sunny Days
        </Menu.Item>
        <Menu.Item><Link to="/home">Home</Link></Menu.Item>
        <Menu.Item><Link to="/weather">Weather Types</Link></Menu.Item>
        <Menu.Item><Link to="/about">About Us</Link></Menu.Item>
        <Menu.Menu position='right'>
          <Dropdown item simple text='Dropdown'>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}
  

export default TopNavigation