


document.querySelector('#Generate').addEventListener('click', function (onload) {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#secondNameOutput').innerText = initPerson.secondName;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
    document.querySelector('#birthDateOutput').innerText = initPerson.birthDate;
   
  
});

document.querySelector('#Cancel').addEventListener('click', function () {
    location.reload();
});
