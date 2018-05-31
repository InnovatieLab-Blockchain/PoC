const uportLogin = function () {
    universiteitConnect.requestCredentials({
        requested: ['name', 'phone', 'country', 'avatar'],
        notifications: true
    }).then((credentials) => {
        console.log("Credentials:", credentials);

        user_data.uportId = credentials.address;
        user_data.uportName = credentials.name;
        user_data.uportCountry = credentials.country;
        user_data.uportPhone = credentials.phone;
        sessionStorage.setItem("uportID", user_data.uportId);
        sessionStorage.setItem("uportName", user_data.uportName);
        window.location.href = "issue.html";
    })
};



var openFile = function (event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function () {
        var text = reader.result;
        sessionStorage.setItem("textFile", text);
        var node = document.getElementById('output');
        node.innerText = text;
        console.log(reader.result.substring(0, 1000));
    };
    reader.readAsText(input.files[0]);
};