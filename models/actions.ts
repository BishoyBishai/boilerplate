interface IServerActionWithSuccess<T> {
  ok: true;
  data?: T;
}
interface IServerActionWithError {
  ok: false;
  error: string;
}

export type TServerAction<T = any> =
  | IServerActionWithSuccess<T>
  | IServerActionWithError;
