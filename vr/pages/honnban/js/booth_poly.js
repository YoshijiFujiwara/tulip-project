var request = new XMLHttpRequest();
request.open('GET', 'https://poly.googleapis.com/v1/assets/9C-MLNfxaor?key=AIzaSyD6jmj2t-ymITRMRkc1rHXOgYaGv9ZnU0M', true);
request.responseType = 'json';

request.onload = function () {
    var data = this.response;
    console.log(data);

    var gltfUrl = ""
    data.formats.forEach(element => {
        if (element.formatType == "GLTF2") {
            gltfUrl = element.root.url;
        }
    });
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', gltfUrl);

    document.getElementById("fox").setAttribute("gltf-model", gltfUrl);
};

request.send();