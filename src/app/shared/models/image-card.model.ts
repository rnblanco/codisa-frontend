export type imageCardView = 'image' | 'map';
export const isImageCardView = (variable: unknown) => {
  return variable === 'image' || variable === 'map';
};