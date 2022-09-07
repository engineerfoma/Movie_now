<template>
  <div class="container">
    <router-link to="/">
      <div class="container__arrow"></div>
      <p class="container__text">Назад к списку</p>
    </router-link>
  </div>
  <div v-if="movie.id">
    <movie-temp :movie="movie" />
  </div>
  <h3 v-else class="error">
    К сожалению, по вашему запросу ничего не найдено...
  </h3>
</template>

<script>
import axios from "axios";
import MovieTemp from "@/components/MovieTemp.vue";

export default {
  components: { MovieTemp },
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

<style lang="scss">
@mixin font($family, $weight, $size, $height) {
  font-family: $family;
  font-size: $size;
  font-weight: $weight;
  line-height: $height;
}

.container {
  position: relative;
  max-width: 1400px;
  margin: 42px auto 28px;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 22px;

  &__arrow {
    position: absolute;
    width: 12px;
    height: 20px;
    background-image: url("@/images/vector.svg");
    background-size: 12px 20px;
    background-position: 50% 50%;
  }

  &__text {
    padding-left: 32px;
    @include font(Roboto, 400, 20px, 1);
    color: rgba(255, 82, 82, 0.98);
    text-decoration-line: underline;
  }
}

.error {
  @include font(Roboto, 500, 32px, 1);
  color: #fff;
  max-width: 1400px;
  margin: 0 auto;
}
</style>