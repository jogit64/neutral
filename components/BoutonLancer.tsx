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
      style={{ backgroundColor: "blue", padding: 10, borderRadius: 5 }}
    >
      <Text style={{ color: "white", textAlign: "center" }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default BoutonLancer;
