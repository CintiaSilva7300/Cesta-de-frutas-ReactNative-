import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
  ScrollView,
  FlatList,
} from "react-native";

import Detalhes from "./components/detalhes";
import Item from "./components/item";
import Topo from "./components/topo";

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />

              <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
                <Text style={estilos.titulo}>{itens.titulo}</Text>
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
  },
});
