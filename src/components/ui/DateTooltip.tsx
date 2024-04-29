import { cn } from "@/utils";
import { Tooltip } from "@nextui-org/react";
import moment from "moment";
import { useMemo } from "react";

export enum IDateMode {
  absolute = "absolute",
  relative = "relative",
}

export interface IDateTooltip {
  date: Date | null;
  mode?: IDateMode;
  className?: string;
}

const DateTooltip: React.FC<IDateTooltip> = ({
  date,
  mode = IDateMode.absolute,
  className,
}) => {
  const formattedDate = useMemo(() => {
    const relative = moment(date).fromNow();
    const absolute = moment(date).format("DD/MM/YYYY");

    const formattedDate = {
      label: mode === IDateMode.absolute ? absolute : relative,
      tooltip: mode === IDateMode.relative ? absolute : relative,
    };

    return formattedDate;
  }, [date, mode]);

  return (
    <Tooltip
      content={
        <span className={cn("text-sm", className)}>
          {formattedDate.tooltip}
        </span>
      }
    >
      <span className={cn("text-sm", className)}>{formattedDate.label}</span>
    </Tooltip>
  );
};

export default DateTooltip;
