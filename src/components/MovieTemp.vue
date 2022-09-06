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
}
</style>