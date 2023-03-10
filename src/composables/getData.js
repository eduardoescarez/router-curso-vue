import axios from "axios";
import { ref } from "vue";

export const useGetData = () => {

    const data = ref(null);
    const loading = ref(true);
    const errorGeneral = ref(null);

    const getData = async (url) => {
        loading.value = true;
        try {
            const resultado = await axios.get(url);
            data.value = resultado.data;
        } catch (error) {
            // console.log(error)
            errorGeneral.value = "Error del servidor";
        } finally {
            loading.value = false;
        }
    };

    return {
        getData,
        data,
        loading,
        errorGeneral
    }
}