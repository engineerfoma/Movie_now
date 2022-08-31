<template>
  <div class="main">
    <div class="main__container">
        <h2 class="main__title">Фильмы</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@mixin font($family, $weight, $size, $height) {
    font-family: $family;
    font-size: $size;
    font-weight: $weight;
    line-height: $height;
};

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 40px;

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
</style>