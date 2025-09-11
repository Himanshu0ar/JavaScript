let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManagement = {
    users: [],
    init: function() {
        form.addEventListener("submit", this.submitForm.bind(this));
    },

    submitForm: function(event) {
        event.preventDefault();
        this.addUser();
    },

    addUser: function() {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });
        form.reset();
        this.renderUi();
    },

    renderUi: function() {
        const container = document.querySelector(".user-cards");
        container.innerHTML = ""; // Clear previous entries

        this.users.forEach(function(user) {
            const card = document.createElement('div');
            card.className = 'card';

            const img = document.createElement('img');
            img.src = user.photo;
            img.alt = user.username;

            const name = document.createElement('h3');
            name.textContent = user.username;

            const role = document.createElement('p');
            role.className = 'role';
            role.textContent = user.role;

            const bio = document.createElement('p');
            bio.className = 'bio';
            bio.textContent = user.bio;

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(role);
            card.appendChild(bio);

            container.appendChild(card);
        });
    }
};

userManagement.init();
