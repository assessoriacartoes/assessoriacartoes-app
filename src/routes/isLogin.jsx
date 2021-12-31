export default function isLogin() {
    const currentUser = JSON.parse(localStorage.getItem('user') || '{}')
    if (currentUser.tipoDeUsuario === 2) {
        return true
    } else {
        return false
    }

}