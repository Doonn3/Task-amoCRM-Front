export type TagsType = {
  id: number;
  request_id: string;
};

type EmbeddedType = {
  leads: TagsType[];
};

export type ResponceLeadType = {
  _embedded: EmbeddedType;
};

export type DealLeadType = {
  name?: string;
  price?: number;
  status_id?: number;
  pipeline_id?: number;
  created_by?: number;
  updated_by?: number;
  closed_at?: number;
  created_at?: number;
  updated_at?: number;
  loss_reason_id?: number;
  responsible_user_id?: number;
  _embedded?: EmbeddedType;
};
