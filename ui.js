class UI {
    constructor () {
        this.cardBody = document.querySelector('.card-body')
        this.profile = document.getElementById('profile')
        this.repos = document.getElementById('repos')
        this.LastSearchs = document.getElementById('lastSearch')
        this.lastusers = document.getElementById('last-users')

    }

    Alerts(message) {
        const div = document.createElement('div')
        div.className = 'alert alert-danger'
        div.textContent = message
        this.cardBody.appendChild(div)

        setTimeout(() => {  
            div.remove()
        }, 3500);
        
    }

    ShowUserInfos(data) {
        this.profile.innerHTML = `<div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <a href="${data.html_url}" target = "_blank">
             <img class="img-fluid mb-2" src="${data.avatar_url}"> </a>
             <hr>
             <div id="fullName"><strong>${data.name}</strong></div>
             <hr>
             <div id="bio">${data.bio}</div>
            </div>
          <div class="col-md-8">
                <button class="btn btn-secondary">
                      Takipçi  <span class="badge badge-light">${data.followers}</span>
                </button>
                <button class="btn btn-info">
                     Takip Edilen  <span class="badge badge-light">${data.following}</span>
                  </button>
                <button class="btn btn-danger">
                    Repolar  <span class="badge badge-light">${data.public_repos}</span>
                </button>
                <hr>
                <li class="list-group">
                    <li class="list-group-item borderzero">
                        <img src="images/company.png" width="30px"> <span id="company">${data.company}</span>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/location.png" width="30px"> <span id = "location">${data.location}</a>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/mail.png" width="30px"> <span id="mail">${data.email}</span>
                        
                    </li>
                    
                </div>
                   
                
          </div>
    </div>`
        
    }

    ShowRepoInfos(repos) {
        this.repos.innerHTML = ''
        repos.forEach((repo) => {
            this.repos.innerHTML += `<div class="mb-2 card-body">
            <div class="row">
                <div class="col-md-2">
                <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <button class="btn btn-secondary">
                        Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                    </button>

                    <button class="btn btn-info">
                        Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                    </button>
            
                </div>
        </div>

        </div> `
        })

    }

    addSearchedUserToUI(username) {
        let users = Storage.GetSearchedUsersFromStorage()
        if (users.indexOf(username) === -1 ){
            const li = document.createElement('li')
            li.className = 'list-group-item'
            li.textContent = username
            this.lastusers.appendChild(li)    

        }          
    }   

    ClearAllSearched() {
        console.log(this.lastusers)
        Storage.clearAllSearchedUsersFromStorage()
        while(this.lastusers.firstChild !== null) {
            this.lastusers.removeChild(this.lastusers.firstChild)
        }
    }
}
