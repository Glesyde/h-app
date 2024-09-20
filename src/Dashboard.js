// import { Text, View, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import style_dashboard from '../styles/style_dashboard';


// const Dashboard = () => {
  
//   const navigation = useNavigation();

//   return (
//     <View>


//         <View id="logout-container">
//               <TouchableOpacity
//               onPress={()=>navigation.navigate("Welcome")}
//               >
//                 <Text> Patient Dashboard you can click here to Logout</Text>
//               </TouchableOpacity>
//         </View>


//         <View style={style_dashboard.container}>


//         </View>


//     </View>
//   )
// }

// export default Dashboard





import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Reports, Notification, Profile} from './app';
import { Entypo } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: true,
  headerShown: false,
  tabBarStyle: {
    position: "",
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 50,
    // background: "gold",
    // borderColor: "gold",
    // borderBottomWidth: 2,
    // borderTopWidth: 2,
    // borderRightWidth: 2,
    // borderLeftWidth: 2,
  }
}

const Dashboard = () => {

    const navigation = useNavigation();

  return (




            <Tab.Navigator screenOptions={screenOptions}>

              <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                  tabBarIcon:({focused})=>{
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                      <Entypo name="home" size={34} color={focused ? "#162478d" : "black"}/>
                      <Text style={{fontSize: 32, color:"black"}}>Home</Text>
                    </View>
                  }
              }}/>


              <Tab.Screen 
                name="Reports" 
                component={Reports}
                options={{
                  tabBarIcon:({focused})=>{
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                      <Entypo name="home" size={34} color={focused ? "#162478d" : "black"}/>
                      <Text style={{fontSize: 32, color:"black"}}>Reports</Text>
                    </View>
                  }
              }}/>


              <Tab.Screen 
                name="Notification" 
                component={Notification}
                options={{
                  tabBarIcon:({focused})=>{
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                      <Entypo name="home" size={34} color={focused ? "#162478d" : "black"}/>
                      <Text style={{fontSize: 12, color:"black"}}>Notification</Text>
                    </View>
                  }
              }}/>


              <Tab.Screen 
                name="Profile" 
                component={Profile}
                options={{
                  tabBarIcon:({focused})=>{
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                      <Entypo name="home" size={34} color={focused ? "#162478d" : "black"}/>
                      <Text style={{fontSize: 12, color:"black"}}>Profile</Text>
                    </View>
                  }
              }}/>




            </Tab.Navigator>

    




  );
}

export default Dashboard



// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// const Tab = createMaterialBottomTabNavigator();

// const Dashboard = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// export default Dashboard