
'use client'


import { useEffect, useState } from 'react'

import { Button, Card, Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import apiMovies from '@/services/apiMovies'
import Pagina from '@/components/Pagina'
import Link from 'next/link'

export default function Page({ params }) {

  const [ator, setAtor] = useState({})
  const [filmes, setFilmes] = useState([])
  const [series, setSeries] = useState([])

  useEffect(() => {
    apiMovies.get(`person/${params.id}`).then(resultado => {
      setAtor(resultado.data)
    })

    apiMovies.get("person/" + params.id + "/movie_credits").then(resultado => {
      setFilmes(resultado.data.cast)
    })

    apiMovies.get("person/" + params.id + "/tv_credits").then(resultado => {
      setFilmes(resultado.data.cast)
    })
  }, [])

  return (
    <Pagina titulo={ator.name}>
      {ator.id && <>
        <Row className='my-3'>
          <Col md={3}>
            <img height={430} src={'https://image.tmdb.org/t/p/w500' + ator.profile_path} />
          </Col>
          <Col className='pt-5' md={9}>
            <p><b>Popularidade: </b> {ator.popularity}</p>
            <p><b>Data de Nascimento: </b> {ator.birthday}</p>
            <p><b>Local de Nascimento: </b> {ator.place_of_birth}</p>
            <p><b>Biografia: </b> {ator.biography}</p>
            <Button variant='primary' href='/filmes'>Voltar</Button>
          </Col>
        </Row>

        <h1 className='d-flex flex-column justify-content-center align-items-center my-4'>Trabalhos</h1>
        <Row>
          {filmes.map(item => (
            <Col key={item.id} className='my-3' md={2}>
              <Link href={'../filmes/' + item.id}><img height={290} src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} /></Link>
            </Col>
          ))}
        </Row>
        <Row>
          {series.map(item => (
            <Col key={item.id} className='my-3' md={2}>
              <Link href={'../series/' + item.id}><img height={290} src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} /></Link>
            </Col>
          ))}
        </Row>
      </>}
    </Pagina>
  )
}
