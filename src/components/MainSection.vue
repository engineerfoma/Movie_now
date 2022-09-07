<template>
  <h2 class="title">Фильмы</h2>
  <check-box
    :HandleSortYear="HandleSortYear"
    :HandleSortName="HandleSortName"
  />
  <div v-if="movies.length > 0">
    
      <movie-temp
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      />
  
  </div>
  <div v-else class="loading"></div>
</template>

<script>
import axios from "axios";
import MovieTemp from "@/components/MovieTemp.vue";
import CheckBox from "@/components/UI/CheckBox.vue";

export default {
  components: {
    MovieTemp,
    CheckBox,
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
  watch: {
    HandleSortYear(newValue) {
      this.movies.sort((movie1, movie2) => {
        return movie1[newValue]?.localeCompare(movie2[newValue]);
      });
    },
    HandleSortName(newValue) {
      this.movies.sort((movie1, movie2) => {
        return movie1[newValue]?.localeCompare(movie2[newValue]);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin font($family, $weight, $size, $height) {
  font-family: $family;
  font-size: $size;
  font-weight: $weight;
  line-height: $height;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.title {
  display: flex;
  max-width: 1400px;
  @include font(Roboto, 500, 32px, 1);
  color: #fff;
  text-align: left;
  padding-top: 40px;
  margin: 0 auto 18px;
}

.loading {
  position: absolute;
  width: 136px;
  height: 136px;
  top: 50%;
  right: 50%;
  background-image: url("@/images/loader.svg");
  background-size: 136px 136px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  animation: 2.5s linear 0s normal none infinite running loading;
}
</style>