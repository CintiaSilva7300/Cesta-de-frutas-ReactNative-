import React from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Detalhes({
  nome,
  logoFazenda,
  nomeFazenda,
  descricao,
  preco,
  botao,
}) {
  return (
    <>
      <Text style={estilos.nome}>{nome}</Text>
      <Text style={estilos.fazenda}>
        <Image source={logoFazenda} style={estilos.imagemFazenda} />
        <Text style={estilos.nomeFazenda}>{nomeFazenda}</Text>
      </Text>
      <Text style={estilos.descricao}>{descricao}</Text>
      <Text style={estilos.preco}>{preco}</Text>

      <TouchableOpacity style={estilos.botao} onPress={() => {}}>
        <Text style={estilos.textoBotao}>{botao}</Text>
      </TouchableOpacity>
    </>
  );
}

const estilos = StyleSheet.create({
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontStyle: "italic",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 35,
    height: 35,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 30,
    marginLeft: 12,
    fontWeight: "bold",
  },
  descricao: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  botao: {
    marginTop: 16,
    backgroundColor: "#2a9f85",
    paddingVertical: 16,
    borderRadius: 25,
    fontWeight: "",
  },
  textoBotao: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
