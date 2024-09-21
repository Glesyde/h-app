
import style_welcome from '../styles/style_welcome';
import { View, Text, TouchableOpacity, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import LoginButton from '../components/Button';
import SignupButton from '../components/Button-signup';
// import Medicine1 from '../assets/icons/onboarding/medicine3.svg';
// import Medicine2 from '../assets/icons/onboarding/medicine4.svg';
// import Medicine3 from '../assets/icons/onboarding/medicine6.svg';
// import Medicine4 from '../assets/icons/onboarding/medicine1.svg';
import AppLogo from '../assets/icons/onboarding/app_logo.svg';

const Welcome = ({ navigation }) => {

    return (
        <LinearGradient style={style_welcome.container}colors={[COLORS.secondary, COLORS.primary]}>

            <View className="bg-transparent-600" style={style_welcome.contain1}>

                <View>

                    {/* <Medicine1 style={style_welcome.pictureA}/>
                    <Medicine2 style={style_welcome.pictureB}/>
                    <Medicine3 style={style_welcome.pictureC}/>
                    <Medicine4 style={style_welcome.pictureD}/> */}
                    
                 </View>

                {/* content  */}

                <View style={style_welcome.content}>



                    <View style={[style_welcome.app_container_alignment, style_welcome.app_logo_container] }>
                    
                        <AppLogo/>

                    </View>

                    
                    <View style={style_welcome.app_container_alignment}>
                        
                        <Text style={[style_welcome.welcomeText1, style_welcome.text_alignment]}>Let's get started!</Text>
                        <Text style={[style_welcome.welcomeText2, style_welcome.text_alignment]}>Create an account or  Login to Stay Healthy and fit</Text>
                        
                    </View>

                    
                    <View style={style_welcome.btn_container}>
                        
                        <LoginButton
                            title="Login"
                            onPress={() => navigation.navigate("Login")}
                        />

                      
                         <SignupButton
                            title="Sign Up"
                            onPress={() => navigation.navigate("Signup")}
                        />


                    </View>



                </View>


            </View>



        </LinearGradient>
    )
}

export default Welcome