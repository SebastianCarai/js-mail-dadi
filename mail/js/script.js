const emails= ['ciao@gmail.com' , 'ciao1@gmail.com' , 'ciao2@gmail.com' , 'ciao3@gmail.com' , 'ciao4@gmail.com'];

const userEmail = prompt('inserisci la tua email per accedere');

let userMessage='la sua email non è valida. Accesso negato';
for (i=0; i<=emails.length; i++) {
    if (userEmail === emails[i]) {
        userMessage='La sua email è valida. Può accedere'
    }
    
}
 alert(userMessage)