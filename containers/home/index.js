
import React from 'react';
import Movies from '@/mocks/movies.json';
import FeaturedMovie from '@/components/featured-movie';
import MovieCategories from '@/mocks/genres.json';
import Categories from '@/components/categories';


const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]}/>
      <Categories categories={MovieCategories.genres.slice(0,5)}/>
    </div>
  )
}

export default HomeContainer
