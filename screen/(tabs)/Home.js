import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style_dashboard from '../../styles/style_dashboard';
import PatientScreen from '../../components/patient/Home'; 


const Home = () => {
  
  const navigation = useNavigation();

  return (
    <View>


        <View id="logout-container">
              <TouchableOpacity
              onPress={()=>navigation.navigate("Welcome")}
              >
                <Text> Patient Dashboard </Text>
               
              </TouchableOpacity>
        </View>


        <View style={style_dashboard.container}>

          <PatientScreen/>

        </View>


    </View>
  )
}

export default Home