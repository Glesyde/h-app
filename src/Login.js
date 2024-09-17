import { View, Text, Image , Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import style_login from '../styles/style_login';

const Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    
    return (

        <SafeAreaView style={style_login.container}>

            <View style={style_login.container1}>

                <View style={style_login.welcometextcontainer}>
                    <Text style={style_login.welcometext}>
                        Hi Welcome Back ! 👋
                    </Text>

                    <Text style={style_login.welcometext2}>Hello again you have been missed!</Text>
                </View>

                <View style={style_login.emailcontainer}>
                    <Text style={style_login.emaillabel}>Email address</Text>

                    <View style={style_login.emailinputcontainer}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={style_login.emailinputtype}
                        />
                    </View>
                </View>

                <View style={style_login.passwordcontainer}>
                    <Text style={style_login.passwordlabel}>Password</Text>

                    <View style={style_login.passwordinputcontainer}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={style_login.passwordinputtype}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={style_login.passwordbtn}
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

                <View style={style_login.checkboxContainer}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />

                    <Text>Remenber Me</Text>
                </View>

                <Button
                    title="Login"
                    filled
                    style={style_login.loginBtn}
                />

                <View style={style_login.otheroptions}>
                    <View
                        style={style_login.otheroptionsContainer}
                    />
                    <Text style={style_login.login_text}>Or Login with</Text>
                    <View
                        style={style_login.otheroptions2}
                    />
                </View>

                <View style={style_login.btnContainer}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={style_login.social_login}
                    >
                        <Image
                            source={require("../assets/facebook.png")}
                            style={style_login.social_style}
                            resizeMode='contain'
                        />

                        <Text>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={style_login.social_login}
                    >
                        <Image
                            source={require("../assets/google.png")}
                            style={style_login.social_style}
                            resizeMode='contain'
                        />

                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={style_login.register_container}>
                    <Text style={style_login.register_text_container}>Don't have an account ? </Text>
                    <Pressable
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text style={style_login.register_text}>Register</Text>
                    </Pressable>
                </View>

            </View>

        </SafeAreaView>
    )
}

export default Login