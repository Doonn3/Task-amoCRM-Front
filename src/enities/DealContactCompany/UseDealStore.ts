import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { ApiCreateCompanies, ApiCreateContact, ApiCreateDeal } from './api/api';
import { type DealLeadType } from './Types/DealLeadType';
import { type ContactType, type TagsType } from './Types/ContactType';
import { ErrorResponse } from './models/ErrorResponse';
import { type CompanyType } from './Types/CompanyType';

const NAMESPACE = 'DealStore';

type DealCompanyContact = {
  data: TagsType;
  text: string;
};

export const UseDealContactCompanyStore = defineStore(NAMESPACE, () => {
  const model = ref<DealCompanyContact[]>([]);
  const isLoad = ref(false);

  const IsLoad = computed(() => {
    return isLoad.value;
  });

  const Model = computed(() => {
    return model.value;
  });

  const CreateDeal = async (leads?: DealLeadType) => {
    isLoad.value = true;
    const result = await ApiCreateDeal(leads);

    if (result instanceof ErrorResponse) {
      console.error(result.message);
      isLoad.value = false;
      return;
    }

    const newCompanies = result._embedded.leads.map((item) => ({
      data: item,
      text: 'Сделка',
    }));

    model.value = [...model.value, ...newCompanies];

    isLoad.value = false;
  };

  const CreateCompany = async (companies?: CompanyType[]) => {
    isLoad.value = true;

    const result = await ApiCreateCompanies(companies);

    if (result instanceof ErrorResponse) {
      console.error(result.message);
      isLoad.value = false;
      return;
    }

    const newCompanies = result._embedded.companies.map((item) => ({
      data: item,
      text: 'Компания',
    }));

    model.value = [...model.value, ...newCompanies];

    isLoad.value = false;
  };

  const CreateContact = async (contacts?: ContactType[]) => {
    isLoad.value = true;

    const result = await ApiCreateContact(contacts);

    if (result instanceof ErrorResponse) {
      console.error(result.message);
      isLoad.value = false;
      return;
    }

    const newCompanies = result._embedded.contacts.map((item) => ({
      data: item,
      text: 'Контакт',
    }));

    model.value = [...model.value, ...newCompanies];

    isLoad.value = false;
  };

  return {
    IsLoad,
    Model,

    CreateDeal,
    CreateContact,
    CreateCompany,
  };
});
