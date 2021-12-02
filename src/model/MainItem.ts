export type ItemType =
  | "overview"
  | "pan-gesture"
  | "transition"
  | "card"
  | "drag-card"
  | "transition-new"
  | "hoc";

export interface MainItem {
  type: ItemType;
  title: string;
}
