export const isObjectEmpty = object => {
  const lengthOfKeys = Object.keys(object).length;
  return lengthOfKeys === 0;
};
