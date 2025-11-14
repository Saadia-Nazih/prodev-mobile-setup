import { StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Questo è il testo richiesto al Passaggio 3 */}
      <Text>Entry Screen - Awesome</Text>

      {/* Questo è il gruppo di testo richiesto al Passaggio 4 */}
      <View>
        <Text style={styles.largeText}>Typescript is great if you practice more</Text>
        <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
        <Text style={styles.smallText}>ALX is awesome</Text>
      </View>
    </View>
  );
}

// Questo è l'oggetto StyleSheet richiesto al Passaggio 5
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#90caf9",
    // Per centrare il contenuto (bonus, non richiesto ma utile!)
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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