import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({

    card:{
        backgroundColor: '#CAD6FF',
        display: 'flex',
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
        paddingVertical:'15@ms',
        borderRadius: 10,
        marginBottom: '45@ms'
    },

    doctorDetailsContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    doctorImg:{
        width: '65@s',
        height: '55@vs',
        objectFit: 'cover',
        borderRadius: 50,
        marginRight: '18@ms'
    },

    doctorName:{
        color: '#2260FF',
        fontFamily: 'bold',
        fontSize:'17@s',

    },

    doctorPost:{
        fontFamily: 'bold'
    },

    btnGroup:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '10@ms'
    },

    reBooKBtn:{
        backgroundColor: '#fff',
        paddingHorizontal: '30@ms',
        paddingVertical: '5@ms',
        marginRight: '10@ms',
        borderRadius: 50
    },  

    reviewBtn:{
        backgroundColor: '#2260FF',
        paddingHorizontal: '25@ms',
        paddingVertical: '5@ms',
        borderRadius: 50,
    },

    reBooKBtnText:{
        color: '#2260FF',
        fontFamily: 'bold',
        fontSize: '16@s'
    },

    reviewBtnText:{
        color: '#FFF',
        fontFamily: 'bold',
        fontSize: '16@s'
    },

    reactionContainer:{
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        marginTop: '6@ms'
    },

    ratingContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        marginRight: '10@ms',
        backgroundColor: '#FFF',
        paddingHorizontal: '10@ms',
        paddingVertical: '2@ms',
        borderRadius: 20
    },

    rating:{
        color: '#2260FF',
        fontFamily: 'regular',
        marginLeft: '3@ms'
    },

    likeContanier:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        marginRight: '10@ms',
        backgroundColor: '#FFF',
        paddingHorizontal: '5@ms',
        paddingVertical: '3@ms',
        borderRadius: 20
    },
})

export default styles;