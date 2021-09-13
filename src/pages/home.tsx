import React, {useState,  useEffect} from 'react';
import { 
     FlatList,
} from 'react-native';

import { Container, Title, Input} from '../pages/styles'
 
import Button from '../components/Button/Button'
import { UsuarioCard } from '../components/UsuarioCard/UsuarioCard';


interface IUsuariosData {
  id: string,
  name: string,
  email: string,
  telefone: string
}

export function Home() {
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newTelefone, setNewTelefone] = useState('')
  const [usuarios, setNewUsuarios] = useState<IUsuariosData[]>([])
  const [greetting, setGreeting] = useState('')

  function handleAddNewUsuario() {
    const data = {
      id: String(new Date().getTime()),
      name: newName,
      email: newEmail,
      telefone: newTelefone
    }

    setNewUsuarios([...usuarios, data])
    setNewName('')
    setNewEmail('')
    setNewTelefone('')
  }
  
  function handleRemoveUsuario(id: string) {
    setNewUsuarios(usuarios => usuarios.filter(usuario => usuario.id != id) )
  }

  useEffect(() => console.log('UseEffect executado'), [usuarios])

  return (
    <>
      <Container>
        <Title>Cadastre-se</Title>
        <Input
          placeholder='Nome'
          placeholderTextColor = '#136f63'
          onChangeText={value => setNewName(value)}
          value={newName}/>
        <Input placeholder='Email'
          placeholderTextColor = '#136f63'
          onChangeText={value => setNewEmail(value)}
          value={newEmail}/>
        <Input placeholder ='Telefone'
          placeholderTextColor = '#136f63'
          onChangeText={value => setNewTelefone(value)}
          value={newTelefone}/>

        <Button 
          title='Salvar' 
          onPress={handleAddNewUsuario}  
        />

        <Title>Usuários cadastrados:</Title>
        
      <FlatList showsVerticalScrollIndicator={false}
        data={usuarios}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <>
            <UsuarioCard
              onPress={() => handleRemoveUsuario(item.id)}
              usuarioName={item.name}
              usuarioEmail={item.email}
              usuarioTelefone={item.telefone}/>
          </>
        )}
      />  
      </Container>
    </>
  );
}
