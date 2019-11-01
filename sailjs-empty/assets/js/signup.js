window.onload = () => {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    const submit = document.getElementById("send");
    const mail = document.getElementById("email");
    const role = document.getElementById("role");
    const pass = document.getElementById("pass");
    const name = document.getElementById("name");
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!mail.value || !pass.value || !name.value) {
            toastr["error"]("No enough infomation");
        } else if (!re.test(mail.value)) {
            toastr["error"]("Invalid email");
        } else {
            fetch("http://localhost:1337/user/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: mail.value,
                        role: role.value,
                        pass: pass.value,
                        name: name.value
                    }),
                    credentials: "include"
                })
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    if (data.success) {
                        toastr["success"]("Sign up success");
                    } else {
                        toastr["success"]("Sign up failed");
                    }
                })
        }
    })
}