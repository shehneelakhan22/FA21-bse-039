import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Chessboard from './screen/ChessBoard';

export default function App() {
  return (
    <>
     <View style={styles.container}>
         <Chessboard></Chessboard>
       </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
