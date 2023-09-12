import { SurveyInterface } from 'interfaces/survey';
import { GetQueryInterface } from 'interfaces';

export interface VendorInterface {
  id?: string;
  name: string;
  email: string;
  survey_id: string;
  created_at?: any;
  updated_at?: any;

  survey?: SurveyInterface;
  _count?: {};
}

export interface VendorGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  email?: string;
  survey_id?: string;
}
