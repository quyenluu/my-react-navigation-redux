import axios from 'axios';
import { AsyncStorage } from 'react-native';

export default class AuthAPI {    
    static async login(email, password) {
        const URL = "https://serverquyenluu.herokuapp.com/login.php";
        const response = await axios.post(URL, {email, password});
        if (response.data.success) {
            await AsyncStorage.setItem('userToken', response.data.userToken);
        }
        return response.data;
    }

    static async logout() {
        return await AsyncStorage.removeItem('userToken');
    }
}