export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null;
  interrupetedDate: number | null;
  type: "workTime" | "shortBreakTime" | "longBreakTime";
};
