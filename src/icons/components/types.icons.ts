import {COLORS} from "../../components/Table/Cell/utils";

export type IconProps = {
  className?: string;
  color: COLORS;
  src?: string
  onClick?: () => void;
  innerKey?: string;
}