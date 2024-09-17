import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../components/Button';
import COLORS from '../constants/colors';
import style_signup from '../styles/style_signup';

const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    return (
        <SafeAreaView style={style_signup.container}>

            <View style={style_signup.container1}>
                <View style={style_signup.welcometextcontainer}>
                    <Text style={style_signup.welcometext}>
                        Create Account
                    </Text>

                    <Text style={style_signup.welcometext1}>Connect with your friend today!</Text>
                </View>

                <View style={style_signup.emailcontainer}>
                    <Text style={style_signup.emaillabel}>Email address</Text>

                    <View style={style_signup.emailinputcontainer}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={style_signup.emailinputtype}
                        />
                    </View>
                </View>

                <View style={style_signup.passwordcontainer}>
                    <Text style={style_signup.passwordlabel}>Mobile Number</Text>

                    <View style={style_signup.mobile_number_inputcontainer}>
                        <TextInput
                            placeholder='+91'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={style_signup.mobile_number_code}
                        />

                        <TextInput
                            placeholder='Enter your phone number'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={style_signup.mobile_number_}
                        />
                    </View>
                </View>

                <View style={style_signup.passwordcontainer}>
                    <Text style={style_signup.passwordlabel}>Password</Text>

                    <View style={style_signup.passwordinputcontainer}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={style_signup.passwordinputtype}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={style_signup.passwordbtn}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={style_signup.checkboxContainer}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />

                    <Text>I aggree to the terms and conditions</Text>
                </View>

                <Button
                    title="Sign Up"
                    filled
                    style={style_signup.loginBtn}
                />

                <View style={style_signup.otheroptions}>
                    <View
                        style={style_signup.otheroptionsContainer}
                    />
                    <Text style={style_signup.f_14}>Or Sign up with</Text>
                    <View
                        style={style_signup.otheroptions2}
                    />
                </View>

                <View style={style_signup.btnContainer}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={style_signup.social_login}
                    >
                        <Image
                            source={require("../assets/facebook.png")}
                            style={style_signup.social_style}
                            resizeMode='contain'
                        />

                        <Text>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={style_signup.social_login}
                    >
                        <Image
                            source={require("../assets/google.png")}
                            style={style_signup.social_login}
                            resizeMode='contain'
                        />

                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={style_signup.register_container}>
                    <Text style={style_signup.register_text_container}>Already have an account</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={style_signup.register_text}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({



})



export default Signup