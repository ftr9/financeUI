import { Home, Particular } from './Screen';
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const stack = createNativeStackNavigator();


export default function App() {


  const [isFontLoaded] = useFonts({
    "Lato-Light": require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Regular': require("./assets/fonts/Lato-Regular.ttf")
  })

  if (!isFontLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <View style={{ flex: 1, backgroundColor: '#2A2A2A' }}>
          <stack.Navigator>
            <stack.Screen name='Home' component={Home} options={{
              headerShown: false
            }}></stack.Screen>
            <stack.Screen name='Particular' component={Particular} options={{
              headerShown: false
            }}></stack.Screen>
          </stack.Navigator>
        </View>
      </NavigationContainer>

    );
  }
}

