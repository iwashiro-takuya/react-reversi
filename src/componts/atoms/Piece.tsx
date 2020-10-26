import React from 'react';
import styled from 'styled-components';
// import Const from '../../const';

// const { Color } = Const;

interface PieceProps {
  color: string;
  display: 'none' | 'block';
}
type PieceStyle = {
  color: string;
  display: 'none' | 'block';
};

const Piece: React.FC<PieceProps> = ({ color, display }) => (
  <StyledPiece color={color} display={display} />
);

const StyledPiece = styled.span<PieceStyle>`
  display: ${(props) => props.display};
  width: 80%;
  height: 80%;
  background-color: ${(props) => props.color};
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;

export default Piece;
