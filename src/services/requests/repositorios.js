import api from "../api";

export async function pegarRepositoriosDoUsuario(id) {
  try {
    const resultado = await api.get(`/repos?postId=${id}`);

    return resultado.data
  } catch (error) {
    console.error(error);

    return []
  }
}

export async function salvarRepositoriosDoUsuario(postId, nome, data, id) {
  try {
    await api.put(`/repos/${id}`, {
      name: nome,
      data: data,
      postId: postId,
      id: id
    });

    return 'sucesso'
  } catch (error) {
    console.error(error);

    return 'erro'
  }
}