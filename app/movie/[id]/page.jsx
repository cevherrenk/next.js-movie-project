import React from 'react';
import MovieContainer from '@/containers/movie/index';
import Movies from '@/mocks/movies.json';
import {notFound} from 'next/navigation';
import Error from './error';

async function delay(ms){
  return new Promise((resolve) => setTimeout(resolve,ms));
}
const MoviePage = async ({params,searchParams}) => {
  await delay(2000);
  const movieDetail = Movies.results.find((el,idx) => el.id.toString() === params.id);

  if(searchParams.error === "true"){
    Error();
  }

  if(!movieDetail){
    notFound();
  }

  return (
    <MovieContainer movie={movieDetail}/>
  )
}

export default MoviePage
