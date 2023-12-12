import { ChangeEvent, FormEvent } from "react";

export type TaskT = {
  id: string;
  title: string;
  desc: string;
  status: string;
};

export type InpErrorT = {
  taskTitle: { error: boolean; errMsg: string };
  desc: { error: boolean; errMsg: string };
};
export type InpValT = {
  taskTitle: string;
  desc: string;
};

export type InpTextArChangeEvType = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export type FormEvType = FormEvent<HTMLFormElement>;

export type newTaskInpPropsT = {
  inpVal: InpValT;
  inpError: InpErrorT;
  handleInpChange: {
    (args: InpTextArChangeEvType): void;
  };
};
