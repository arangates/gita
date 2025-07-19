export function extractPrompts<T>(els: Element[], categories: { slug: string; slokas: T[] }[]) {
  const ids = els.map((v) => v.getAttribute("data-key"));

  const slokas = ids
    .map((id) => {
      if (!id) {
        return;
      }
      const [slug, index] = id?.split("-") ?? [];
      const category = categories.find((category) => category.slug === slug);

      return category?.slokas[parseInt(index)];
    })
    .filter(Boolean);

  return slokas;
}
