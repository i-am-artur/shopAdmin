const imageProps = {
  maxWidth: 300,
  maxHeight: 300
};

export const image = {
  ...imageProps,
  ratio: imageProps.maxWidth / imageProps.maxHeight
};

export const catProps = {
  maxWidth: 150,
  maxHeight: 150
};

export const catImage = {
  ...catProps,
  ratio: catProps.maxWidth / catProps.maxHeight
};
