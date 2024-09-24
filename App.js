import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome, Dashboard } from "./src";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import DoctorAppointment from './src/DoctorAppointment';

const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    'regular': require('./assets/fonts/NunitoSans_10pt-Regular.ttf'),
    'bold': require('./assets/fonts/NunitoSans_10pt-Bold.ttf'),

  });

  const onLayoutRootView = useCallback(async() =>{
    if (!fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#98B3E1",
              shdowColor: "#000",
              elevation: 25,
            }
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: true
          }}
        />


          <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: true,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#98B3E1",
              shdowColor: "#000",
              elevation: 25,
            }
            }}
          />

          <Stack.Screen
            name='doctorAppointment'
            component = {DoctorAppointment}
            options={{
              headerShown: false
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );

  
}