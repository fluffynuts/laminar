import { v4 } from "uuid";

export interface ICheckItem {
  id: string;
  label: string;
  checked: boolean;
}

export function unchecked(label: string): ICheckItem {
  return {
    id: v4(),
    label,
    checked: false
  };
}

