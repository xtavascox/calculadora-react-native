import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',

    }, calculadoraContainer: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'flex-end'
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom:10

    },
    resulPeq: {
        color: 'rgba(255,255,255,0.4)',
        fontSize: 30,
        textAlign: 'right'
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    btn: {
        height: 80,
        width: 80,
        backgroundColor:'#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        padding: 10,
        fontSize: 30,
        fontWeight: '500'
    },


})