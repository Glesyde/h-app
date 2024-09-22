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






// import { useNavigation,View  } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Reports, Notification, Profile} from './tabs';
// import { Entypo } from '@expo/vector-icons';
// import Report from "../assets/icons/reports.svg"
// import style_dashboard from '../styles/style_dashboard';

// Import Active Icon Components
import HomeActive from "../assets/icons/tab/home_active.svg";
import ExploreActive from "../assets/icons/tab/explore_active.svg";
import FavActive from "../assets/icons/tab/fav_active.svg";
import ProfileActive from "../assets/icons/tab/profile_active.svg";

// Import Non-Active Icon Components
import HomeInactive from "../assets/icons/tab/home.svg";
import Explore from "../assets/icons/tab/explore.svg";
import Fav from "../assets/icons/tab/fav.svg";
import ProfileInactive from "../assets/icons/tab/profile.svg";


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(name,color,isActive) {
  if (isActive) {
    switch (name) {
      case "home":
        return <HomeActive width={24} height={24} />;
      case "explore":
        return <ExploreActive width={24} height={24} />;
      case "favourites":
        return <FavActive width={24} height={24} />;
      case "profile":
        return <ProfileActive width={24} height={24} />;
      default:
        return null;
    }
  } else {
    switch (name) {
      case "home":
        return <HomeInactive width={24} height={24} />;
      case "explore":
        return <Explore width={24} height={24} />;
      case "favourites":
        return <Fav width={24} height={24} />;
      case "profile":
        return <ProfileInactive width={24} height={24} />;
      default:
        return null;
    }
  }
}




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
    height: 80,
    // background: "gold",
    // borderColor: "gold",
    // borderBottomWidth: 2,
    // borderTopWidth: 2,
    // borderRightWidth: 2,
    // borderLeftWidth: 2,
  }
}

const Dashboard = () => {


  return (




            <Tab.Navigator 
            
            
            screenOptions={screenOptions}

            // screenOptions={{
            //   tabBarActiveTintColor: "#a01cfe",
            //   tabBarStyle: {
            //     backgroundColor: "white",
            //     height: 80,
            //     marginHorizontal: -10,
            //     borderTopWidth: 2,
            //     borderTopColor: "white",
            //   },

            // }}
            
            
            
            >
              

              <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                  tabBarLabelStyle: { fontSize: 18 }, // Custom font size for Home tab

                  tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name='home' color={color} isActive={focused} />
                  ),



                }}
              />




              <Tab.Screen 
                name="Reports" 
                component={Reports}
                options={{
                  tabBarLabelStyle: { fontSize: 18 }, // Custom font size for Home tab

                  tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name='home' color={color} isActive={focused} />
                  ),



                }}
              />





                <Tab.Screen 
                name="Notification" 
                component={Notification}
                options={{
                  tabBarLabelStyle: { fontSize: 18 }, // Custom font size for Home tab

                  tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name='home' color={color} isActive={focused} />
                  ),



                }}
              />




                <Tab.Screen 
                name="Profile" 
                component={Profile}
                options={{
                  tabBarLabelStyle: { fontSize: 18 }, // Custom font size for Home tab

                  tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name='home' color={color} isActive={focused} />
                  ),



                }}
              />






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