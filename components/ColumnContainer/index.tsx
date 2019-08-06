import styled from 'styled-components';

interface ColumnProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
};

const getWidthString = (value: number) => {
  if (!value) return;

  let size = (value / 12) * 100;

  return `max-width: ${size}%; flex: 0 0 ${size}%;`;
};

const ColumnContainer = styled.div<ColumnProps>`
  padding-left: 15px;
  padding-right: 15px;
  float: left;
  margin-bottom: 20px;

  ${({ xs }) => (xs ? getWidthString(xs) : "max-width: 100%; flex: 0 0 100%")};

  @media only screen and (min-width: 600px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }

  @media only screen and (min-width: 900px) {
    ${({ md }) => md && getWidthString(md)};
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
`;

export default ColumnContainer;
