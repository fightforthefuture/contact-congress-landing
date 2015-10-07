document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var org = document.getElementById('org').value;

    if (!email) {
        alert('Please enter your email address :)');
        return document.getElementById('email').focus();
    }
    if (!org) {
        alert('Please enter an organization :)');
        return document.getElementById('org').focus();
    }

    var data = new FormData();
    data.append('email', email);
    data.append('org', org);

    var url = 'https://mothership.fightforthefuture.org/congress/signup';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log('response:', xhr.response);
        }
    }.bind(this);
    xhr.open("post", url, true);
    xhr.send(data);

    document.getElementById('fields').style.display = 'none';
    document.getElementById('thanks').style.display = 'block';
}, false);