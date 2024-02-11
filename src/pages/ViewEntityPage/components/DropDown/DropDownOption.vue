<script lang="ts" setup>
import DropDownIcon from '@/shared/assets/DropDownIcon.vue';
type PropsType = {
  value: string;
  text: string;
};

const props = defineProps<PropsType>();
</script>

<template>
  <div class="option" :option-value="props.value">
    <DropDownIcon class="option__icon" />
    <li>{{ props.text }}</li>
  </div>
</template>

<style lang="scss" scoped>
.option {
  display: flex;
  align-items: center;

  padding: 10px;

  gap: 10px;

  &:hover {
    background-color: rgb(209, 209, 209);
  }

  &__icon {
    width: 25px;
    height: 25px;
  }
}
</style>
