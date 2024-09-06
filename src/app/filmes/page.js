'use client'
import Pagina from '@/components/Pagina'
import apiMovies from '@/services/apiMovies'

import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

export default function Page() {
   
    const [filmes, setFilmes] = useState ([])

    useEffect(()=>{
        apiMovies.get('movie/popular').then(resultado=>{
            setFilmes(resultado.data.results)
        })
    }, [])

  return (

    <Pagina titulo="Filmes Populares">
      <Row md={3}>
        {filmes.map(item => (
          <Col className='col-4 my-2'>
            <Card key={item.id}>
              <Card.Img height={250} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <a href={item.sourceUrl} target='blank'><Button variant="primary">Detalhes</Button></a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  )
}