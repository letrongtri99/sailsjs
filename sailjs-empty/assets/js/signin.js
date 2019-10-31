window.onload = () => {
    const mail = document.getElementById("Email");
    const pass = document.getElementById("Pass");
    const signin = document.getElementById("Send");
    const x = 2;
    signin.addEventListener('click', (e) => {
        e.preventDefault();
        var x = document.getElementById("check").checked;
        fetch("http://localhost:1337/user/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: mail.value,
                    pass: pass.value,
                }),
                credentials: "include"
            })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                if (data.success) {
                    window.alert(data.message);
                    window.location.assign("http://localhost:1337");
                } else {
                    window.alert(data.message);
                    window.location.reload();
                }
                if (x) {
                    window.localStorage.setItem("name", data.data.name);
                    window.localStorage.setItem("role", data.data.role);
                } else {
                    window.sessionStorage.setItem("name", data.data.name);
                    window.sessionStorage.setItem("role", data.data.role);
                }
            })
    })
}