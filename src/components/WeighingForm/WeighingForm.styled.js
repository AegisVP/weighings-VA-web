import { theme } from 'components/Common/Theme';

import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin: ${theme.mp(1, 1)};
  padding: ${theme.mp(2, 3)};

  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.normal};

  border: 1px solid tomato;
`;
