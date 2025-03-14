import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export const useColor = () => {

    const [code, setCode] = useState("");
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0.0);
    const [date, setDate] = useState("");
    const [comment, setComment] = useState("");
    const [error, setError] = useState(false);
    const [errorDesc, setErrorDesc] = useState("");

    const evalCode = (input = "") => {
        if(input.length <1 && input.length>10){
             setError(true)
             setErrorDesc("No ingreso un codigo válido")
        }else{setCode(input)}
     };
     
     const evalName = (input = "") => {
         if(input.length <3){
              setError(true)
              setErrorDesc("No se puede ingresar un nombre de menos de 3 caracteres.")
         }else{setName(input)}
      };
 

     const evalQuantity = (input = 0) => {
        if(input<1){
             setError(true)
             setErrorDesc("No puede ingresar menos de un producto.")
        }else{setQuantity(input)}
     };
     
     const evalPrice = (input = 0.00) => {
        if(input<0.01){
             setError(true)
             setErrorDesc("No puede costar 0 el producto.")

        }else{setPrice(input)}
     };
     
     return{
        code,
        setCode,
        name,
        setName,
        errorDesc,
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
        evalCode,
        evalName,
        evalPrice,
        evalQuantity

     }
}