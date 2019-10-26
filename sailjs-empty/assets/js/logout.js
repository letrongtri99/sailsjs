window.onload=()=>{
    const logout = document.getElementById("logout");
    logout.addEventListener('click',(e)=>{
        fetch("http://localhost:1337/user/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
        })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            window.alert(data.message);
            window.location.assign("http://localhost:1337");
        })
    })
}