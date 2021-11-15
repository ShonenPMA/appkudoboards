import axios from 'axios'
import Swal from 'sweetalert2';

const generalApi = axios.create({
    baseURL: process.env.VUE_APP_API_URL
})

generalApi.interceptors.response.use(
    function(response) {
        if(response.data.message)
        {
            Swal.fire({
                title: 'Success',
                html: response.data.message,
                icon: 'info'
            })
        }
        
         return response;
    }, 
    function(error) {
        // handle error
        let message =  error.response.data.message
        let type = 'error'

        if(error.response.data.errors ){
            const errors = error.response.data.errors
            if( errors[0] && typeof errors[0] === 'string')
            {
                message = errors[0]         
            }else
            {
                const firstInputError = errors[Object.keys(errors)[0]]
                const firstError = firstInputError[Object.keys(firstInputError)[0]][0]
                message = firstError
                
            }
            
            type= 'warning'
            
        }

        Swal.fire({
            title: 'Oops...',
            html: message,
            icon: type
        })
    });

generalApi.interceptors.request.use( (config) => {
        config.headers = {
            'Authorization' : 'Bearer '+ localStorage.getItem('token')
        }
        return config
})


export default generalApi