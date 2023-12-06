export enum FORM_TYPE {
  "update",
  "create",
}
interface ICreateEntityForm<T> {
  type: FORM_TYPE.create;
  data?: T;
}
interface IUpdateEntityForm<T> {
  type: FORM_TYPE.update;
  data: T;
}

export type TForm<T> = ICreateEntityForm<T> | IUpdateEntityForm<T>;
