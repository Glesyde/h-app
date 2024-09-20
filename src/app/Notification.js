import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style_dashboard from '../../styles/style_dashboard';


const Notification = () => {
  
  const navigation = useNavigation();

  return (
    <View>


        <View id="logout-container">
              <TouchableOpacity
              onPress={()=>navigation.navigate("Welcome")}
              >
                <Text> Notification Page</Text>
              </TouchableOpacity>
        </View>


        <View style={style_dashboard.container}>


        </View>


    </View>
  )
}

export default Notification 