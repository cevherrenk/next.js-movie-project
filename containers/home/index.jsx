
import React from 'react';
import Movies from '@/mocks/movies.json';
import FeaturedMovie from '@/components/featured-movie';
import MovieCategories from '@/mocks/genres.json';
import Categories from '@/components/categories';
import MoviesSection from '@/components/movies-section';
import Genres from '@/mocks/genres.json';


const HomeContainer = ({selectedCategory}) => {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]}/>
      <Categories categories={MovieCategories.genres.slice(0,5)}/>
      {
        selectedCategory.movies.length > 0 &&
        ( <MoviesSection title={Genres.genres.find((genre) => `${genre.id}` === selectedCategory?.id)?.name} movies={selectedCategory.movies}/>)
      }
      <MoviesSection title={'populer films'.toUpperCase()} movies={Movies.results.slice(1,7)}/>
      <MoviesSection title={'your favorites'.toUpperCase()} movies={Movies.results.slice(7,15)}/>
    </div>
  )
}

export default HomeContainer
