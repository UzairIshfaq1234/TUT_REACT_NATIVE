/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View, Button} from 'react-native';

let age = 18;
var email = 'lgu.edu.pk';

function fruits() {
  return 'apple';
}

function App(): JSX.Element {
  return (
    <View>
      {/* <Text style={{fontSize: 20}}>LGU ERP</Text>
      <Text>Age is : {age}</Text>
      <Text>Email is : {email}</Text>
      <Text>Fruit : {fruits()}</Text> */}
      <Text>Permission : {age > 18 ? 'Allowed' : 'Not Allowed'}</Text>

      <Button title="Click Me" />

      <Text>{100 * 3}</Text>
    </View>
  );
}

export default App;
