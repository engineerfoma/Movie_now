<template>
  <h2 class="title">Фильмы</h2>
  <check-box
    :HandleSortYear="HandleSortYear"
    :HandleSortName="HandleSortName"
  />
  <movie-temp
    v-for="movie in movies"
    :key="movie.id"
    :movie="movie"
    class="hover"
  />
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

<style lang="scss">
@mixin font($family, $weight, $size, $height) {
  font-family: $family;
  font-size: $size;
  font-weight: $weight;
  line-height: $height;
}

.title {
  display: flex;
  max-width: 73vw;
  @include font(Roboto, 500, 32px, 1);
  color: #fff;
  text-align: left;
  padding-top: 40px;
  margin: 0 auto 18px;
}

// .hover:hover {
//   transition:
// }
</style>