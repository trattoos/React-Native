import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { validarSesion } from "./src/Utils/Acciones";

export default function App() {
  validarSesion();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Esta es mi primer app con React Native</Text>
      <Text style={styles.texto}>Otro texto</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  //identificador: { aquí va tu estilo. }
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "#fff",
    fontSize: 20,
    width: "50%",
    textAlign: "center",
  },
  texto2: {
    color: "red",
    fontSize: 20,
    width: "50%",
    textAlign: "center",
  },
});