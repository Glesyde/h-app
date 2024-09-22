import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import style_welcome from '../styles/style_welcome';

const LoginButton = (props) => {
    // const filledBgColor = props.color || COLORS.primary;
    // const outlinedColor = COLORS.white;
    // const bgColor = props.filled ? filledBgColor : outlinedColor;
    // const textColor = props.filled ? COLORS.white : COLORS.primary;

    return (
        <TouchableOpacity
            style={style_welcome.login_button}
            onPress={props.onPress}
        >
            <Text style={style_welcome.login_button_text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

// const styles = StyleSheet.create({
//     button: {
//         paddingBottom: 16,
//         paddingVertical: 10,
//         borderColor: COLORS.primary,
//         borderWidth: 2,
//         borderRadius: 12,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// })
export default LoginButton