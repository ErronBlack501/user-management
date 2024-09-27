import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';

// Définition de l'interface pour l'utilisateur
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  isActive: boolean;
}

// Données des utilisateurs
const users: User[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    age: 28,
    isActive: true,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    age: 34,
    isActive: true,
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@example.com",
    age: 45,
    isActive: false,
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@example.com",
    age: 22,
    isActive: true,
  },
  {
    id: 5,
    firstName: "Chris",
    lastName: "Johnson",
    email: "chris.johnson@example.com",
    age: 31,
    isActive: false,
  },
];

const Index: React.FC = () => {
  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.userName}>
        {item.firstName} {item.lastName}
      </Text>
      <Text>Email: {item.email}</Text>
      <Text>Age: {item.age}</Text>
      <Text>Status: {item.isActive ? 'Active' : 'Inactive'}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  itemContainer: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 3,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Index;
