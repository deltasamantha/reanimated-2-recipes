export type ItemType =
  | "overview"
  | "pan-gesture"
  | "transition"
  | "card"
  | "drag-card"
  | "transition-new";

export interface MainItem {
  type: ItemType;
  title: string;
}
