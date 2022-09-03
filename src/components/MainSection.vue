<template>
  <div class="main">
    <div class="main__container">
      <h2 class="main__title">Фильмы</h2>
      <ul class="main__list list">
        <li class="list__item" v-for="movie in movies" :key="movie.id">
          <div class="list__item_container">
            <img
              :src="'http://www.kinopoisk.ru/images/film_big/' + movie.id_kinopoisk + '.jpg'"
              class="list__item_poster"
              alt="Постер"
            />
          </div>
          <div class="description">
            <h3 class="list__item_title">{{ movie.title }}</h3>
            <p class="list__item_text">{{ movie.year }}, {{ movie.genres[0] }}</p>
            <p class="list__item_text">РЕЖИССЁР: {{ 123 }} </p>
            <p class="list__item_text">АКТЁРЫ: <span class="list__item_actors">{{ 1232 }}</span></p>
            <p class="list__item_description"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    movies: [],
    actors: [],
    directors: directors()
  }),
  async created() {
    try {
      const response = await axios.get(
        `https://floating-sierra-20135.herokuapp.com/api/movies`
      );
      // const movieArr = response.data;
      this.movies = response.data.data;
      this.actors = this.movies.actors;
      
      // this.directors = movieArr.map(movie => {
      //   return movie.directors[this.directors.length-1];
      //   });

      // console.log(this.movies[0].directors[0].toUpperCase());
      // console.log(response);
    } catch (e) {
      console.log(e);
    }
  },
  directors() {
    const directors = this.movies.map(movie => {
      console.log(movie.directors);
      return movie.directors.slice(-1)});
      console.log(directors);
  }
};
</script>

<style lang="scss" scoped>
@mixin font($family, $weight, $size, $height) {
  font-family: $family;
  font-size: $size;
  font-weight: $weight;
  line-height: $height;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 40px;

  &__list {
    list-style: none;
  }

  &__container {
    margin: 0 auto;
    width: 73vw;
  }

  &__title {
    @include font(Roboto, 500, 32px, 1);
    color: #fff;
    text-align: left;
  }
}

.description {
    padding: 24px 32px;
  }

.list__item {
  display: flex;
  min-height: 168px;
  max-width: 1400px; 
  background-color: #4D4747;
  margin: 20px auto;

  &_container {
   width: 168px;
    
    background-color: #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &_title {
    @include font(Roboto, 700, 36px, 1);
    color: #fff;
    padding-bottom: 12px;
  }

  &_poster {
    width: 112px;
    height: 168px; 
    background-size: cover;
    cursor: pointer;
  }

  &_text {
    @include font(Roboto, 700, 12px, 1);
    color: #988F8F;
    margin-bottom: 8px;
  }

  &_actors {
    margin-left: 8px;
    @include font(Roboto, 400, 12px, 1.33);
    color: #e5e5e5;
  }
  &_description {
    @include font(Roboto, 400, 16px, 1.25);
    color: #fff;
    margin-top: 6px;
    padding: 0;
  }
}
</style>