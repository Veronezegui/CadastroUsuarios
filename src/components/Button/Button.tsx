import React from "react"

import {TextButton, TouchableButton} from '../Button/styles'

import { 
    TouchableOpacityProps,
} from "react-native"

//type ButtonProps = TouchableOpacityProps
interface ButtonProps extends TouchableOpacityProps {
    title:string
}

export default function Button({ title,...rest }: ButtonProps) {
    
    return (
        <TouchableButton
         activeOpacity={0.3}
         {...rest}
        >
            <TextButton>
                {title}
            </TextButton>
        </TouchableButton>
    )
   
    
}
