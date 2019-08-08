export interface AppState {
  cases: any[],
  industries: any[],
  categories: any[],
  error: string,
  loading: boolean,
  filtersApplied: {
    category: string,
    industry: string,
  }
}
