
'use client'



import { useEffect, useState } from 'react'

import { Button, Card, Col, Row } from 'react-bootstrap'
import apiMovies from '@/services/apiMovies'
import Pagina from '@/components/Pagina'


export default function Page({ params }) {

  const [serie, setSerie] = useState({})
  const [atores, setAtores] = useState([])

  useEffect(() => {
    apiMovies.get("tv/" + params.id).then(resultado => {
      setSerie(resultado.data)
    })

    apiMovies.get("tv/" + params.id + "/credits").then(resultado => {
       setAtores(resultado.data.cast)
     })
  }, [])

  console.log(serie)

  return (
    <Pagina titulo={serie.name}>
      {serie.id &&
        <>
          <Row className='my-3'>
            <Col md={3}>
              <img height={430} src={'https://image.tmdb.org/t/p/w500' + serie.poster_path} />
            </Col>
            <Col className='pt-5' md={9}>
              <p><b>Título Original: </b> {serie.original_name}</p>
              <p><b>Popularidade:</b> {serie.popularity}</p>
              <p><b>Data de Lançamento:</b> {serie.first_air_date}</p>
              <p><b>Gêneros:</b> {serie.genres?.map((item, index) => (
                <span key={index}>{item.name}{index < serie.genres.length - 1 ? ', ' : ''}</span>
              ))}</p>
              {serie.overview && <p><b>Sinopse:</b> {serie.overview}</p>}
              <Button variant='primary' href='/series'>Voltar</Button>
            </Col>
          </Row>

          <h1 className='d-flex flex-column justify-content-center align-items-center my-4'>Temporadas</h1>
          <Row>
            {serie.seasons.map(item => (
              <Col key={item.id} className='my-3' md={2}>
                {item.poster_path == null ? <p>Imagem indisponivel</p> : <img height={290} src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />}
                <p><b>{item.name}</b></p>
              </Col>
            ))}
          </Row>

          <h1 className='d-flex flex-column justify-content-center align-items-center my-4'>Atores</h1>
          <Row>
            {atores.map(item => (
              <Col key={item.id} className='my-3' md={2}>
                <a href={'../ator/' + item.id}><img height={290} src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} /></a>
              </Col>
            ))}
          </Row>
        </>
      }

    </Pagina>
  )
}
