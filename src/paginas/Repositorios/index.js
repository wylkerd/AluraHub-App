import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import estilos from './estilos';
import { pegarRepositoriosDoUsuario, pegarRepositorioDoUsuarioPeloNome } from '../../services/requests/repositorios';
import { useIsFocused } from '@react-navigation/native';

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const [repoNameFiltered, setRepoNameFiltered] = useState('');
    const estaNaTela = useIsFocused(); // se a tela estiver aberta retorna um valor True

    async function busca() {
      const resultado = await pegarRepositorioDoUsuarioPeloNome(repoNameFiltered);

      setRepoNameFiltered('')
      if (resultado) {
        setRepo(resultado)
      } else {
        Alert.alert('Usuario não encontrado!')
        setRepo([])
      }
    }

    const buscarDados = async () => {
      const resultado = await pegarRepositoriosDoUsuario(route.params.id)
      setRepo(resultado)
      setRepoNameFiltered('')
    }

    useEffect(() => {
      buscarDados()
    }, [estaNaTela])

    return (
        <View style={estilos.container}>
          <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
          <TextInput
            placeholder="Busque por um repositório"
            autoCapitalize="none"
            style={estilos.entrada}
            value={repoNameFiltered}
            onChangeText={setRepoNameFiltered}
            // onChangeText={(texto) => setRepoNameFiltered(texto)} // Old padrão de escrita
          />
          <View style={estilos.botoesFiltroContainer} >
            <TouchableOpacity 
              style={estilos.botaoBusca}
              onPress={busca}
            >
              <Text style={estilos.textoBotao}>
                Buscar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={estilos.botaoLimpar}
              onPress={buscarDados}
            >
              <Text style={estilos.textoBotaoLimpar}>
                Limpar
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
            style={estilos.botao}
            onPress={() => navigation.navigate('CriarRepositorio')}
          >
            <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
          </TouchableOpacity>

          <FlatList
            data={repo}
            style={{ width: '100%' }}
            keyExtractor={repo => repo.id}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={estilos.repositorio}
                onPress={() => 
                  navigation.navigate('InfoRepositorio', {
                    item
                  })
                }
              >
                <Text style={estilos.repositorioNome}>{item.name}</Text>
                <Text style={estilos.repositorioData}>Atualizado em {item.data}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
    );
}
