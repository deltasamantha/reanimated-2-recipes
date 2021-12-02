export type ItemType =
  | "overview"
  | "pan-gesture"
  | "transition"
  | "card"
  | "drag-card"
  | "transition-new"
  | "hoc"
  | "circle-progress";

export interface MainItem {
  type: ItemType;
  title: string;
}
