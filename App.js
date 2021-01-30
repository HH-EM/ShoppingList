import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const buttonPressed = () => {
    setData([...data, {key: text}]);
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setText(text)}
        value={text}
      />
      <View style={styles.button}>
        <Button onPress={buttonPressed} title="ADD" />
        <Button onPress={() => setData('')} title="CLEAR" />
      </View>
      <Text style={{ fontSize:18, fontWeight: 'bold', color: 'blue', marginTop:25 }}>Shopping List</Text>
      <FlatList
        data={data}
        renderItem={({item}) =>
          <Text style={{ margin:3 }}>{item.key}</Text>}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1, 
    padding: 5,
    margin: 50,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

