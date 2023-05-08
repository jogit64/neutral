import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface Props {
  onPress: () => void;
  label: string;
}

const BoutonLancer: React.FC<Props> = ({ onPress, label }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 50, // Augmentez le borderRadius pour un aspect plus arrondi
        width: 100, // Définissez la largeur et la hauteur pour un bouton rond
        height: 100,
        justifyContent: "center", // Centrez le texte verticalement et horizontalement
        alignItems: "center",
        elevation: 5, // Ajoutez une ombre sur Android
        shadowColor: "#000", // Ajoutez une ombre sur iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }}
    >
      <Text style={{ color: "white", textAlign: "center" }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default BoutonLancer;
