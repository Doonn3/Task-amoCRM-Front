<script lang="ts" setup>
type t = { [key: number | string]: number | string };
type PropsType = {
  ceils: t;
};

const props = defineProps<PropsType>();
</script>

<template>
  <tr class="test">
    <td v-for="(ceil, index) in props.ceils" :key="index">
      {{ ceil }}
    </td>
  </tr>
</template>

<style lang="scss" scoped>
.test {
  padding: 10px;

  & > td {
    padding: 10px;

    font-size: 20px;

    background-color: #dddddd;
  }
}
</style>
