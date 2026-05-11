export type APIResponse<T> = {
  data: T;
  total?: number;
  firstElement?: unknown;
  lastElement?: unknown;
};
