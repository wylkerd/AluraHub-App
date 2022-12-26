import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botoesFiltroContainer: {
      width: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      paddingHorizontal: 10
    },
    repositoriosTexto: {
        fontSize: 21,
        fontWeight: '600',
        color: '#45565F',
        marginTop: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
        textAlign: 'center',
    },
    repositorio: {
        width: '100%',
        height: 80,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    repositorioNome: {
        fontSize: 16,
        color: '#444',
        fontWeight: 'bold',
    },
    repositorioData: {
        fontSize: 14,
        color: '#999',
    },
    entrada: {
        borderWidth: 2,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        marginTop: 40,
        borderRadius: 8,
        height: 44,
        width: '90%',
    },
    botaoBusca: {
        backgroundColor: '#8A07DA',
        marginTop: 20,
        marginBottom: 0,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: '45%',
    },
    botaoLimpar: {
      borderWidth: 2,
      borderColor: '#ddd',
      backgroundColor: '#FFF',
      marginTop: 20,
      marginBottom: 0,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      width: '45%',
    },
    botao: {
        backgroundColor: '#8A07DA',
        marginTop: 20,
        marginBottom: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: '90%',
    },
    textoBotao: {
        fontSize: 16,
        color: '#FFF',
    },
    textoBotaoLimpar: {
        fontSize: 16,
        color: '#000',
    },
});


export default estilos;