import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MinhaFonte from './public/fonts/Fonts.jsx'

import Title from './src/components/Title/index.jsx'
import Form from './src/components/form/index.jsx'

const App = () => {
MinhaFonte()

  return (
      <View style = {Styles.container}>
            <Title/>
            <Form/>
      </View>
  );
};

const Styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: 'lightgray',
            paddingTop:40,
      }
})

export default App;