const handleLogin = async (event) => {
    event.preventDefault();
    const url = 'http://localhost:3000/admin/login';
    try {
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        const data = {
            email: email.value,
            password: password.value
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        };

        console.log(options);

        axios(url, options)
            .then(response => {
                const data = response.data;
                window.location.href = '/dashboard';
                // if (data.token) {
                //     localStorage.setItem('token', data.token);
                //     // Rediriger vers le tableau de bord après la connexion réussie
                //     window.location.href = '/dashboard';
                // } else {
                //     console.error('Token not found in response data');
                // }
            })
            .catch(error => {
                console.error('Erreur lors de la demande:', error.message);
        });
          
    } catch (error) {
        console.error('Axios error:', error);
    }
};

// // Demande pour récupérer le jeton JWT du cookie après le chargement de la page
// document.addEventListener('DOMContentLoaded', () => {
//     const cookies = document.cookie;
//     const jwtCookie = cookies.split('; ').find(cookie => cookie.startsWith('token='));
//     const jwtToken = jwtCookie ? jwtCookie.split('=')[1] : null;

//     if (jwtToken) {
//         axios.get('http://localhost:3000/dashboard', {
//             headers: {
//                 Authorization: `Bearer ${jwtToken}`
//             }
//         })
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(error => {
//             console.error(error);
//         });
//     }
// });
