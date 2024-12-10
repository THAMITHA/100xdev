import {useEffect, useState, memo, useCallback} from 'react'
function App(){
    const [bankData, setBankData] = useState({})
    const [exchang1Data, setExchange1Data] = useState({})
    const [exchang2Data, setExchange2Data] = useState({})

    useEffect(()=>{
        setTimeout(()=>{setExchange1Data({returns:100})})
    },[])
    
    useEffect(()=>{
        setTimeout(()=>{setExchange2Data({returns:100})})
    }, [])

    useEffect(()=>{
        setTimeout(()=>{setBankData({returns:100})},3000)
    },[])
    const calculateCrypto = useCallback(function (){
        return  exchang1Data.returns+ exchang2Data.returns
    },[exchang1Data, exchang2Data])
    
    return <>
       <CryptoCurrencyCalculator calculateCryptoFunc={calculateCrypto}></CryptoCurrencyCalculator> 
       <Dummy></Dummy>
    </>
}

const CryptoCurrencyCalculator=memo(function({calculateCryptoFunc}){
    console.log('child component re-render')
    return <>
    the income tax of CryptoCurrencyCalculator is {calculateCryptoFunc()}
    </>
})

function Dummy(){
    return<>
        hi
    </>
}
export default App