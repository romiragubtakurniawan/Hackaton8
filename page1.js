let pilihgenre = document.querySelector(".container")
let singup = document.querySelector(".singup")
let loginPage = document.querySelector(".login1")
let gmail = document.querySelector("#Gmail")
let pass = document.querySelector("#pass")
let hasilgmail = document.querySelector("#hasilGmail") //username
let hasilpass = document.querySelector("#hasilPass")
let opening = document.querySelector(".opening")
let header = document.querySelector(".header-right")
let keluar = document.querySelector(".out button")
let username = document.querySelector("#username")

function changepage() {
    if (singup.style.display === "none") {
        gmail.value = ""
        pass.value = ""
    }
    opening.style.display = "none"
    pilihgenre.style.display = "none"
    loginPage.style.display = "none"
    singup.style.display = "block"
}
// menu login
function masuk() {
    if (loginPage.style.display === "none") {
        hasilgmail.value = ""
        hasilpass.value = ""
    }

    opening.style.display = "none"
    loginPage.style.display = "block"
    singup.style.display = "none"
}

//sing up page
function login() {
    let user = {
        email: gmail.value,
        username: username.value,
        password: pass.value
    }
    let json = JSON.stringify(user);
    localStorage.setItem(username.value, json)
    if (gmail.value === "" || pass.value === "" || username.value === "") {
        // alert("terdapat bagian yang kosong, tolong ulangi")
        Swal.fire("terdapat bagian yang salah atau kosong, tolong ulangi")
    } else if (gmail.value !== "" || pass.value !== "") {
        singup.style.display = "none"
        loginPage.style.display = "block"
    }
}
//login masuk
function terakhir() {
    let user = localStorage.getItem(hasilgmail.value)
    let data = JSON.parse(user)

    if (user == null) {
        // alert("terdapat kesalahan dalam pengisian, tolong ulangi")
        Swal.fire("terdapat bagian yang salah atau kosong, tolong ulangi")
    } else if (hasilgmail.value === data.username && hasilpass.value === data.password && hasilgmail.value !== "" & hasilpass.value !== "") {
        loginPage.style.display = "none"
        pilihgenre.style.display = "block"
        keluar.style.display = "block"
        header.style.display = "none"
    } else {
        // alert("terdapat kesalahan dalam pengisian, tolong ulangi", "failed");
        Swal.fire("terdapat bagian yang salah atau kosong, tolong ulangi")
    }

}
function logout() {
    pilihgenre.style.display = "none"
    opening.style.display = "block"
    keluar.style.display = "none"
    header.style.display = "block"
}

function logo() {
    loginPage.style.display = "none"
    singup.style.display = "none"
    pilihgenre.style.display = "none"
    opening.style.display = "block"
    keluar.style.display = "none"
    header.style.display = "block"
}

document.getElementById("dangdut").addEventListener("click", function () {
    window.location.href = "dangdut.html"
})
document.getElementById("jawa").addEventListener("click", function () {
    window.location.href = "jawa.html"
})
document.getElementById("jazz").addEventListener("click", function () {
    window.location.href = "jass.html"
})
document.getElementById("pop").addEventListener("click", function () {
    window.location.href = "pop.html"
})

