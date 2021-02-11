function SignOff() {
    axios.post('/api/logout')
    .then(function (response) {
        if (response.data.isLogged == false) {
            location.replace('/')
            alert('you looged out');
        }
    });
}
