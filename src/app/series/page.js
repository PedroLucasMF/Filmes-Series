'use client'

import { useEffect, useState } from 'react'

import { Button, Card, Col, Row } from 'react-bootstrap'
import apiMovies from '@/services/apiMovies'
import Pagina from '@/components/Pagina'

export default function Page() {

  const [series, setSeries] = useState([])

  useEffect(() => {
    apiMovies.get("tv/popular").then(resultado => {
      setSeries(resultado.data.results)
    })
  }, [])


  return (
    <Pagina titulo="Series Populares">
      <Row>
        {series.map(item => (
          <Col key={item.id} md={4} className='mt-3'>
            <Card style={{ width: '18rem' }}>
              <Card.Img height={150} variant="top" src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.original_title}</Card.Text>
                <Card.Text>Popularidade: {item.popularity}</Card.Text>
                <a href={`series/${item.id}`}><Button variant="danger">Ver Detalhes</Button></a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  )
}
