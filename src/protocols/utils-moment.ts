type Range = {
  startAt: string;
  finishAt: string;
};
export interface UtilsMoment {
  getRangeMonth(current: Date | string): Range;
  formatToString(date: Date): string;
}

