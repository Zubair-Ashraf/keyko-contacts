export interface QueryParams {
  onSuccess?: (d?: any) => any;

  onError?: (err?: Error | string | null) => any;
}
