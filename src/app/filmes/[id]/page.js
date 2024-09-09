
'use client'


import { useEffect, useState } from 'react'

import { Button, Card, Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import apiMovies from '@/services/apiMovies'
import Pagina from '@/components/Pagina'

export default function Page({ params }) {

  const [filme, setFilme] = useState({})
  const [atores, setAtores] = useState([])

  useEffect(() => {
    apiMovies.get("movie/" + params.id).then(resultado => {
      setFilme(resultado.data)
    })

    apiMovies.get("movie/" + params.id + "/credits").then(resultado => {
      setAtores(resultado.data.cast)
    })
  }, [])

  return (
    <Pagina titulo={filme.title}>
      {filme.id && <>
        <Row className='my-3'>
          <Col md={3}>
            <img height={430} src={'https://image.tmdb.org/t/p/w500' + filme.poster_path} />
          </Col>
          <Col className='pt-5' md={9}>
            <p><b>Titulo Original:</b> {filme.original_title}</p>
            <p><b>Popularidade:</b> {filme.popularity}</p>
            <p><b>Data de Lançamento:</b> {filme.release_date}</p>
            <p><b>Orçamento:</b> {filme.budget}</p>
            <p><b>Gêneros:</b> {filme.genres?.map((item, index) => (
              <span key={index}>{item.name}{index < filme.genres.length - 1 ? ', ' : ''}</span>
            ))}</p>
            <p><b>Sinopse:</b> {filme.overview}</p>
            <Button variant='primary' href='/filmes'>Voltar</Button>
          </Col>
        </Row>

        <h1 className='d-flex flex-column justify-content-center align-items-center my-4'>Atores</h1>
        <Row>
          {atores.map(item => (
            <Col key={item.id} className='my-3' md={2}>
              <a href={'../atores/' + item.id}><img height={290} src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} /></a>
            </Col>
          ))}
        </Row>
      </>}
    </Pagina>
  )
}
