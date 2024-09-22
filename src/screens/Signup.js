import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import React, { useState } from 'react';
import { Image, Pressable, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import DropdownComponent from "../components/shared/signup/Dropdown";
import Button from '../components/Button';
import COLORS from '../utils/colors';
import style_account_entry from '../styles/style_account_entry';
import User from "../assets/icons/user-1.svg";
import Email from "../assets/icons/email.svg";
import Groups from "../assets/icons/groups-1.svg";
import Password from "../assets/icons/password.svg";
import Phone from "../assets/icons/telephone-1.svg"

const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    return (


        <ScrollView>

            <View style={style_account_entry.container1}>

            <View style={style_account_entry.textInputContainer}>

                <View style={style_account_entry.inputIconContainer}>
                    <User/>
                </View>

                <View style={style_account_entry.textInputTypeContainer}>

                    <TextInput
                        placeholder='Enter your Full Name'
                        placeholderTextColor={COLORS.black}
                        keyboardType='email-address'
                        style={style_account_entry.textInputType}
                    />

                </View>

            </View>

            <View style={style_account_entry.textInputContainer}>

                <View style={style_account_entry.inputIconContainer}>
                    <Phone/>
                </View>

                <View style={[style_account_entry.textInputTypeContainer, style_account_entry.textInputDisplay ]}>

                <TextInput
                    placeholder='+234 Enter your phone number'
                    placeholderTextColor={COLORS.black}
                    keyboardType='numeric'
                    style={style_account_entry.textInputType}
                />

                {/* <TextInput
                    placeholder='Enter your phone number'
                    placeholderTextColor={COLORS.black}
                    keyboardType='numeric'
                    style={style_account_entry.textInputType}
                /> */}

                </View>

            </View>



            <View style={style_account_entry.textInputContainer}>

                <View style={style_account_entry.inputIconContainer}>
                    <Email/>
                </View>

                <View style={style_account_entry.textInputTypeContainer}>

                    <TextInput
                        placeholder='Enter your email'
                        placeholderTextColor={COLORS.black}
                        keyboardType='email-address'
                        style={style_account_entry.textInputType}
                    />

                </View>

            </View>

            <DropdownComponent/>

            {/* <View style={style_account_entry.textInputContainer}>

                <View style={style_account_entry.inputIconContainer}>
                    <Groups/>
                </View>

                <View style={style_account_entry.textInputTypeContainer}>

                    <TextInput
                        placeholder='Choose your category'
                        placeholderTextColor={COLORS.black}
                        
                        style={style_account_entry.textInputType}
                    />

                </View>

            </View> */}

            <View style={style_account_entry.textInputContainer}>

                <View style={style_account_entry.inputIconContainer}>
                    <Password/>
                </View>

                <View style={style_account_entry.textInputTypeContainer}>

                    <TextInput
                        placeholder='Enter your password'
                        placeholderTextColor={COLORS.black}
                        // secureTextEntry={isPasswordShown}
                        style={style_account_entry.textInputType}
                        textContentType='password'
                    />
                    <TouchableOpacity
                        onPress={() =>setIsPasswordShown(!isPasswordShown)}
                        style={style_account_entry.passwordbtn}
                    >
                    {
                    isPasswordShown == false ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
                    ) : (
                    <Ionicons name="eye" size={24} color={COLORS.black} />
                    )
                    }

                    </TouchableOpacity>

                </View>

            </View>

            <View style={style_account_entry.textInputContainer}>

                <View style={style_account_entry.inputIconContainer}>
                    <Password/>
                </View>

                <View style={style_account_entry.textInputTypeContainer}>

                    <TextInput
                        placeholder='Confirm your password'
                        placeholderTextColor={COLORS.black}
                        keyboardType='email-address'
                        style={style_account_entry.textInputType}
                    />
                    <TouchableOpacity
                        onPress={() =>setIsPasswordShown(!isPasswordShown)}
                        style={style_account_entry.passwordbtn}
                    >
                    {
                    isPasswordShown == false ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
                    ) : (
                    <Ionicons name="eye" size={24} color={COLORS.black} />
                    )
                    }

                    </TouchableOpacity>

                </View>

            </View>


            {/* <View style={style_account_entry.passwordcontainer}>

            <View style={style_account_entry.mobile_number_inputcontainer}>
                <TextInput
                    placeholder='+91'
                    placeholderTextColor={COLORS.black}
                    keyboardType='numeric'
                    style={style_account_entry.mobile_number_code}
                />

                <TextInput
                    placeholder='Enter your phone number'
                    placeholderTextColor={COLORS.black}
                    keyboardType='numeric'
                    style={style_account_entry.mobile_number_}
                />
            </View>
            </View>

            <View style={style_account_entry.emailcontainer}>

                <View style={style_account_entry.emailinputcontainer}>
                    <TextInput
                        placeholder='Enter your email address'
                        placeholderTextColor={COLORS.black}
                        keyboardType='email-address'
                        style={style_account_entry.emailinputtype}
                    />
                </View>
            </View>

            <View style={style_account_entry.emailcontainer}>

            <View style={style_account_entry.emailinputcontainer}>
                <TextInput
                    placeholder='Choose your Category'
                    placeholderTextColor={COLORS.black}
                    keyboardType='email-address'
                    style={style_account_entry.emailinputtype}
                />
            </View>
            </View>

            */}

            <View style={style_account_entry.checkboxContainer}>
                <Checkbox
                    style={style_account_entry.checkBox}
                    value={isChecked}
                    onValueChange={setIsChecked}
                    color={isChecked ? COLORS.primary : undefined}
                />

                <Text>
            I agree to the healthcare Terms of Service and Privacy Policy
                </Text>
            </View> 

            <Button
                title="Sign Up"
                filled
                style={style_account_entry.loginBtn}
            />

            <View style={style_account_entry.otheroptions}>
                <View
                    style={style_account_entry.otheroptionsContainer}
                />
                <Text style={style_account_entry.f_14}>Or Sign up with</Text>
                <View
                    style={style_account_entry.otheroptions2}
                />
            </View>

            <View style={style_account_entry.btnContainer}>
                <TouchableOpacity
                    onPress={() => console.log("Pressed")}
                    style={style_account_entry.social_login}
                >
                    <Image
                        source={require("../assets/facebook.png")}
                        style={style_account_entry.social_style}
                        resizeMode='contain'
                    />

                    <Text>Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => console.log("Pressed")}
                    style={style_account_entry.social_login}
                >
                    <Image
                        source={require("../assets/google.png")}
                        style={style_account_entry.social_style}
                        resizeMode='contain'
                    />

                    <Text>Google</Text>
                </TouchableOpacity>
                
            </View>

            <View style={style_account_entry.register_container}>
                <Text style={style_account_entry.register_text_container}>
                    Already have an account                        
                </Text>
                <Pressable
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={style_account_entry.register_text}>Sign in</Text>
                </Pressable>
            </View>
            </View>

        </ScrollView>


    )
}




export default Signup