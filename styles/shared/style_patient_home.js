import { StyleSheet } from "react-native";


const style_patient_home = StyleSheet.create({
 
    ctaContainer: {
        display: "flex",
        flexDirection:"row",
        marginBottom: 20
    },

    patientImgcontainer: {
        marginHorizontal: 20,
    },  
  
    patientNameContainer: {
      alignItems: 'flex-start', 
    },
  
  
    patientImg: {
      height: 83,
      width: 83,
      borderRadius: 80,
    },
  
    patientName: {
      fontSize: 18,
      fontWeight: 'bolder',
      marginTop: 10,
      marginBottom: 10,
      marginLeft:10,
      letterSpacing: -0.40799999237060547,
      lineHeight: 22,
    },

    patientBtnWrapper: {
      width: '90%',
      display: 'flex',
      borderRadius: 24,
      backgroundColor: '#407CE2',
      display: 'flex',
      flexDirection: "row",
      paddingHorizontal: 12,
      paddingVertical: 6,
      margin: 'auto',
    },
  
    patientCtaIconContainer: {
        width: '30%',
    },

    patientCtaIcon: {
        margin: "auto"
    },

    patientCtaBtn: {
      color: 'white',
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 13,
      width: '80%',
      textAlign: "left"
    },

    consult_doctor:{
        color: "white",
    },


    moduleContainer: {
        borderColor:"red",
        borderWidth: 10,
        width: 450,
        height: 108,
        borderTopRightRadius: 28,
        borderTopLeftRadius: 28,
        margin: 'auto',
        paddingHorizontal: 10,
        backgroundColor:"#FFFFFF",
    },

    patient_module: {
        marginVertical: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around"
    },

    patient_module_option: {
        width: 110,
        height: 70,

    },

    patient_module_option_icon_container: {
        backgroundColor: '#407CE2',
        borderRadius: 80,
        width: 45,
        height: 41.17,
        marginBottom: 8,
        margin: 'auto',
    },

    patient_module_icon: {
        margin: 'auto',
    },

    patient_module_text: {
        margin: 'auto',
        padding: 2,
    }
  
  
  
  });
  
export default style_patient_home;