<template>
  <div class="header">
    <h1 class="header__title">#MOVIENOW</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@mixin font($family, $weight, $size, $height) {
    font-family: $family;
    font-size: $size;
    font-weight: $weight;
    line-height: $height;
};

.header {
    margin: 0;
    width: 100%;
    height: 100px;
    background-color: #fa2828;

    &__title {
        padding-top: 36px;
        @include font(Roboto, 700, 48px, 1);
        letter-spacing: .21em;
        text-align: center;
    }
}
</style>