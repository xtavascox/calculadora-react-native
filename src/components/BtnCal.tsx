import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { Props } from '../interface/IntCalc';
import { styles } from '../theme/appTheme';

export const BtnCal = ({ texto, color = '#2d2d2d', btnAncho = false,action }: Props) => {

    return (
        <TouchableOpacity onPress={()=>action(texto)}>
            <View style={{
                ...styles.btn,
                backgroundColor: color,
                width: (btnAncho) ? 180 : 80

            }}>
                <Text style={{
                    ...styles.btnText,
                    color: (color === '#9b9b9b')
                        ? 'black'
                        : 'white'
                }}
                >{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}
