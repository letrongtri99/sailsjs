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
        "timeOut": "2000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    const mail = document.getElementById("Email");
    const pass = document.getElementById("Pass");
    const signin = document.getElementById("Send");
    const x = 2;
    signin.addEventListener('click', (e) => {
        e.preventDefault();
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!mail.value || !pass.value) {
            toastr["error"]("No enough infomation");
        } else if (!re.test(mail.value)) {
            toastr["error"]("Invalid email");
        } else {
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
                        toastr["success"](data.message);
                        setTimeout(function() {
                            window.location.assign('/');
                        }, 1000);
                    } else {
                        toastr["error"](data.message);
                        setTimeout(function() {
                            window.location.reload();
                        }, 1000);
                    }
                })
        }
        var x = document.getElementById("check").checked;

    })

}