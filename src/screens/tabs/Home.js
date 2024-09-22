import { View } from 'react-native';
import style_dashboard from '../../styles/style_dashboard';
import PatientScreen from '../../components/patient/Home'; 
// import Apptitle from '../../components/Apptitle';

const Home = () => {
  
  return (

        <View style={style_dashboard.container}>

          <PatientScreen/>

        </View>

  )
}

export default Home