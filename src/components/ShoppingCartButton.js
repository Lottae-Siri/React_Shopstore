import React, { Component } from 'react'
import { DropButton, Box, Stack } from 'grommet';
import { FaShoppingBag } from 'react-icons/fa'
export default class ShoppingCartButton extends Component {
  render() {
    return (
      <DropButton
        dropAlign={{
          top: 'bottom',
          right: 'right'
        }}
        dropContent={
          <Box>Cart product list</Box>
        }
      >
        <Stack
          anchor="top-right"
        >
          <Box pad='xsmall'>
            <FaShoppingBag size={32}/>
          </Box>
          <Box
            background="accent-4"
            pad={{horizontal: 'xsmall'}}
            round
          >
            {0}
          </Box>
        </Stack>
      </DropButton>
    )
  }
}
