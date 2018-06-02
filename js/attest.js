

const addEntry = () => {
    let e = document.getElementById('diploma');
    let studienaam = e.options[e.selectedIndex].text;
    let salt = 'groningen';

    let jsonObj = JSON.parse(localStorage.getItem(studienaam));
    let newId = document.getElementById("entryId").value;
    let newValue = document.getElementById("entryId").value;
    jsonObj.studie.studenten[newId] = newValue;

    console.log(jsonObj)
    localStorage.setItem(studienaam, JSON.stringify(jsonObj))
    alert('id: ' + newId + '\n' + 'salt: ' + newValue + '\n' + 'added to: ' + studienaam);
};



const deleteEntry = () => {
    let e = document.getElementById('diploma');
    let studienaam = e.options[e.selectedIndex].text;
    let salt = 'groningen';

    let jsonObj = JSON.parse(localStorage.getItem(studienaam));

    var key = document.getElementById("entryId").value;
    delete jsonObj.studie.studenten[key];

    console.log(jsonObj)
    localStorage.setItem(studienaam, JSON.stringify(jsonObj))
    alert('id: ' + key + '\n' + 'deleted from: ' + studienaam);
};
