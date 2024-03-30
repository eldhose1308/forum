import { useClientAuth } from "_contexts/AuthProvider"
import { useToast } from "_contexts/ToastProvider";

import * as userModel from "_services/user.service";

const useAuth = () => {
    const { setProgress } = useToast()

    const { isAuthenticated, loginClient, logoutClient } = useClientAuth()

    const login = async (formData) => {
        const userData = await userModel.login(formData, { setProgress });
        const { data } = userData;
        loginClient(data)
        return userData
    }

    const logout = () => {
        // call server api here
        logoutClient()
    }

    return {
        isAuthenticated,
        login,
        logout
    }
}

export default useAuth