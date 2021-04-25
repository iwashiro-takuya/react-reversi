import React from 'react';
import Const from 'src/const';
import styled, { css } from 'styled-components';

const { Color, PlayerVal } = Const;

export interface PieceProps {
  playerVal: number;
  onclick?: () => void;
  dataCy?: string;
}
const Piece: React.FC<PieceProps> = ({ playerVal, onclick, dataCy }) => {
  switch (playerVal) {
    case PlayerVal.WHITE:
      return <StyledPiece color={Color.PC_WHITE} />;
    case PlayerVal.BLACK:
      return <StyledPiece color={Color.PC_BLACK} />;
    default:
      return (
        <StyledPiece
          color={Color.PC_INVISIBLE}
          onClick={onclick}
          data-cy={dataCy}
        />
      );
  }
};

type StyledPieceProp = {
  color: typeof Color[keyof Pick<
    typeof Color,
    'PC_WHITE' | 'PC_BLACK' | 'PC_INVISIBLE'
  >];
};
const StyledPiece = styled.span<StyledPieceProp>`
  display: block;
  width: 80%;
  height: 80%;
  background-color: ${(props) => props.color};
  ${(props) =>
    props.color === Color.PC_INVISIBLE
      ? css`
          border: none;
        `
      : css`
          border: 1px solid ${Color.BD_BLACK};
        `}

  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;

export default Piece;
