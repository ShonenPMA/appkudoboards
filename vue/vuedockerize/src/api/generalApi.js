import axios from 'axios'
import Swal from 'sweetalert2';

const generalApi = axios.create({
    baseURL: process.env.VUE_APP_API_URL
})

generalApi.interceptors.response.use(
    function(response) {
        Swal.fire({
            title: 'Success',
            html: response.data.message,
            icon: 'info'
        })
         return response;
    }, 
    function(error) {
        // handle error
        let message =  error.response.data.message
        let type = 'error'
        // form request Errors
        if(error.response.data.errors){
            const errors = error.response.data.errors
            const firstInputError = errors[Object.keys(errors)[0]]
            const firstError = firstInputError[Object.keys(firstInputError)[0]][0]
            type= 'warning'
            message = firstError
        }

        Swal.fire({
            title: 'Oops...',
            html: message,
            icon: type
        })
    });

export default generalApi