

const addEntry = () => {
    let e = document.getElementById('diploma');
    let studienaam = e.options[e.selectedIndex].text;
    alert(studienaam);
    let salt = 'groningen';
    let jsonObj = "test";
    
    if (localStorage.getItem(studienaam) === undefined) {
        localStorage.setItem(studienaam, JSON.stringify(""))
    
    } else {    
    let jsonObj = JSON.parse(localStorage.getItem(studienaam))
    }

    alert(jsonObj);
    let newId = document.getElementById("entryId").value;
    let newValue = document.getElementById("entryId").value;
    jsonObj[newId] = newValue;

    console.log(jsonObj)
    localStorage.setItem(studienaam, JSON.stringify(jsonObj))
    alert('id: ' + newId + '\n' + 'salt: ' + newValue + '\n' + 'added to: ' + studienaam);
    }    
    ;



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


const addStudy = () => {
    
    let studieAdd = JSON.parse(localStorage.getItem('studies'));
    let study = document.getElementById('studyName').value;
    
    let ipfsUrl = document.getElementById('ipfsUrl').value;
  

    studieAdd[study] = ipfsUrl;
    localStorage.setItem('studies', JSON.stringify(studieAdd));
    console.log(studieAdd)
}


// accountancy = "https: //ipfs.io/ipfs/QmbQ2qLv87RxBJCdF7RXNVpmzwd7WWRdJNBEkbfpXe3faH"
// journalistiek = "https://ipfs.io/ipfs/Qmb8Dy8kDrniSgGHoZ8xGi9Y5pUwBWyVfTFyHxExwgfNhS";