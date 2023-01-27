class Storage {
    static GetSearchedUsersFromStorage() {
        let users = ''
        if (localStorage.getItem('searched') === null) {
            users = []
        } else {
            users = JSON.parse(localStorage.getItem('searched'))
        }

        return users
    }
    static addSearchedUsersToStorage(username) {
        let users = this.GetSearchedUsersFromStorage()
        if(users.indexOf(username) === -1) { // Eger -1 olursa eklenmemis demektir isim kontrolu sagliyoruz
            users.push(username)
        }

        localStorage.setItem('searched', JSON.stringify(users)) // Burada usersi stringe cevirerek atiyoruz
    }

    static clearAllSearchedUsersFromStorage() { 
        localStorage.removeItem('searched')
    }
}