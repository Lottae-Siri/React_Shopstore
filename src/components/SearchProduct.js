import React from 'react'
import { Grommet, Box, TextInput } from 'grommet'
import ProductList from './components/ProductList'

class SearchProduct extends React.Component {
    state = {
        txtInput: ''
    }
    render() {
        return (
            <Grommet plain full>
                <Box width="medium">
                    <TextInput onChange={(e) => this.setState({ txtInput: e.target.value })} />
                </Box>
                <Box flex>
                    <ProductList search={this.state.txtInput} />
                </Box>
            </Grommet>

        )
    }
}

export default SearchProduct
