import axios from 'axios';

import {
  type DealLeadType,
  type ResponceLeadType,
} from '../Types/DealLeadType';
import {
  type ContactType,
  type ResponceContactType,
} from '../Types/ContactType';
import { ErrorResponse } from '../models/ErrorResponse';
import {
  type CompanyType,
  type ResponceCompanyType,
} from '../Types/CompanyType';

export async function ApiCreateDeal(leads?: DealLeadType) {
  const url = `http://localhost:3000/api-post/deal/leads`;
  try {
    const res = await axios.post(url, leads, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res.data as ResponceLeadType;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const message = error.response.data.message ?? error.message;
      const statusCode = error.response.status;
      return new ErrorResponse(message, statusCode);
    }

    throw error;
  }
}

export async function ApiCreateContact(contacts?: ContactType[]) {
  const url = `http://localhost:3000/api-post/contacts`;
  try {
    const res = await axios.post(url, contacts, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res.data as ResponceContactType;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const message = error.response.data.message ?? error.message;
      const statusCode = error.response.status;
      return new ErrorResponse(message, statusCode);
    }

    throw error;
  }
}

export async function ApiCreateCompanies(companies?: CompanyType[]) {
  const url = `http://localhost:3000/api-post/companies`;

  try {
    const res = await axios.post(url, companies, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res.data as ResponceCompanyType;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const message = error.response.data.message ?? error.message;
      const statusCode = error.response.status;
      return new ErrorResponse(message, statusCode);
    }

    throw error;
  }
}
