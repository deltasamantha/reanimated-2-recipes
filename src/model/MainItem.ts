export type ItemType = "overview" | "pan-gesture" | "transition" | "card";

export interface MainItem {
  type: ItemType;
  title: string;
}
