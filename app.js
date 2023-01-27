// App JS

const github = new Github()
const ui = new UI()
const SearchInput = document.getElementById('githubname')
const LastUsersBtn = document.getElementById('clear-last-users')
const githubForm = document.getElementById('github-form')
const LastUsers = document.getElementById('last-users')


EventListeners()

function EventListeners() {
    githubForm.addEventListener('submit', FormRequest)
    LastUsersBtn.addEventListener('click', ClearTask)
    document.addEventListener('DOMContentLoaded', DocumentLoad)

}

function FormRequest(e) {
    const name = SearchInput.value
   
    if (name === '') {
        ui.Alerts('Lütfen aradığınız kullanıcının github ismini yazınız')
    }
    else {
        github.GetData(name)
        .then((result) =>  { 
            if(result.user.message === 'Not Found') {
                ui.Alerts('Kullanıcı Bulunamadı')
            } else {
                ui.addSearchedUserToUI(name)
                Storage.addSearchedUsersToStorage(name)
                ui.ShowUserInfos(result.user)
                ui.ShowRepoInfos(result.repos)
            }
        })
        .catch(err => console.log(err))   
    }
    
    SearchInput.value = ''
    e.preventDefault()
}

function DocumentLoad() {
    let users = Storage.GetSearchedUsersFromStorage()
    users.forEach(users => {
        const li = document.createElement('li')
        li.className = 'list-group-item'
        li.textContent = users
        LastUsers.appendChild(li)    
    })
}

function ClearTask() {
    ui.ClearAllSearched()
}
