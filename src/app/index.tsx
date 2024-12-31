import { useEffect } from 'react';
import { View, Text, Platform} from 'react-native';
import * as QuickActions from 'expo-quick-actions';
import { useQuickActionCallback } from 'expo-quick-actions/hooks'

export default function Home() {
  useQuickActionCallback((action) => {
    console.log(action);
  })

  useEffect(() => {
    QuickActions.setItems([
      {
        id: "1",
        title: "Ajuda",
        subtitle: "Posso te ajudar",
        icon: Platform.OS === "ios" ? "symbol:person.crop.circle.badge.questionmark" 
        : "help_icon",
        params: {
          href: "/help",
        }
      },
    ])
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 32 }}>Home</Text>
    </View>
  );
}