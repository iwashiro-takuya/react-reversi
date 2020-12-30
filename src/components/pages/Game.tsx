import React, { useState } from 'react';
import styled from 'styled-components';
import Board from '../organisms/Board';
import Const from '../../const';

const { Color } = Const;

const Game: React.FC = () => {
  const [isGameStartFlg, setGameStart] = useState(true); // TODO:最後にfalseにする

  return (
    <StyledGameWrapper>
      {!isGameStartFlg && (
        <button
          type="button"
          onClick={() => {
            setGameStart(true);
          }}
        >
          Game Start
        </button>
      )}
      {isGameStartFlg && <Board onSideSquares={8} />}
    </StyledGameWrapper>
  );
};

const StyledGameWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  color: ${Color.TX_BLACK};
`;

export default Game;