import { Slot } from "expo-router";
import { useQuickActionRouting } from 'expo-quick-actions/router'

export default function AppLayout() {
  useQuickActionRouting()
  return (
    <Slot />
  );
}