import React from 'react';
import Telescope from '../../assets/icons/telescope.svg';
import Doctor from '../../assets/icons/doctor.svg';
import Pharmacy from '../../assets/icons/pharmacy.svg';
import Ambulance from '../../assets/icons/ambulance.svg';
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
import style_patient_home from '../../styles/shared/style_patient_home';
import { blogData } from '../../data';

const PatientScreen = () => {


  return (

 

    <SafeAreaView>

       <ScrollView showsVerticalScrollIndicator={false}>


            <View style={style_patient_home.ctaContainer}>

                <View style={[style_patient_home.patientImgcontainer, style_patient_home.cta]}>

                    <Image
                    style={style_patient_home.patientImg}
                    source={require('../../assets/images/users/user-8.jpg')}
                    />

                </View>

                <View style={style_patient_home.cta}>

                    <View style={style_patient_home.userNameContainer}>
                    
                        <Text style={style_patient_home.patientName}>Welcome Wisdom 👋</Text>
        
                    </View>

                    <View style={style_patient_home.patientBtnWrapper}>

                        
                        <View style={style_patient_home.patientCtaIconContainer}>
                            <Telescope style={style_patient_home.patientCtaIcon}/>
                        </View>
                        
                        <View style={style_patient_home.patientCtaBtn}>
                            <TouchableOpacity><Text style={style_patient_home.consult_doctor}>Consult a doctor</Text></TouchableOpacity>
                        </View>

                    </View>

                </View>

            </View>
    


            <View style={style_patient_home.moduleContainer}>


                <View style={style_patient_home.patient_module}>

                    <View style={style_patient_home.patient_module_option}>

                        <TouchableOpacity>
                            <View style={style_patient_home.patient_module_option_icon_container}>
                                <Doctor style={style_patient_home.patient_module_icon}/>
                            </View>
                            
                            <View style={style_patient_home.patient_module_text}><Text>Instant Consult</Text>
                            </View>

                        </TouchableOpacity>
                    
                    </View>

                    
                    <View style={style_patient_home.patient_module_option}>

                        <TouchableOpacity>
                            <View style={style_patient_home.patient_module_option_icon_container}>
                                <Pharmacy style={style_patient_home.patient_module_icon}/>
                            </View>
                            
                            <View style={style_patient_home.patient_module_text}><Text>Appointment</Text>
                            </View>

                        </TouchableOpacity>
                    
                    </View>


                    
                    <View style={style_patient_home.patient_module_option}>

                        <TouchableOpacity>
                            <View style={style_patient_home.patient_module_option_icon_container}>
                                <Ambulance style={style_patient_home.patient_module_icon}/>
                            </View>
                            
                            <View style={style_patient_home.patient_module_text}><Text>Feedback</Text>
                            </View>

                        </TouchableOpacity>
                    
                    </View>

                </View>


            </View>


            <View>
                {/* {blogData.map((blog) => (
                    <PatientBlog key={blog.id} id={blog.id} blog={blog} />
                ))} */}

                <PatientBlog/>
            </View>
    

        </ScrollView>

    </SafeAreaView>
  );
};

export default PatientScreen;
