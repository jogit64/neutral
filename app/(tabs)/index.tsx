import { Image, StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import BoutonLancer from "../../components/BoutonLancer";

export default function TabOneScreen() {
  const handleClick = () => {
    console.log("Bouton cliqué");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>N·E·U·T·R·A·L·I·Z·E</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Image
        source={require("../../assets/images/profil.png")}
        style={styles.image}
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <BoutonLancer onPress={handleClick} label="Memoire" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "30%",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
