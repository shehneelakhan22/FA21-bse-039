import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const BOARD_SIZE = 8;

const LIGHT_SQUARE_COLOR = '#f0d9b5';
const DARK_SQUARE_COLOR = '#b58863';

const SQUARE_SIZE = 50;

const ChessBoard = () => {

  const renderSquare = (row, col) => {
    const isDarkSquare = (row + col) % 2 === 1;
    const backgroundColor = isDarkSquare ? DARK_SQUARE_COLOR : LIGHT_SQUARE_COLOR;
    return (
      <TouchableOpacity
        key={`${row}-${col}`}
        style={[styles.square, { backgroundColor }]}
      >
        <Text>{`${row}${col}`}</Text>
      </TouchableOpacity>
    );
  };

  const renderRow = (row) => {
    const squares = [];
    for (let col = 0; col < BOARD_SIZE; col++) {
      squares.push(renderSquare(row, col));
    }
    return (
      <View key={row} style={styles.row}>
        {squares}
      </View>
    );
  };

  const renderBoard = () => {
    const rows = [];
    for (let row = 0; row < BOARD_SIZE; row++) {
      rows.push(renderRow(row));
    }
    return <View style={styles.board}>{rows}</View>;
  };

  return <View>{renderBoard()}</View>;
};


const styles = StyleSheet.create({
  board: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChessBoard;
