export type TagsType = {
  id: number;
  request_id: string;
};

type EmbeddedType = {
  contacts: TagsType[];
};

export type ContactType = {
  name?: string;
  first_name?: string;
  last_name?: string;
  responsible_user_id?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: number;
  updated_at?: number;

  _embedded?: EmbeddedType;
  request_id?: string;
};

export type ResponceContactType = {
  _embedded: EmbeddedType;
};
