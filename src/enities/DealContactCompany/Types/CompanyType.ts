type TagsType = {
  id: number;
  request_id: string;
};

type EmbeddedType = {
  companies: TagsType[];
};

export type CompanyType = {
  name?: string;
  responsible_user_id?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: number;
  updated_at?: number;
  // custom_fields_values?: any[];
  _embedded?: EmbeddedType;
  request_id?: string;
};

export type ResponceCompanyType = {
  _embedded: EmbeddedType;
};
