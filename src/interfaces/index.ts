import { Dispatch, SetStateAction } from "react";

export type setStateType<T> = Dispatch<SetStateAction<T>>;

export type MainProps = {
  formData: string;
  setFormData: setStateType<string>;
  EditId: string;
  setFormDatas: setStateType<{ _id: string; name: string }[]>;
  setEditId: setStateType<string>;
  formDatas: { _id: string; name: string }[];
};
export type ItemsExtraProp = {
  obj: { _id: string; name: string };
};
export type getProps = {
  getDatas : () =>void;
}
