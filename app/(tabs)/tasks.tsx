import { IconSymbol } from "@/components/ui/IconSymbol"
import { Text, View } from "react-native"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TaskScreen() {
return (
    <View>
          <Text>Tasks</Text>
          <FontAwesome6 name="list-check" size={24} color="black" />

    </View>
)  
}