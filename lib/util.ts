export const css = (obj: any) =>
  Object.keys(obj)
    .filter(ent => obj[ent])
    .join(" ");
