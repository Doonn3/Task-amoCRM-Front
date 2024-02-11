<script lang="ts" setup>
import { computed } from 'vue';
import SpinPreload from '@/shared/assets/SpinPreload.vue';

type PropsType = {
  text: string;
  isActive: boolean;
  isLoad: boolean;
};

const props = defineProps<PropsType>();

const emit = defineEmits<(e: 'btn:click') => void>();

const compStyle = computed(() => {
  if (props.isLoad) {
    return 'deactivate';
  }
  return props.isActive ? 'active' : 'deactivate';
});
</script>

<template>
  <button
    :class="['btn', compStyle]"
    @click="emit('btn:click')"
    :disabled="!props.isActive || props.isLoad"
  >
    <template v-if="props.isLoad">
      <SpinPreload class="spin" />
    </template>

    <template v-else> {{ props.text }} </template>
  </button>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
