import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { BtnCal } from '../components/BtnCal';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
    const { limpiar,
        armarNumero,
        signoNum,
        btnDel,
        btnDiv,
        btnMul,
        btnRes,
        btnSum,
        Calc,
        numero,
        numAnt} = useCalculadora()

    return (
        <View style={styles.calculadoraContainer}>

            {
                (numAnt !== '0') && (<Text style={styles.resulPeq}>{numAnt}</Text>)
            }

            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>

            <View style={styles.fila}>
                <BtnCal texto='C' color='#9b9b9b' action={limpiar} />
                <BtnCal texto='+/-' color='#9b9b9b' action={signoNum} />
                <BtnCal texto='del' color='#9b9b9b' action={btnDel} />
                <BtnCal texto='/' color='#ff9427' action={btnDiv} />
            </View>
            <View style={styles.fila}>
                <BtnCal texto='1' action={armarNumero} />
                <BtnCal texto='2' action={armarNumero} />
                <BtnCal texto='3' action={armarNumero} />
                <BtnCal texto='X' color='#ff9427' action={btnMul} />
            </View>
            <View style={styles.fila}>
                <BtnCal texto='4' action={armarNumero} />
                <BtnCal texto='5' action={armarNumero} />
                <BtnCal texto='6' action={armarNumero} />
                <BtnCal texto='-' color='#ff9427' action={btnRes} />
            </View>
            <View style={styles.fila}>
                <BtnCal texto='7' action={armarNumero} />
                <BtnCal texto='8' action={armarNumero} />
                <BtnCal texto='9' action={armarNumero} />
                <BtnCal texto='+' color='#ff9426' action={btnSum} />
            </View>
            <View style={styles.fila}>
                <BtnCal texto='0' btnAncho action={armarNumero} />
                <BtnCal texto='.' action={armarNumero} />
                <BtnCal texto='=' color='#ff9427' action={Calc} />
            </View>

        </View>
    )
}
