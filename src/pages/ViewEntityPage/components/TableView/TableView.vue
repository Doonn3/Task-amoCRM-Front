<script lang="ts" setup>
type PropsType = {
  colList: string[];
};

const props = defineProps<PropsType>();
</script>

<template>
  <table class="table">
    <thead class="table__head">
      <tr>
        <th v-for="(name, index) in props.colList" :key="'col-' + index">
          {{ name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
