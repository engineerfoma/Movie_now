<template>
    <movie-temp :movie="movie"/>
</template>

<script>
import axios from "axios";
import MovieTemp from "@/components/MovieTemp.vue";

export default {
    components: {MovieTemp},
  data: () => ({
    movie: [],
  }),

  methods: {
    async fetchMovie() {
      try {
        const response = await axios.get(
          `https://floating-sierra-20135.herokuapp.com/api/movie/${this.$route.params.id}`
        );
        this.movie = response.data.data;
        console.dir(this.movie);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchMovie();
  },
};
</script>

<style>

</style>