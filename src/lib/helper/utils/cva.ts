type VariantOptions<T extends Record<string, Record<string, string>>> = {
  [K in keyof T]: keyof T[K];
};

type ClassVariantOptions<T extends Record<string, Record<string, string>>> = {
  variants: T;
  defaultVariants?: Partial<VariantOptions<T>>;
};

export const classVariant =
  <T extends Record<string, Record<string, string>>>(
    classVariantOptions: ClassVariantOptions<T>,
  ) =>
  (options: VariantOptions<T>) => {
    const { defaultVariants, variants } = classVariantOptions;
    const mergeOptions = { ...defaultVariants, ...options };

    const variantClass = Object.keys(variants).map((key) => {
      const value = mergeOptions[key];
      return value ? variants[key as keyof T][value as keyof T[keyof T]] : "";
    });

    return variantClass.join(" ").trim();
  };
