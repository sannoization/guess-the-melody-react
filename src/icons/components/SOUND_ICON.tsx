import {FC} from "react";
import {COLORS} from "../../components/Table/Cell/constants";

const SOUND_ICON: FC<{ className?: string, color: COLORS }> = ({className, color}) => (
    <svg id="sound-icon"
          fill={color}
         className={className}
    >
      <path className="cls-1"
            d="M109.24,131c11.56-14.28,11.34-37.44-.88-51.4l7-6.42c15.26,17.44,15.49,46.41,1,64.19Zm-6.45-5.82L96,119c6-7.71,5.82-20-.7-27.42l6.7-6.18C111.46,96.22,111.66,114.09,102.79,125.17Zm-47-39.9,29-19.68.58,80.55L55.09,125.66Zm-25.4,32.3c0-3.41-.14-18.08-.14-25.16,0-6.11,3.06-8.11,8-8.11,4.55,0,9,.45,9,.45l.29,41.81s-5.75.68-9.1.68C32.88,127.24,30.38,124.29,30.38,117.57Z"/>
    </svg>
);

export default SOUND_ICON;