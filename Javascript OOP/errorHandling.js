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

const testError = (...number) => {
    try {
        console.log(MathUtil.sum(...number))
        console.log('kode block akan terhenti')
    } catch(error){
        console.log(`Terjadi Error: ${error.message}`)
    } finally {
        console.log(`kode program tidak akan terhenti`)
    }
    
}

console.log(testError(1,1,1,1))