import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { useState, useEffect } from 'react'

export default function ProductDetail() {

  let { id } = useParams()

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService()
    productService.getProductById(id).then(result => setProduct(result.data.data))

  }, []);


  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Card.Header>{product.name}</Card.Header>
            <Card.Description>{product.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Sepete Ekle
              </Button>
              <Button basic color='orange'>
                Favorilere Ekle
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}
