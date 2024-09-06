<!-- 'use client'
import Pagina from '@/components/Pagina'
import apiMovies from '@/services/apiMovies'

import React, { useEffect, useState } from 'react'

export default function Page() {
   
    const [filmes, setFilmes] = useState ([])

    useEffect(()=>{
        apiMovies.get('movie/popular').then(resultado=>{
            setFilmes(resultado.data.results)
        })
    }, [])

  return (

    <Pagina titulo="Movies">
        {filmes.map(item => (
            <p>{item.title}</p>
        ))}
      
    </Pagina>
  )
} -->