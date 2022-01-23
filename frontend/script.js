const sendReq = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'localhost:1337/users/register');
  xhr.send();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status == 200 && this.status < 300) {
        console.log(this.responseText);
      }
    }
  };
};

const button = document.getElementById('send');
button.addEventListener('click', sendReq);
