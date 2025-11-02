
// Importiamo i componenti necessari da react-native
import { StyleSheet, Text, View } from "react-native";

// Questa è la schermata principale della nostra app
export default function IndexScreen() {
  return (
    // 4. Modifica il componente Root <View>
    // Applichiamo lo stile 'styles.container' al View principale
    <View style={styles.container}>
      
      {/* 3. Aggiorna app/index.tsx */}
      {/* Questo è il componente <Text> principale */}
      <Text>Schermata di ingresso - Fantastico</Text>

      {/* 5. Aggiungere ulteriori componenti di testo */}
      {/* Inseriamo un nuovo View per contenere gli altri testi */}
      <View>
        <Text style={styles.largeText}>Typescript is great if you practice more</Text>
        <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
        <Text style={styles.smallText}>ALX is awesome</Text>
      </View>

    </View>
  );
}

// 5. Definisci i tuoi stili
// Qui creiamo tutti gli stili che abbiamo usato sopra
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#90caf9",
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"],
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "right",
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
  },
});
