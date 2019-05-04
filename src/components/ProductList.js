import React from 'react'
import { Box } from 'grommet'
import ProductItem from './ProductItem'
import request from '../utils/request'
import Logo from '../image/iphone-xs-max-space-select-2018.png'

class ProductList extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    // this.fetchData()
    this.getProduct('')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('1: ', this.props)
    if(prevProps.search !== this.props.search){
      // this.findProduct()
      this.getProduct('findProduct')
    }
  }

  getProduct = async (param) => {
    const res = await request.get(`/products?filter=like(name,*${this.props.search}*)`)
    const data = res.data.data.map(item => {
      let image = 'https://via.placeholder.com/300x400.png';
      if (param === 'findProduct') {
        if (item.relationships.main_image) {
          const fileId = item.relationships.main_image.data.id
          const file = res.data.included.main_images.find(function(el) {
            return fileId === el.id;
          });
          image = file.link.href
        }
      }
      return {
        name: item.name,
        description: item.description,
        image,
        price: item.meta.display_price.with_tax.formatted,
      }
    })
    this.setState({
      data,
    })
  }

  // findProduct = async () => {
  //   const res = await request.get(`/products?filter=like(name,*${this.props.search}*)`)
  //   const data = res.data.data.map(item => {
  //     let image = 'https://via.placeholder.com/300x400.png';
  //       if (item.relationships.main_image) {
  //         const fileId = item.relationships.main_image.data.id
  //         const file = res.data.included.main_images.find(function(el) {
  //           return fileId === el.id;
  //         });
  //         image = file.link.href
  //       }
  //       return {
  //         name: item.name,
  //         description: item.description,
  //         image,
  //         price: item.meta.display_price.with_tax.formatted,
  //       }
  //   })
  //   this.setState({
  //     data,
  //   })
  // }

  fetchData = async () => {
    const res = await request.get('/products?include=main_image')
    const data = res.data.data.map(item => {
      let image = 'https://via.placeholder.com/300x400.png';
      return {
        name: item.name,
        description: item.description,
        image,
        price: item.meta.display_price.with_tax.formatted,
      }
    })
    this.setState({
      data,
    })
  }

  render() {
    const { data } = this.state
    console.log(data)
    return (
      <Box
        direction="column"
        pad="small"
        fill
      >
        <Box pad="small" background="light-3" >
          Product list
        </Box>
        <Box
          pad="small"
          direction="row"
          fill
          wrap
          overflow="auto"
        >
          {
            data.map((product) => (
              <ProductItem {...product} />
            ))
          }
          <image src={Logo}/>
        </Box>
      </Box>
    )
  }
}

export default ProductList