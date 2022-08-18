const { AppState } = require("../AppState");
const { bcwSandbox } = require("./AxiosService");

class ProfilesService {
    async getBlogById(id) {
        const res = await bcwSandbox.get(`api/profiles/${id}`)
        AppState.activeProfile = new ProfilesService(res.data)
    }
}

export const profilesService = new ProfilesService()