import { Home, Particular } from './Screen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Home' component={Home} options={{
          headerShown: false
        }}></stack.Screen>
        <stack.Screen name='Particular' component={Particular} options={{
          headerShown: false
        }}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>

  );
}

