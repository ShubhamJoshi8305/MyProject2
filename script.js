function sendMessage() {
    var input = document.getElementById('chat-input');
    var message = input.value.trim();

    if (message !== '') {
        var chatBox = document.getElementById('chat-box');
        var newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent');
        newMessage.innerHTML = `<p>${message}</p>`;
        chatBox.appendChild(newMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
        input.value = '';
    }
}
