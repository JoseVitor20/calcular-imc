import React from 'react'
import {View, Text} from 'react-native'
import Styles from './style.jsx'

export default function Form(props){

      const mostrarMensagem = () => {
            if(props.resultImc == null){
                  return Styles.default
            }else if(props.resultImc <= 18.5 || props.resultImc >= 25){
                  return Styles.resultadoBAD
            }else if(props.resultImc >= 18.5  || props.resultImc <= 24.9){
                  return Styles.resultadoGOOD
            }
      }

      return(
            <View>
                  <Text style = {mostrarMensagem()}>{props.messageResultImc} {props.resultImc}</Text>
            </View>
      )
}