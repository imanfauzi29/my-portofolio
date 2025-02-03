export const cn = (...classes: unknown[]) => {
  return classes.filter(Boolean).join(" ").trim();
};
