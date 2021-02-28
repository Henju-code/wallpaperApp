import auth from '@react-native-firebase/auth'

export function signInUser (email, password) {
    auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('Success')
        })
        .catch(error => {
            if (error.code === 'auth/wrong-password') {
                alert('Senha incorreta! Por favor, verifique e tente novamente.')
            }

            if (error.code === 'auth/user-not-found') {
                alert('Endereço de email invalido!')
            }

            console.error(error);
        });
}

export const registerUser = (email, password) => {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert('Conta criada com sucesso!')
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                alert('Este endereço de email já está em uso!')
            }

            if (error.code === 'auth/invalid-email') {
                alert('Endereço de email invalido!')
            }

            console.error(error);
        });
}

export function logoff () {
    auth()
        .signOut()
        .then(() => console.log('User signed out!'));
}
