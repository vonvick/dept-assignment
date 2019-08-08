import { setUrlData } from "../store/actions";

export interface IndexPageProps {
  industries: string[],
  categories: string[],
  cases: any[],
  error: string,
  loading: boolean,
  filtersApplied: any,
  performDataFilter: (value: string, type: string) => Promise<any>
}
