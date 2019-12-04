
import { css } from 'styled-components';

export const spacedContainer = (margin: string) => css`
  margin: -${margin}
  > * {
    margin: ${margin}
  }
`
export const flexCentered = css`
  display: flex;
  align-items: center;
  justify-content: center;
` 