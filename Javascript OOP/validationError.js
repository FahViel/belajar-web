// Membuat validation error
class validationError extends Error{
    constructor(message, field){
        super(message)
        this.field = field
    }
}

class MathUtil {

    static sum(...numbers){

        // Menambahkan error method
        if(numbers == 0){
            throw new validationError('Parameters harus di isi','numbers')
        }

        let total = 0
        for(const number of numbers){
            total += number
        }
        return total
    }
}

try {
    console.log(MathUtil.sum())
    // console.log('fahri')
} catch (error) {
    if(error instanceof validationError){
        console.log(`Terjadi error di field ${error.field} dengan error ${error.message}`)
    } else {
        console.log(`Terjadi error : ${error.message}`)
    }
} finally {
    console.log(`program selesai`)
}