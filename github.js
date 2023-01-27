class Github {
    constructor() {
        this.url = `https://api.github.com/users/`
    }

    async GetData(username) {
        const requestuser = await fetch(this.url + username)
        const requestrepo = await fetch(this.url + username + '/repos')

        const responseuser = await requestuser.json()
        const responserepo = await requestrepo.json()

        return {
            user: responseuser,
            repos: responserepo
        }
    }
}
