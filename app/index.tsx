import { useState } from 'react';
import React, { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, TamaguiProvider, Text } from 'tamagui';

import { StyledInput, StyledResult, StyledTitle, StyledYStack } from './style/style';

import config from '~/tamagui.config';

export default function Home() {
  const [cep, setCep] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  async function sourchCep() {
    const request = await fetch('https://viacep.com.br/ws/' + cep + '/json/');

    const response = await request.json();

    console.log(response);

    if (response.erro) {
      alert('CEP inválido!');
      return;
    }
    setAddress(
      'CEP: ' +
        response.cep +
        '\n' +
        'DDD: ' +
        response.ddd +
        '\n' +
        'Estado: ' +
        response.estado +
        '\n' +
        'Cidade: ' +
        response.localidade +
        '\n' +
        'UF: ' +
        response.uf
    );
  }

  return (
    <TamaguiProvider config={config}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <StyledYStack>
          <StyledTitle>Consultar CEP a</StyledTitle>
          <StyledInput value={cep} onChangeText={setCep} placeholder="Digite o seu CEP" />
          <Button onPress={sourchCep}>Consultar</Button>
          <StyledYStack>
            <StyledResult>{address}</StyledResult>
          </StyledYStack>
        </StyledYStack>
      </SafeAreaView>
    </TamaguiProvider>
  );
}
