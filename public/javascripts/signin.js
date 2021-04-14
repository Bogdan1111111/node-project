(function () {
    document.getElementsByTagName('form')[0].onclick(function (e) {
        e.preventDefault()

        var email = document.getElementById('#email').val
        /*  email regex */
        pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (pattern.test(email)) {
            var response = await fetch('/actions', {
                action: 'signin',
                email: email
            })
            await document.getElementById('#email').insertAdjacentHTML(
                'beforeend',
                '<div class="alert alert-' + response.class + '">' + response.message + '</div>'
            )
        } else {
            document.getElementById('#email').insertAdjacentHTML(
                'beforeend',
                '<div class="alert alert-danger">Inser valid Email</div>'
            )
        }
    })
})