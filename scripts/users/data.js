$(document).ready(async function() {
    const response = await fetch('/json/firebase.config.json');
    const firebaseConfig = await response.json();
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    const $i = $('#username');
    const $guess = $('#wonder-input');
    const $u = $('.submit');

    function genid() {
        const chars = '0123456789';
        let key = '';
        for (let i = 0; i < 12; i++) {
            key += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return key;
    }

    async function identical(name) {
        const snapshot = await db.ref('Users').orderByChild('name').equalTo(name).once('value');
        return snapshot.exists();
    }

    async function reviews(ip) {
        const snapshot = await db.ref('Users').orderByChild('ip').equalTo(ip).once('value');
        return snapshot.exists();
    }

    $u.on('click', async function() {
        const i = $i.val().trim();
        const wonder = $guess.val().trim();
        
        if (i && wonder) {
            const nameExists = await identical(i);
            if (nameExists) {
                $('.123').show();
            } else {
                const where = await fetch('https://api.ipify.org?format=json');
                const ive = await where.json();
                const been = ive.ip;

                const userID = genid();
                await db.ref('Users').push({
                    name: i,
                    id: userID,
                    wonder: wonder,
                    ip: been
                });
                console.log("success, register works");
                window.location.href = "/"; 
            }
        } else {
            $('.444').show();
        }
    });
});
