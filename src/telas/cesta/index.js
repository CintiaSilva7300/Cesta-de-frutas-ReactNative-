import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
  ScrollView,
} from "react-native";

import Detalhes from "./components/detalhes";
import Itens from "./components/itens";
import Topo from "./components/topo";

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <ScrollView>
      <Topo {...topo} />
      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
        <Itens {...itens} />
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
