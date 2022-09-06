<template>
  <div class="sort">
    <h2 class="main__title">Фильмы</h2>
    <div className="sort__checkbox sort__checkbox_name">
      <label htmlFor="checkbox" class="label">
        <input type="checkbox" class="label__input" id="checkbox" />
        <span class="checkbox" @click="HandleSortName"></span>
      </label>
    </div>
    <div className="sort__checkbox sort__checkbox_year">
      <label htmlFor="checkbox" class="label">
        <input type="checkbox" class="label__input" id="checkbox" />
        <span class="checkbox" @click="HandleSortName"></span>
      </label>
    </div>
  </div>
  <movie-temp v-for="movie in movies" :key="movie.id" :movie="movie" />
</template>

<script>
import axios from "axios";
import MovieTemp from "@/components/MovieTemp.vue";

export default {
  components: {
    MovieTemp,
  },
  data: () => ({
    movies: [],
  }),

  methods: {
    async fetchMovies() {
      try {
        const response = await axios.get(
          `https://floating-sierra-20135.herokuapp.com/api/movies`
        );
        this.movies = response.data.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchMovies();
  },
};
</script>
    // <div class="list__item_container">
    //   <img
    //     :src="'http://www.kinopoisk.ru/images/film_big/' + movie.id_kinopoisk + '.jpg'"
    //     class="list__item_poster"
    //     alt="Постер"
    //   />
    // </div>
    // <div class="description">
    //     <h3 class="list__item_title" @click="$router.push(`/movie/${movie.id}`)">{{ movie.title }}</h3>
    //   <p class="list__item_text">{{ movie.year }}, {{ movie.genres }}</p>
    //   <p class="list__item_text">РЕЖИССЁР: {{ movie.directors }}</p>
    //   <p class="list__item_text">
    //     АКТЁРЫ: <span class="list__item_actors">{{ movie.actors }}</span>
    //   </p>
    //   <p class="list__item_description"></p>
    // </div>

<style lang="scss">
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
    max-width: 1400px;
    margin: 40px auto 18px;
  }
}

.description {
  padding: 24px 32px;
  width: 1440px - 168px;
}

.list__item {
  display: flex;
  min-height: 168px;
  max-width: 1400px;
  background-color: #4d4747;
  margin: 12px auto;

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
    cursor: pointer;
  }

  &_poster {
    width: 112px;
    height: 168px;
    background-size: cover;
    cursor: pointer;
  }

  &_text {
    @include font(Roboto, 700, 12px, 1);
    color: #988f8f;
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

  .label {
    position: relative;
    width: 15px;
    height: 15px;
    cursor: pointer;

    &__input {
      display: none;
      position: absolute;
      top: 5px;
      margin-right: 10px;
    }
    // &__input:checked {
    //     border: 1px solid rgb(62, 95, 138);
    // }

    &__input:checked ~ .checkbox {
      background-color: rgb(62, 95, 138);
    }
  }

  .checkbox {
    position: absolute;
    top: 3px;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background-color: white;
    transition: 0.2s;
    box-shadow: 0 1px 3px;
  }
}
</style>