window.onload = function() {
    const webhookInput = document.getElementById('webhook-url');
    const messageInput = document.getElementById('message');
    const colorInput = document.getElementById('color');
    const sendButton = document.querySelector('button');
    
    sendButton.onclick = sendMessage;

    function sendMessage() {
        const webhookURL = webhookInput.value;
        const message = messageInput.value;
        const color = parseInt(colorInput.value);

        if (!webhookURL || !message) {
            alert('please dont troll me.');
            return;
        }

        const embed = {
            title: 'MADE BY https://github.com/kikmanONTOP',
            description: message,
            color: color || 16711680,
        };

        const data = {
            content: ' ',
            embeds: [embed],
        };

        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.status === 204) {
                alert('message was sent.');
            } else {
                alert('error.');
            }
        })
        .catch(error => {
            console.error('error: ' + error);
        });
    }
}
