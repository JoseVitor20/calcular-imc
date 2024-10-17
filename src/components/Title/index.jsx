import React from 'react'
import {View, Text} from 'react-native'
import Styles from './style.jsx';

export default function Title(){
      return(
            <View style = {Styles.boxTitle}>
                  <Text style={[Styles.textTitle,{color:'red'}]}>YOU </Text>
                  <Text style={[Styles.textTitle,{color:'white'}]}>&</Text>
                  <Text style={[Styles.textTitle,{color:'blue'}]}> IMC</Text>
            </View>
      )
}