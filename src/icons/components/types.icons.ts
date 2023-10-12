import {COLORS} from "../../components/Table/Cell/utils";

export type IconProps = {
  className?: string;
  color: COLORS;
  crossed?: boolean;
  src?: string
  onClick?: () => void;
}