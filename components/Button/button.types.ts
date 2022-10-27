import { ButtonColorEnum } from "../../utils/global.types";
export interface ButtonPropTypes {
  text: string;
  onClick: () => void;
  color: ButtonColorEnum;
}
