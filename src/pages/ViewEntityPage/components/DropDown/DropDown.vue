<script lang="ts" setup>
import { ref } from 'vue';

import DropDownIcon from '@/shared/assets/DropDownIcon.vue';
import DropDownOption from './DropDownOption.vue';

export type OptionType = {
  value: string;
  text: string;
  isSelected?: boolean;
};

type PropsType = {
  title: string;
  options: OptionType[];
};

const props = defineProps<PropsType>();
const isShow = ref(false);
let selected = props.title;

const emit =
  defineEmits<(e: 'select-option', value: string, text: string) => void>();
const select = (event: MouseEvent) => {
  const target = event.target;

  if (!(target instanceof HTMLDivElement)) return;

  const value = target.getAttribute('option-value');
  const text = target.textContent;
  if (value === null || text === null) return;

  selected = text;

  emit('select-option', value, text);
};
</script>

<template>
  <div class="dropdown" @click="isShow = !isShow">
    <div class="dropdown__selected">
      <span>{{ selected }}</span>
      <DropDownIcon class="dropdown__icon" />
    </div>
    <ul class="dropdown__content" v-show="isShow" @click="select">
      <DropDownOption
        v-for="(item, index) in props.options"
        :key="index"
        :value="item.value"
        :text="item.text"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
