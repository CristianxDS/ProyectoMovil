import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/constantsColor";

export const styles = StyleSheet.create({
    globalTitle: {
        color: SECUNDARY_COLOR,
        fontSize: 27,
        paddingHorizontal: 30,
        paddingVertical: 30,
        fontWeight:    'bold'  
    },
    contentBody: {
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 40,
        borderBottomLeftRadius:200,
    borderBottomRightRadius:200,
    },
    titleBody: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    descriptionBody: {
        fontSize: 16
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    contentInput: {
        marginTop: 30,
        gap: 10
    },
    button: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 30
    },
    buttonText: {
        color: SECUNDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    iconPassword: {
        position: 'absolute',
        right: 20,
        zIndex: 1,
        marginTop: 12
    },
    textRedirection: {
        marginTop: 30,
        fontSize: 16,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    contentCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 25
        
    },
    titleCard: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
    },
    imageCard: {
        borderRadius:5,
        width: 75,
        height: 75
    },
    iconCard: {
        flex: 1,
        alignItems: 'flex-end'
    },
    contentPrincipal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    contentModal: {
        backgroundColor: SECUNDARY_COLOR,
        padding: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    headerModal: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        padding: 10,
        alignItems: 'center'
    },
    titleModal: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    imageModal: {
        width: 200,
        height: 275
    },
    contentQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantity: {
        width: 50,
        height: 50,
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 17
    },
    textButtonQuantity: {
        color: SECUNDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuantity: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center'
    },
    buttonAddCard: {
        backgroundColor: PRIMARY_COLOR,
        alignItems: 'center',
        marginTop: 15,
        paddingVertical: 10,
        borderRadius: 5
    },
    textButtonAddCard: {
        color: SECUNDARY_COLOR,
        fontWeight: 'bold'
    },
    messageStock: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#b52828',
        textAlign: 'center'
    },
    contentHeaderHome: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textIconCar: {
        backgroundColor: SECUNDARY_COLOR,
        borderRadius: 100,
        paddingHorizontal: 5,
        fontSize: 14,
        fontWeight: 'bold'
    },
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTableInf: {
        flexDirection: 'row',
    },
    textHeaderInf: {
        fontWeight: 'bold',
        color: '#000'
    },
    textTotalPay: {
        marginTop: 15,
        fontSize: 15,
        fontWeight: 'bold'
    },
    etiqueta: { 
        borderRadius:10,
        height:80,
        width:80,
        alignSelf:"center"
    },
    avisoRegistro:{
        alignSelf:"center",
        fontWeight:"bold",
        fontSize:15,
        marginTop:40,
        justifyContent:"center",
        textAlign:"center"

    },

});