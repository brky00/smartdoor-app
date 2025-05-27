import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const IP = "http://192.168.10.76:5000"; // ←  Pi-IP

export default function HomeScreen() {
  const sendCommand = async (path: string) => {
    try {
      const res = await fetch(`${IP}/${path}`);
      const text = await res.text();
      Alert.alert("Svar", text);
    } catch (err) {
      Alert.alert("Feil", "Kunne ikke koble til Raspberry Pi");
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔐 Smart Dørlås</Text>
      <Button title="🔒 Lås" onPress={() => sendCommand("lock")} />
      <Button title="🔓 Lås opp" onPress={() => sendCommand("unlock")} />
      <Button title="🟢 Start overvåkning" onPress={() => sendCommand("start")} />
      <Button title="🔴 Stopp overvåkning" onPress={() => sendCommand("stop")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
});
