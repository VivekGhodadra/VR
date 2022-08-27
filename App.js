import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
