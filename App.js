import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome, Dashboard } from "./screen";
// import Layout from "./src/app/_layout";

const Stack = createNativeStackNavigator();

export default function App() {
  
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
          headerShown: false,
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




      {/* <Stack.Screen
        name="_layout"
        component={Layout}
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
        /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );

  
}