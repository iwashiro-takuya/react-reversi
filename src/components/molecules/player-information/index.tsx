import React from 'react';
import Const from 'src/const';
import styled from 'styled-components';
import Piece from 'src/components/atoms/piece';

const { Color, Size, PieceColor, Player } = Const;

export interface PlayerInformationProps {
  player: UnionVal<typeof Player>;
  pieceColor: UnionVal<typeof PieceColor>;
  score: number;
}
const PlayerInformation: React.FC<PlayerInformationProps> = ({
  player,
  pieceColor,
  score,
}) => {
  return (
    <Wrapper>
      {pieceColor === PieceColor.WHITE && (
        <Inner>
          <StyledPiece pieceColor={PieceColor.WHITE} />
          <StyledPlayer color={Color.TX_BLACK}>{player}</StyledPlayer>
        </Inner>
      )}

      <Score>{score}</Score>

      {pieceColor === PieceColor.BLACK && (
        <Inner>
          <StyledPiece pieceColor={PieceColor.BLACK} />
          <StyledPlayer color={Color.TX_WHITE}>{player}</StyledPlayer>
        </Inner>
      )}
    </Wrapper>
  );
};

export default PlayerInformation;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Inner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
`;

const StyledPiece = styled(Piece)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface StyledPlayer {
  color: typeof Color[keyof Pick<typeof Color, 'TX_BLACK' | 'TX_WHITE'>];
}
const StyledPlayer = styled.p<StyledPlayer>`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  color: ${(props) => props.color};
  transform: translate(-50%, -50%);
`;

const Score = styled.span`
  display: block;
  font-size: ${Size.FS_24};
`;