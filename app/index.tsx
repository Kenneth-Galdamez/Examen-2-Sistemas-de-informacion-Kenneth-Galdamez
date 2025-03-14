import { View, Text, TextInput } from 'react-native'
import React from 'react'
import "../global.css"

import { useColor } from '@/hooks/useFormulario';



const index = () => {
  
const {
  code,
        setCode,
        name,
        setName,
        price,
        setPrice,
        quantity,
        setQuantity,
        date,
        setDate,
        setComment,
        comment,
        setCategory,
        category,
        error,
        errorDesc,
        evalCode,
        evalName,
        evalPrice,
        evalQuantity
} = useColor();
    
  return (
    
    <View className='flex-1 pb-20 '>
     <View className='flex-row justify-center mt-40'>
     <TextInput className='flex-1 h-px-70 bg-black' onChangeText={setCode} value={code}/>
//todo: comonente con letras rojas que dija el errorDesc xD
     <TextInput className='flex-1 h-px-70 bg-black' onChangeText={setName} value={name}/>

     </View>
    </View>
  )
}

export default index