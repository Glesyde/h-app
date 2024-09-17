
import style_welcome from '../styles/style_welcome';
import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';
import Medicine1 from '../assets/icons/onboarding/medicine3.svg';
import Medicine2 from '../assets/icons/onboarding/medicine4.svg';
import Medicine3 from '../assets/icons/onboarding/medicine6.svg';
import Medicine4 from '../assets/icons/onboarding/medicine1.svg';
import AppLogo from '../assets/icons/onboarding/app_logo.svg';

const Welcome = ({ navigation }) => {

    return (
        <LinearGradient style={style_welcome.container}colors={[COLORS.secondary, COLORS.primary]}>

            <View className="bg-red-600" style={style_welcome.contain1}>

                <View>

                    <Medicine1 style={style_welcome.pictureA}/>
                    <Medicine2 style={style_welcome.pictureB}/>
                    <Medicine3 style={style_welcome.pictureC}/>
                    <Medicine4 style={style_welcome.pictureD}/>
                    
                    {/* <Image
                        source={require("../assets/icons/onboarding/medicine3.svg")}
                        style={style_welcome.pictureA}
                    /> */}

                    {/* <Image
                        source={require("../assets/icons/onboarding/medicine4.svg")}
                        style={style_welcome.pictureB}
                    />

                    <Image
                        source={require("../assets/icons/onboarding/medicine6.svg")}
                        style={style_welcome.pictureC}
                    />

                    <Image
                        source={require("../assets/icons/onboarding/medicine1.svg")}
                        style={style_welcome.pictureD}
                    /> */}
                </View>

                {/* content  */}

                <View style={style_welcome.content}>



                    <View style={[style_welcome.app_logo_container, style_welcome.app_container_alignment] }>
                    
                        {/* <Image
                            source={require("../assets/icons/onboarding/app_logo.svg")}
                        /> */}

                        <AppLogo/>

                    </View>

                    
                    <View style={style_welcome.app_container_alignment}>
                        
                        <Text style={[style_welcome.welcomeText1, style_welcome.text_alignment]}>Let's Get Started</Text>
                        <Text style={[style_welcome.welcomeText2, style_welcome.text_alignment]}>Stay Healthy and fit</Text>
                        
                    </View>

                    
                    <View style={style_welcome.btn_container}>
                        
                        <Button
                            title="Login"
                            onPress={() => navigation.navigate("Login")}
                            style={style_welcome.login_button}
                        />

                        
                        <Button
                            title="Sign Up"
                            onPress={() => navigation.navigate("Signup")}
                            style={style_welcome.signup_button}
                        />
                    </View>



                </View>


            </View>



        </LinearGradient>
    )
}

export default Welcome