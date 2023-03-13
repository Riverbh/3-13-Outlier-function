function outlier(arr) {
   let oddArr = arr.filter((num) => {
        if(num % 2 !== 0){
            return num 
        }
    })

    let evenArr = arr.filter((num) => {
        if(num % 2 === 0){
            return num 
        }
    })

    if(oddArr.length > evenArr.length){
        return evenArr.toString()
    }else if(evenArr.length > oddArr.length){
        return oddArr.toString()
    }
}



console.log(outlier([2, 2, 4, 6, 12, 10, 101, 4]))


