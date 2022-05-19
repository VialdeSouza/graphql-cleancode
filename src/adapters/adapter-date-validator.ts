import { MonthValidator } from "@/protocols/date-validator";
import moment from "moment";
;

export class AdaptDateValidator implements MonthValidator {
  isCurrentMonth(date: string): boolean {
    return moment().isSame(moment(date), "month");
  }
}
