import { create } from "zustand/react";

export type CursorType = "default" | "button";

export type CursorState = {
  mode: "dark" | "light";
  type: {
    type: CursorType;
    text?: string;
    additional?: Record<string, string | undefined>;
  };
};

export type CursorAction = {
  setMode: (mode: "dark" | "light") => void;
  setType: (type: CursorState["type"]) => void;
};

export type CursorStore = CursorState & CursorAction;

export const cursorDefaultValue: CursorState = {
  mode: "light",
  type: {
    type: "default",
  },
};

export const useCursorStore = create<CursorStore>()((set) => ({
  ...cursorDefaultValue,
  setMode: (mode: "dark" | "light") => set({ mode }),
  setType: (type: CursorState["type"]) => set({ type }),
}));
