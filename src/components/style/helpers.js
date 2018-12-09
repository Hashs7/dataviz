export const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
    return acc
}, {});
