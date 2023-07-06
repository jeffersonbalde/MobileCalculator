import * as React from "react";


export default function MyKeyboard(){
    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [result, setResult] = React.useState<Number | null > (null);

    const handleNumberPress =(buttonValue: string) => {
        if(firstNumber.length < 10){
            setFirstNumber(firstNumber)
        }
    }

    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
    }

    const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
    }

    const getResult = () => {
        switch(operation){
            case "+":
                clear();
                setResult(parseInt(secondNumber) + parseInt(firstNumber));
                break;
            case "-":
                clear();
                setResult(parseInt(secondNumber) - parseInt(firstNumber));
                break;
            case "*":
                clear();
                setResult(parseInt(secondNumber) * parseInt(firstNumber));
                break;
            case "/":
                clear();
                setResult(parseInt(secondNumber) / parseInt(firstNumber));
                break;
            default:
                clear();
                setResult(0);
                break;
        }
    }
}