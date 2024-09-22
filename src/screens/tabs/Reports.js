import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style_dashboard from '../../styles/style_dashboard';


const Reports = () => {
  
  const navigation = useNavigation();

  return (
    <View style={style_dashboard.container}>


        <View id="logout-container">
              <TouchableOpacity
              onPress={()=>navigation.navigate("Welcome")}
              >
                <Text> Report Page</Text>
              </TouchableOpacity>
        </View>


        <View>


        </View>


    </View>
  )
}

export default Reports 