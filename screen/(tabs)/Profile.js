import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style_dashboard from '../../styles/style_dashboard';
import ProfileScreen from '../../components/patient/Profile';


const Profile = () => {
  
  const navigation = useNavigation();

  return (
    <View>


        <View id="logout-container">
              <TouchableOpacity
              onPress={()=>navigation.navigate("Welcome")}
              >
                <Text> Profile Page</Text>
              </TouchableOpacity>
        </View>


        <View style={style_dashboard.container}>

        <ProfileScreen/>
        </View>


    </View>
  )
}

export default Profile 