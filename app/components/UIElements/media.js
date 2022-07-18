import { css } from 'styled-components';

const sizes = {
  smalldevice: 320,
  mobile: 576,
  tablet: 768,
  desktop: 992,
  laptop: 1200,
  ipadPro: 1024,
  mdpiScreen: 1280,
};
const media = Object.keys(sizes).reduce((queries, key) => {
  queries[key] = (...args) => css`
    @media (max-width: ${sizes[key] / 16}em) {
      ${css(...args)}
    }
  `;
  return queries;
}, {});

export default media;
