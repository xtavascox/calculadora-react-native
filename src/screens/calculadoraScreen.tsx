import React, { useRef } from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { BtnCal } from '../components/BtnCal';
import { useState } from 'react';

enum Operadores {
    sumar, restar, multiplicar, dividir
}


export const CalculadoraScreen = () => {
    const [numAnt, setNumAnt] = useState('0')
    let [numero, setNumero] = useState('0')

    const lastOpera = useRef<Operadores>()


    const limpiar = () => {
        setNumero('0')
        setNumAnt('0')
    }
    const armarNumero = (numeroTexto: string) => {

        if (numero.includes('.') && numeroTexto === '.') { return }
        if (numero.startsWith('0') || numero.startsWith('-0')) {
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto)
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto)
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero)
            } else {
                setNumero(numero + numeroTexto)
            }

        } else {
            setNumero(numero + numeroTexto)
        }


    }
    const signoNum = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-' + numero)
        }
    }
    const btnDel = () => {
        let negativo = ''
        let numTemp = numero

        if (numero.includes('-')) {
            negativo = '-'
            numTemp = numero.substr(1)
        }
        if (numTemp.length > 1) {
            setNumero(negativo + numTemp.slice(0, -1))
        } else {
            setNumero('0')
        }
    }
    const ChgNumAnt = () => {
        if (numero.endsWith('.')) {
            setNumAnt(numero.slice(0, -1))
        } else {
            setNumAnt(numero)
        }
        setNumero('0')
    }

    const btnDiv = () => {
        ChgNumAnt()
        lastOpera.current = Operadores.dividir
    }
    const btnMul = () => {
        ChgNumAnt()
        lastOpera.current = Operadores.multiplicar
    }
    const btnSum = () => {
        ChgNumAnt()
        lastOpera.current = Operadores.sumar
    }
    const btnRes = () => {
        ChgNumAnt()
        lastOpera.current = Operadores.restar
    }
    const Calc = () => {
        const num1 = Number(numero)
        const num2 = Number(numAnt)

        switch (lastOpera.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`)
                break;
            case Operadores.restar:
                setNumero(`${num2 - num1}`)
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`)
                break;
            case Operadores.dividir:
                if(num1===0 || num2===0){
                    setNumero('Invalid Operation')
                }else{
                    setNumero(`${num2 / num1}`)
                }
                break;
        }
        setNumAnt('0')
    }

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
