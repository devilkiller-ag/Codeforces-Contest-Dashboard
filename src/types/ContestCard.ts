export interface IContestCardProps {
  id: number;
  name: string;
  type: "ICPC" | "CF";
  phase: "BEFORE" | "CODING" | "FINISHED";
  frozen: boolean;
  durationSeconds: number;
  startTimeSeconds: number;
  relativeTimeSeconds: number;
}