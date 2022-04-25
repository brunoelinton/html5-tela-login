let email = 'bruno@outlook.com';

email = 'bruno@outlook.com';

console.log(email);
console.log('O seu e-mail é: ' + email);
console.log(`O seu e-mail é: ${email}`);

document.getElementById('btn-submit').addEventListener('click', e => {
    console.log('O evento foi clicado!');
});

document.getElementById('form-login').addEventListener('mouseenter', e => {
    console.log('O mouse está sobre o formulário.');
});

document.querySelector('#form-login').addEventListener('mouseleave', e => {
    console.log('O mouse está fora do formulário');
});

document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email, password
    };

    /*
        console.log(json);

        let stringJSON = JSON.stringify(json);
        console.log(stringJSON);

        let jsonParse = JSON.parse(stringJSON);
        console.log(jsonParse);
    */
    if (!json.email) {
        console.error("O campo e-mail não foi preenchido!");
    } else if(!json.password) {
        console.error("O campo password deve ser preenchido!");
    } else {
        console.log("Dados validados com sucesso!");
    }
});
