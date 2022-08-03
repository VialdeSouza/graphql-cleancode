import { UtilsMoment } from "@/protocols/utils-moment";
import moment from "moment";

export class AdaptUtilsMoment implements UtilsMoment {
  formatToString(date: Date): string {
    if (!moment(date).isValid) return "";
    moment(date).format("DD/MM/YYYY");
  }
  
  getRangeMonth(current: string | Date) {
    if (!moment(current).isValid) return { startAt: "", finishAt: "" };
    return {
      startAt: moment(current).startOf("month").format("DD/MM/YYYY"),
      finishAt: moment(current).endOf("month").format("DD/MM/YYYY"),
    };
  }
}

