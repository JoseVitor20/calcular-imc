import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
      formContext: {
            width: '100%',
            height:'100%',
            bottom:0,
            backgroundColor: 'white',
            alignItems: 'center',
            marginTop:30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30
      },

      form:{
            width: "100%",
            height: "auto",
            marginTop: 30,
            padding: 10
      },

      formLabel: {
            color:'blue',
            fontSize: 20,
            paddingLeft: 20
      },

      input: {
            width: "90%",
            height:40,
            marginTop:5,
            marginBottom:10,
            borderRadius: 50,
            backgroundColor:'rgb(239, 239, 239)',
            paddingLeft: 20,
            borderColor: '#a3c7db',
            borderWidth: 1,
            borderStyle: 'solid',
            color: 'gray'
      },

      buttomCalculator: {
            borderRadius: 50,
            alignItems: "center",
            justifyContent: 'center',
            width: '90%',
            backgroundColor: 'blue',
            paddingTop: 14,
            paddingBottom: 14,
            marginLeft: 12,
            margin:15
      },

      textButtomCalculator: {
            fontSize: 20,
            color:'white'
      }

})

export default styles