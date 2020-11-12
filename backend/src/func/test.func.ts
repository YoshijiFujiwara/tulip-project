export const hasProperty = (obj, key) =>
  !!obj && Object.prototype.hasOwnProperty.call(obj, key);
