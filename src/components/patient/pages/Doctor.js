import React from 'react';
import { useNavigation } from '@react-navigation/native';
// import { blogData } from '../../data';
import PatientBlog from './component/Blog';
// import { Link } from 'expo-router';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import style_patient_home from '../../../styles/shared/style_patient_home';

const PatientDoctor = () => {

    const navigation = useNavigation();

  return (

 

    <SafeAreaView>

       <ScrollView showsVerticalScrollIndicator={false}>


            <View style={style_patient_home.ctaContainer}>


                <View style={style_patient_home.cta}>

                    <View style={style_patient_home.userNameContainer}>
                    
                        <Text style={style_patient_home.patientName}>Welcome Wisdom! 👋</Text>
        
                    </View>

                    <View style={style_patient_home.patientBtnWrapper}>

                        
     
                        
                        <View style={style_patient_home.patientCtaBtn}>
                            <TouchableOpacity onPress={()=> navigation.navigate("Doctor")}><Text style={style_patient_home.consult_doctor}>Consult a doctor</Text></TouchableOpacity>
                        </View>

                    </View>

                </View>

            </View>
    

   

        </ScrollView>

    </SafeAreaView>
  );
};

export default PatientDoctor;
