<template>
  <div class="main">
    <div class="main__container">
      <ul class="main__list list">
        <li class="list__item">
          <div class="list__item_container">
            <img
              :src="
                'http://www.kinopoisk.ru/images/film_big/' +
                movie.id_kinopoisk +
                '.jpg'
              "
              class="list__item_poster"
              alt="Постер"
            />
          </div>
          <div class="description">
            <h3
              class="list__item_title"
              @click="$router.push(`/movie/${movie.id}`)"
            >
              {{ movie.title }}
            </h3>
            <p class="list__item_text">{{ movie.year }}, {{ movie.genres }}</p>
            <p class="list__item_text">РЕЖИССЁР: {{ movie.directors }}</p>
            <p class="list__item_text">
              АКТЁРЫ: <span class="list__item_actors">{{ movie.actors }}</span>
            </p>
            <p class="list__item_description"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'movie'],
};
</script>

<style>
</style>