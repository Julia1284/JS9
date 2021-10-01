document.querySelector ('button').addEventListener("click",push);
function push (){
    let user = document.querySelector ('input').value;
    let userClean = user.replace(/ +/g, ' ').trim();
    let array = userClean.split(" ");
    let usersurname = array[0];
    usersurname = usersurname [0].toUpperCase() + usersurname.substr(1).toLowerCase();
    let username = array[1] 
    username = username [0].toUpperCase() + username.substr(1).toLowerCase();
    let userpatronymic =  array [2];
    userpatronymic = userpatronymic [0].toUpperCase() + userpatronymic.substr(1).toLowerCase();
    document.querySelector ('#surnamevalue').innerHTML = usersurname;
    document.querySelector ('#namevalue').innerHTML = username;
    document.querySelector ('#patronymicvalue').innerHTML = userpatronymic;
}
