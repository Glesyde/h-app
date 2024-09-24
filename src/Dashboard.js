import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style_dashboard from '../styles/style_dashboard';

const Dashboard = () => {
  
  const navigation = useNavigation();

  return (
    <View>


        <View id="logout-container">
              <TouchableOpacity
              onPress={()=>navigation.navigate("Welcome")}
              >
                <Text> Patient Dashboard you can click here to Logout</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={()=> navigation.navigate('doctorAppointment')}
              >
                <Text style={{fontSize:40}}>Appoinment</Text>
              </TouchableOpacity>
        </View>


        <View style={style_dashboard.container}>


        </View>


    </View>
  )
}

export default Dashboard
