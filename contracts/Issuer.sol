pragma solidity ^0.4.23;

contract Issuer {
    //verplichte velden
    string public id;
    string public typeOB;
    string public name;
    string public url;
    string public email;
    //optionele velden
    string public telephone;
    string public description;
    Image public image;

    constructor(string _id, string _typeOB, string _name, string _url, string _email) public {
        id = _id;
        typeOB =_typeOB;
        name = _name;
        url = _url;
        email = _email;
    }

    function setTelephone(string _telephone) public {
        telephone = _telephone;
    }

    function setDescription(string _description) public {
        description = _description;
    }

    function setImage(string _id, string _typeImage, string _caption, string _author) public {
        image = Image(_id, _typeImage, _caption, _author);
    }

    struct Image {
        string id;
        //optionele velden
        string typeImage;
        string caption;
        string author;
    }

}