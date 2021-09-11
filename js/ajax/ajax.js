export function sendHttpRequest(method, url, element) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(this.response);
      } else {
        element.textContent = "Loading";
      }
    };

    xhr.open(method, url);
    xhr.send();
  });

  return promise;
}
