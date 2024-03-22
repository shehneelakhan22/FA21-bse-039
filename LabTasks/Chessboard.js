import React from "react";
import { View, StyleSheet } from "react-native";

const Chessboard = () => {
  const renderRow = (rowIndex) => {
    const cells = [];
    for (let i = 0; i < 8; i++) {
      const color = (rowIndex + i) % 2 === 0 ? "white" : "black";
      cells.push(<View key={i} style={[styles.square, { backgroundColor: color }]} />);
    }
    return cells;
  };

  return (
    <View style={styles.container}>
      {[...Array(8)].map((_, index) => (
        <View key={index} style={styles.row}>
          {renderRow(index)}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
  },
  row: {
    flexDirection: "row",
  },
  square: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Chessboard;
