function myFunc(){
let infoUser ={
    username: "paisa",
    password: 123456
};
window.localStorage.setItem("infoUser", JSON.stringify(infoUser));

}
