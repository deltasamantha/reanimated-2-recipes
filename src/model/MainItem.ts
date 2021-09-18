export type ItemType = "overview" | "pan-gesture" | "transition" | "card" | "drag-card";

export interface MainItem {
  type: ItemType;
  title: string;
}
