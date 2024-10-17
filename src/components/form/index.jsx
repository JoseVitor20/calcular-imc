import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import ResultImc from './ResultImc/ResultImc.jsx'
import Styles from './styles.jsx'

export default function Form() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura...");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Culcular");

    // Calcular o IMC
    function ImcCalculator() {
        return setImc((weight / (height * height)).toFixed(2))
    }

    // Validar dados inseridos 
    function validationImc(){
      if(weight != "" && height != ""){
            ImcCalculator()
            setHeight('')
            setWeight('')
            setMessageImc('Seu IMC é igual: ')
            setTextButton("Calcular Novamente")
            return
      }

      setImc(null)
      setTextButton("Calcular")
      setMessageImc("Preencha o peso e altura...")
    }

    return (
        <View style = {Styles.formContext}>
                  <View style = {Styles.form}>
                        <Text style = {Styles.formLabel}>Altura</Text>
                        <TextInput
                              style = {Styles.input}
                              onChangeText = {setHeight}
                              value = {height}
                              placeholder = "Digite sua altura. Ex: 1,70"
                              inputMode = "numeric"
                        />

                        <Text style = {Styles.formLabel}>Peso</Text>
                        <TextInput
                              style = {Styles.input}
                              onChangeText = {setWeight}
                              value = {weight}
                              placeholder =  "Digite seu peso. Ex: 78.29"
                              inputMode = "numeric"
                        />
                        <TouchableOpacity style = {Styles.buttomCalculator} onPress = {()=>{validationImc()}}> 
                              <Text style= {Styles.textButtomCalculator}>CALCULAR</Text> 
                        </TouchableOpacity>
                  </View>

                  <ResultImc messageResultImc = {messageImc} resultImc = {imc}/>

            </View>
    )
}