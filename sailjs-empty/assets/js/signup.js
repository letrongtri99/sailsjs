window.onload=()=>{
    const submit = document.getElementById("send");
    const mail = document.getElementById("email");
    const role = document.getElementById("role");
    const pass = document.getElementById("pass");
    const name = document.getElementById("name");
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
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
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            if(data.success){
                window.alert("Good job");
                window.location.assign("http://localhost:1337");
            }
            else{
                window.alert(data.message);
            }
        })
    })
}