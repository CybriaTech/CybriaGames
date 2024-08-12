document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/json/firebase.config.json');
    const firebaseConfig = await response.json();
    firebase.initializeApp(firebaseConfig);

    const db = firebase.database();

    const msgref = db.ref('Messages');
    const uref = db.ref('Users');

    const chatroom = $('#chatroom');
    const msgbox = $('.chatbar');

    function addmsg(user, message, time, id) {
        const messgehtml = `
            <div id="user">
                <img src="/images/chat/placeholder.png" alt="User" class="profile-pic">
                <div id="profile-info">
                    <p class="profile-name">${user}</p>
                    <p class="message-content">${message}</p>
                </div>
            </div>
        `;
        chatroom.append(messgehtml);
    }

    async function createmsg(id, user, message) {
        const time = Date.now();
        await msgref.push({
            id: id,
            user: user,
            message: message,
            time: time
        });
    }

    msgref.on('child_added', (snapshot) => {
        const msgdata = snapshot.val();
        addmsg(msgdata.user, msgdata.message, msgdata.time, msgdata.id);
    });

    $('.btn-send').on('click', async () => {
        const message = msgbox.val().trim();
        if (message) {
            const user = localStorage.getItem('user');
            const id = localStorage.getItem('id');
            if (user && id) {
                await createmsg(id, user, message);
                msgbox.val('');
            } else {
                alert('You must be logged in to send a message.');
            }
        }
    });
});
