import React from 'react';
import { Grommet, Box, TextInput } from 'grommet'
import AppBar from './components/AppBar'
import ProductList from './components/ProductList'
import './App.css';

class App extends React.Component {
  state = {
    txtInput: ''
  }

  render() {
    return (
      <Grommet plain full>
        <Box direction="column" fill>
          <AppBar />
          <Box
            direction="row"
            pad="medium"
            fill
          >
            <Box width="medium">
              <TextInput onChange={(e) => this.setState({ txtInput: e.target.value })} />
            </Box>
            <Box flex>
              <ProductList search={this.state.txtInput} />
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default App;
