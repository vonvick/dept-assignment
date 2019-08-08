export interface GlobalState {
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

export interface AppState {
  global: GlobalState;
  form: any;
}
