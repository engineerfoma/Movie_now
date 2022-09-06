<template>
  <div class="sort">
    <div className="sort__container sort__container_name">
      <label htmlFor="checkbox-name" class="label sort__label-name">
        <input
          type="checkbox"
          class="label_input sort__label_input-name"
          id="checkbox-name"
        />
        <span
          class="sort__checkbox sort__checkbox-name"
          @click="HandleSortName"
        ></span>
      </label>
      <p class="sort__checkbox_text">Отсортировать по названию</p>
    </div>
    <div className="sort__container sort__container_year">
      <label htmlFor="checkbox-year" class="label sort__label-year">
        <input
          type="checkbox"
          class="label_input sort__label_input-year"
          id="checkbox-year"
        />
        <span
          class="sort__checkbox sort__checkbox-year"
          @click="HandleSortYear"
        ></span>
      </label>
      <p class="sort__checkbox_text sort__checkbox_text-year">
        Отсортировать по году
      </p>
    </div>
  </div>
</template>

<script>
export default {
}
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
  max-width: 73vw;
  max-height: 84px;
  margin: 0 auto 28px;
  border-bottom: 1px solid #c4c4c4;

  &__container {
    margin-bottom: 18px;
  }

  &__label_input-year {
    margin-left: 45px;
  }

  &__checkbox {
    position: absolute;
    top: 1px;
    left: 0;
    width: 15px;
    height: 15px;
    border: 1px solid #c4c4c4;
    transition: easy .3s;

  &-year {
    margin-left: 45px;
  }

    &_text {
      margin-left: 24px;
      @include font(Roboto, 400, 16px, 1);
      color: #c4c4c4;

      &-year {
        margin-left: 70px;
      }
    }
  }
}

.label {
  position: relative;
  width: 15px;
  height: 15px;
  cursor: pointer;

  &_input {
    display: none;
    position: absolute;
    width: 17px;
    height: 17px;
    top: 1px;
    margin-right: 10px;

    &:checked ~ .sort__checkbox {
      background-image: url("@/images/check_box_active.svg");
      background-size: 17px 17px;
      background-position: 50% 50%;
      border: none;
    }
  }
}
</style>