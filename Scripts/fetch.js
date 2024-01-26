const URL_SERVER = "http://18.213.254.148:3000/";

function comprobarEmail() {
    fetch(URL_SERVER + "usuarios")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                console.log("error")
                throw new Error("Error de servidor");
            }
        })
        .then(usuarios => {
            usuarios.forEach(usuario => {
                if(usuario.email == email){
                  return true
                }
            });
        })
}




  