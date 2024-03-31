class MathUtil {

    static sum(...numbers){

        // Menambahkan error method
        if(numbers == 0){
            throw new Error('Parameters harus di isi')
        }


        let total = 0
        for(const number of numbers){
            total += number
        }
        return total
    }
}

const sumError = MathUtil.sum()
const sum = MathUtil.sum(1,2,3,4,5,6)

console.log(sum)