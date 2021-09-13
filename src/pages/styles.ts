import styled from 'styled-components/native';
import {Platform} from 'react-native'

export const Container = styled.View`
    background-color: rgb(19, 111, 99),
    padding-left: 30px,
    padding-top: 70px,
`

export const Title = styled.Text`
    color: rgb(76, 224, 204),
    font-size: 25px,
    font-weight: bold,
  
`

export const Input = styled.TextInput`
    background-color: #041b15,
    border-radius: 7px,
    color: rgb(76, 224, 204),
    padding: 9px,
    font-size: 18px,
    margin-top: 15px,
`

//export const Button = styled.Button`
    //background-color: '#041b15',
    //padding: Platform.OS === 'ios' ? 15 : 9,
   // border-radius: 7,
    //align-items: 'center',
   // margin-top: 15,
    //width: 150,
//`