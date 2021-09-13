import React from "react";
import {Card, UsuariosEmail, UsuariosName, UsuariosTelefone} from '../UsuarioCard/styles'

import { 
    TouchableOpacityProps
} from "react-native";

interface UsuarioCardProps extends TouchableOpacityProps {
    usuarioName: string,
    usuarioEmail: string,
    usuarioTelefone: string
}

export function UsuarioCard({ usuarioName, usuarioEmail, usuarioTelefone, ...rest }:UsuarioCardProps) {
    return (
        <Card
              {...rest}>
            <UsuariosName>
              Nome: {usuarioName}
            </UsuariosName>
            <UsuariosEmail>
              Email: {usuarioEmail}
            </UsuariosEmail>
            <UsuariosTelefone>
              Telefone: {usuarioTelefone}
            </UsuariosTelefone>
        </Card>
    )
}
