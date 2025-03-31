import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome6 } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>

      <Tabs.Screen
        name="tasks"
        options={{
          title: 'Tasks',
          tabBarIcon: () => <FontAwesome6 name="list-check" size={24} color="black" />
          ,
        }}
      />
      <Tabs.Screen
        name="rewards"
        options={{
          title: 'Rewards',
          tabBarIcon: () => <FontAwesome6 name="check" size={24} color="black" />
          ,
        }}
        
      />
      <Tabs.Screen
        name="punishments"
        options={{
          title: 'Punishments',
          tabBarIcon: () => <FontAwesome6 name="x" size={24} color="black" />
          ,
        }}
      />
      <Tabs.Screen
        name="rules"
        options={{
          title: 'Rules',
          tabBarIcon: () => <FontAwesome6 name="list-ol" size={24} color="black" />
          ,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: () => <FontAwesome6 name="message" size={24} color="black" />
          ,
        }}
      />
    </Tabs>
  );
}
