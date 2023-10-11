import { type } from "os";
import { Dispatch, SetStateAction } from "react";

export type setStateType<T> = Dispatch<SetStateAction<T>>;

export type MainProps = {
  formData: string;
  setFormData: setStateType<string>;
  EditId: string;
  setFormDatas: setStateType<{ id: string; name: string }[]>;
  setEditId: setStateType<string>;
  formDatas: { id: string; name: string }[];
};
export type ItemsExtraProp = {
  obj: { id: string; name: string };
};
