import { ChangeEvent, FormEvent } from "react";

export type TaskT = {
  id: string;
  title: string;
  desc: string;
  status: string;
};

export type InpErrorT = {
  [taskTitle: string]: { error: boolean; errMsg: string };
};
export type InpValT = {
  taskTitle: string;
  desc: string;
};

export type InpTextArChangeEvType = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export type FormEvType = FormEvent<HTMLFormElement>;

type handleInpChangeFuncT = (args: InpTextArChangeEvType) => void;

export type newTaskInpPropsT = {
  inpVal: InpValT;
  inpError: InpErrorT;
  handleInpChange: handleInpChangeFuncT;
};
export type myRadioGroupPropsT = {
  status: string;
  handleStatusChange: handleInpChangeFuncT;
};

export type colorsT = {
  [arg: string]: string;
};
