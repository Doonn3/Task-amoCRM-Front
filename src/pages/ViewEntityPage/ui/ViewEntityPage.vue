<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import { ref } from 'vue';

import { UseDealContactCompanyStore } from '@/enities/DealContactCompany';

import { SimpleButton } from '../components/SimpleButton';
import { TableView, TableBodyItem } from '../components/TableView';
import { DropDown } from '../components/DropDown';

import { useScrollDown } from '../hooks/useScrollDown';

import { optionsCfg } from './helpers';

const useDCC = UseDealContactCompanyStore();
const scroll = useScrollDown();

const isBtnActive = ref<boolean>(false);
const selectOption = ref<string>('');

const handlerDropDown = (value: string) => {
  isBtnActive.value = true;
  selectOption.value = value;
};

type MapType = { [key: string]: (args?: any) => Promise<void> };
const map: MapType = {
  Deal: useDCC.CreateDeal,
  Contact: useDCC.CreateContact,
  Company: useDCC.CreateCompany,
};

const handlerButton = () => {
  const call = map[selectOption.value];
  if (call) {
    call([{}]).finally(() => {
      scroll.toScroll();
    });
  }
};
</script>

<template>
  <section class="view">
    <div class="view__header">
      <div>
        <DropDown
          @select-option="handlerDropDown"
          :options="optionsCfg"
          title="Не выбрано"
        />

        <SimpleButton
          :text="'Создать'"
          :is-active="isBtnActive"
          :is-load="useDCC.IsLoad"
          @btn:click="handlerButton"
        />
      </div>
    </div>

    <div class="view__content" :ref="scroll.refElement">
      <TableView :col-list="['ID', 'NAME']">
        <TableBodyItem
          v-for="(item, index) in useDCC.Model"
          :key="index"
          :ceils="{ id: item.data.id, name: `${item.text} #${item.data.id}` }"
        />
      </TableView>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
../components/DropDown
