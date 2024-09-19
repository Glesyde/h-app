import { StyleSheet } from "react-native";

const style_app_title=StyleSheet.create({


    text_container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        borderColor: "transparent",
        padding: 20
    },

    leftArrow: {
        borderColor: "transparent",
        
    },

    text: {
        width: "100%",
        borderColor: "transparent",
        margin:"auto",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold"
    },

    arrowBorder: {
        width: "10%",
    },

    textBorder: {
        width: "80%"
    }



})

export default style_app_title;