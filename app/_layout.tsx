import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerTitleAlign: "center", // Centre le titre horizontalement
          headerStyle: {
            backgroundColor: "#325ca8", // Définit la couleur de fond du header
          },
          headerTintColor: "#fff", // Change la couleur du texte et des icônes dans le header
        }}
      />
    </Stack>
  );
}
