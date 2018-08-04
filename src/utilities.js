export const isObjectEmpty = object => {
  const lengthOfKeys = Object.keys(object).length;
  return lengthOfKeys === 0;
};

export const parseQueryParam = queryParam => {
  const indexOfEqualSign = queryParam.indexOf('=');
  const queryType = queryParam.slice(1, indexOfEqualSign);
  switch (queryType) {
    case 'redirect': {
      const from = queryParam.slice(indexOfEqualSign + 1);
      return {
        type: 'redirect',
        from: from
      };
    }
  }
};
