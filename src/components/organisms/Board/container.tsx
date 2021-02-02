import React from 'react';
import useBoard from 'src/components/organisms/Board/hook';
import Board, { BoardProp } from 'src/components/organisms/Board/component';
import Square from 'src/components/atoms/Square/component';
import Piece from 'src/components/atoms/Piece/container';

const EnhancedBoard: React.FC<BoardProp> = ({ onSideSquares, dataCy }) => {
  const {
    squaresCountsArray,
    boardState,
    hasReversiblePiece,
    reverseSquare,
    hasPlacedPiece,
  } = useBoard(onSideSquares);

  return (
    <Board onSideSquares={onSideSquares} dataCy={dataCy}>
      {squaresCountsArray.map((squareCount: number) => (
        <Square
          key={boardState[squareCount].id}
          dataCy={`square-${boardState[squareCount].id}`}
        >
          {hasReversiblePiece(squareCount) && (
            <Piece
              playerVal={boardState[squareCount].val}
              onclick={() => {
                reverseSquare(squareCount);
              }}
              dataCy="clickable"
            />
          )}

          {hasPlacedPiece(squareCount) && (
            <Piece playerVal={boardState[squareCount].val} />
          )}
        </Square>
      ))}
    </Board>
  );
};

export default EnhancedBoard;