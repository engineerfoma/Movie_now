<template>
  <div class="sort">
    <label for="checkbox-name" class="label sort__label-name">
      <input
        type="checkbox"
        class="label_input sort__input-name"
        id="checkbox-name"
      />
      <span class="sort__checkbox sort__checkbox-name" @click="HandleSortName">
      </span>
    </label>
    <p class="text text-name">Отсортировать по названию</p>

    <label for="checkbox-year" class="label sort__label-year">
      <input
        type="checkbox"
        class="label_input sort__input-year"
        id="checkbox-year"
      />
      <span
        class="sort__checkbox sort__checkbox-year"
        @click="HandleSortYear"
      ></span>
    </label>
    <p class="text text-year">Отсортировать по году</p>
  </div>
</template>

<script>
export default {
  // props: [HandleSortYear, HandleSortName]
  data: () => ({
    radioP: "",
  }),
};
</script>

<style lang="scss" >
@mixin font($family, $weight, $size, $height) {
  font-family: $family;
  font-size: $size;
  font-weight: $weight;
  line-height: $height;
}

.sort {
  display: flex;
  position: relative;
  max-width: 1400px;
  margin: 18px auto 28px;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 18px;

  &__label {
    position: relative;
  }

  &__input-year {
    left: 261px;
  }

  &__checkbox {
    position: absolute;
    top: 2px;
    left: 0;
    width: 15px;
    height: 15px;
    border: 1px solid #c4c4c4;

    &-year {
      margin-left: 261px;
    }
  }
}

.label {
  width: 15px;
  height: 15px;
  cursor: pointer;

  &_input {
    display: none;
    position: absolute;
    width: 17px;
    height: 17px;
    top: 0;

    &:checked ~ .sort__checkbox {
      background-image: url("@/images/check_box_active.svg");
      background-size: 17px 17px;
      background-position: 50% 50%;
      border: none;
    }
  }
}

.text {
  transition: easy 0.3s;
  @include font(Roboto, 400, 16px, 1);
  color: #c4c4c4;
  padding-top: 2px;

  &-name {
    margin-left: 10.5px;
    margin-right: 34.5px;
  }
}
</style>