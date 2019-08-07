import 'isomorphic-unfetch';

interface ErrorResponse {
  message?: string;
  status?: number;
  code?: string;
}

export class ResponseError extends Error {
  public message: string = '';
  public status?: string = undefined;
  public code?: string = undefined;

  constructor(response: ErrorResponse) {
    super(response.message);

    Object.keys(response).forEach((key: string) => {
      // @ts-ignore
      this[key] = response[key];
    });
  }
}

export type RequestType = (
  url: string,
  options?: RequestInit,
  fetchFn?: typeof fetch,
  publicUrl?: string,
) => Promise<{ [key: string]: any }>;

const defaultOptions = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    // 'X-Client-Ip': '0.0.0.0',
  },
  method: 'GET'
};

const isJson = (response: Response): boolean => {
  const contentType = response.headers.get('Content-Type');
  return !!(contentType && contentType.indexOf('application/json') !== -1);
};

const request: RequestType = async (
  url,
  options = {},
  fetchFn = fetch
) => {
  const allOptions = Object.assign({}, defaultOptions, options);

  return fetchFn(url, allOptions);
};

export default request;
