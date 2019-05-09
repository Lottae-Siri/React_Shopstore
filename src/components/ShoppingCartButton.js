import React, { Component } from 'react'
import { DropButton, Box, Stack } from 'grommet';
import { Shop } from 'grommet-icons'
import { connect } from 'react-redux';
import CartItemList from './CartItemList';

class ShoppingCartButton extends Component {
  render() {
    const { cartLength } = this.props;
    return (
      <DropButton
        dropAlign={{
          top: 'bottom',
          right: 'right'
        }}
        dropContent={
          <Box>
            <CartItemList/>
          </Box>
        }
      >
        <Stack
          anchor="top-right"
        >
          <Box pad='xsmall'>
            <Shop size="32px" />
          </Box>
          <Box
            background="accent-4"
            pad={{ horizontal: 'xsmall' }}
            round
          >
            {cartLength}
          </Box>
        </Stack>
      </DropButton>
    )
  }
}

const mapStateToProps = state => {
  return {
    cartLength: state.cart.cartItems.length
  }
}

export default connect(mapStateToProps)(ShoppingCartButton)