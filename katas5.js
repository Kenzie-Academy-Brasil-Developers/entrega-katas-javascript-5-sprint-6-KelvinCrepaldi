// implemente aqui as funções de teste

// 1- Função que inverte uma string

function testReverseString1(){
    let result = reverseString("abcdefghijklmnopqrstuvxwyz")
    let expected = "zywxvutsrqponmlkjihgfedcba"

    console.assert(result === expected, {
        "esperado" : expected,
        "obtido" : result
    })
}
testReverseString1()

function testReverseString2(){
    let result = reverseString("1234567890")
    let expected = "0987654321"
    console.assert(result === expected, `Resultado esperado: ${expected}, resultado obtido: ${result}`)
}
testReverseString2()

function reverseString(x){
    return x.split("").reverse().join("")
}

// 2- Função que inverte uma Frase

function testReverseSentence1(){
    let result = ReverseSentence('Três tigres tristes para três pratos de trigo. Três pratos de trigo para três tigres tristes.')
    let expected = 'tristes. tigres três para trigo de pratos Três trigo. de pratos três para tristes tigres Três'
    console.assert(result === expected, {
        "expected" : expected,
        "result" : result
    })
}
testReverseSentence1()

function testReverseSentence2(){
    let result = ReverseSentence('0 9 7~6 5,4 3.5 6 7-8 8 67 98 4454545 77898798 5767765')
    let expected = '5767765 77898798 4454545 98 67 8 7-8 6 3.5 5,4 7~6 9 0'
    console.assert(result === expected, `Result: ${result}, Expected: ${expected}`)
}
testReverseSentence2()

function ReverseSentence(x){
    return x.split(" ").reverse().join(" ")
}

// 3 - Função que encontra o valor minimo de um array

function testMinimumValue1(){
    let array = [7, 4, 3, 2, 9, 6]
    let result = MinimumValue(array)
    let expected = 2
    console.assert(result === expected, {
        "expected" : expected,
        "result" : result,
        "array" : array
    })

}
testMinimumValue1()

function testMinimumValue2(){
    let array = [-4.3, 2, -1, 5]
    let result = MinimumValue(array)
    let expected = -4.3
    console.assert(result === expected, {
        "expected" : expected,
        "result" : result,
        "array" : array
    })
}
testMinimumValue2()

function MinimumValue(array){
    return Math.min(...array)
}

// 4 - Função que encontra o valor máximo de um array

function testMaximumValue1(){
    let array = [7, 4, 3, 2, 9, 6]
    let result = maximumValue(array)
    let expected = 9
    console.assert(result === expected, {
        "expected" : expected,
        "result" : result,
        "array" : array
    })
}
testMaximumValue1()

function testMaximumValue2(){
    let array = [-7, -4, -3, -2, -9, -6]
    let result = maximumValue(array)
    let expected = -2
    console.assert(result === expected, {
        "expected" : expected,
        "result" : result,
        "array" : array
    })
}
testMaximumValue2()

function maximumValue(array){
    return Math.max(...array)
}

// 5 - Função que calcula o resto de uma determinada divisão.


function testCalculateRemainder1(){
    let result = calculateRemainder(99,5)
    let expected = 4
    console.assert(result === expected, {
        "expected" : expected,
        "result" : calculateRemainder(99,5)
    })
}
testCalculateRemainder1()

function testCalculateRemainder2(){
    let result = calculateRemainder(-99,4)
    let expected = -3
    console.assert(result === expected, {
        "expected" : expected,
        "result" : calculateRemainder(99,5),
        
    })
}
testCalculateRemainder2()

function calculateRemainder(x, y){
    return x % y
}

// 6 - Função que retorna valores distintos de uma lista.

function testDistinctValues1(){
    let result = distinctValues([1, 3, 4, 2, 4, 1, 2, 3, 2, 4, 1, 4])
    let expected = "1 2 3 4"
    console.assert(JSON.stringify(result) === JSON.stringify(expected), {
        "expected" : expected,
        "result" : result
        
    })
}
testDistinctValues1()

function testDistinctValues2(){
    let result = distinctValues([-1, -5, 3, 6, -1, -1, -2, -3, -4, -2])
    let expected = "-1 -2 -3 -4 -5 3 6"
    console.assert(JSON.stringify(result) === JSON.stringify(expected), {
        "expected" : expected,
        "result" : result
    })
}
testDistinctValues2()

function distinctValues(array){

    const unique = (value, index, self) =>{
        return self.indexOf(value) ===index
    }
    
    return array.filter(unique).sort().join(' ')
}

// 7 - Função que retorna valores distintos de uma lista.

function testCountValues1(){
    let result = countValues([1, 3, 5, 7, 3, 1, 1, 5])
    let expected = "1(3) 3(2) 5(2) 7(1)"
    console.assert(result === expected, {
        "expected" : expected,
        "result" : result
    })
}
testCountValues1()

function testCountValues2(){
    let result = countValues([-1, -3, -4, -2, -4, -5, -3, -6, -4])
    let expected = "-1(1) -3(2) -4(3) -2(1) -5(1) -6(1)"
    console.assert(result === expected, {
        "expected" : expected,
        "result" : result
    })
}
testCountValues2()

function countValues(array){

    let string = []
    let counts = {}

    for(const x of array){
        if(counts[x]){
            counts[x]++
        }
        else{
            counts[x]= 1
        }
    }

    for(const y in counts){
        string.push(`${y}(${counts[y]})`)
    }

    return string.join(" ")

}

// 8 - Função chamada evaluateExpression que receberá dois parâmetros.

function testEvaluateExpression1() {
    let result = evaluateExpression("a + b + c - d", {a: 10, b: 5, c: 20, d: 2});
    let expected = 33
    console.assert(result === expected, {
        "expected" : expected,
        "result" : result
    })
 }
testEvaluateExpression1()

function testEvaluateExpression2() {
    let result = evaluateExpression("a - b - c + d", {a: 4, b: 3, c: 5, d: 0});
    let expected = -4
    console.assert(result === expected, {
        "expected" : expected,
        "result" : result
    })
 }
testEvaluateExpression2()

function evaluateExpression(expression, obj){

    let splitExp = expression.split(" ")
    let newExp = []
    let count = 1

    for(const x in splitExp){
        for(const y in obj){

            if(splitExp[x] === y){
                newExp.push(`${obj[y]}`)

                if(typeof splitExp[count] === "string"){
                    newExp.push(`${splitExp[count]}`)  
                }
                count +=2
            }
        }
    }
    return eval(newExp.join(" "))
}

