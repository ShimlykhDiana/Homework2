const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Евстратов",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Салтыков",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Кутузов",
            "id_12": "Славин",
            "id_13": "Михалков",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Ахилес",
            "id_3": "Гефестион",
            "id_4": "Агамемнон",
            "id_5": "Аарон",
            "id_6": "Иеремия",
            "id_7": "Михаил",
            "id_8": "Эцио",
            "id_9": "Павел",
            "id_10": "Беллерофонт"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {  
            "id_1": "Афродита",
            "id_2": "Микаэла",
            "id_3": "Эвридика",
            "id_4": "Муза",
            "id_5": "Агнесса",
            "id_6": "Евангелина",
            "id_7": "Галатея",
            "id_8": "Даная",
            "id_9": "Евпраксия",
            "id_10": "Фрида"
        }
    }`,

    secondNameJson: `{
        "count": 10,
        "list": {  
            "id_1": "Робертов",
            "id_2": "Дмитриев",
            "id_3": "Виссарионов",
            "id_4": "Моисеев",
            "id_5": "Самуилов",
            "id_6": "Юлианов",
            "id_7": "Витольдов",
            "id_8": "Лазарев",
            "id_9": "Максимильянов",
            "id_10": "Минаев"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {  
            "id_1": "Мореплаватель",
            "id_2": "Королевская стража",
            "id_3": "Лесоруб",
            "id_4": "Трактирщик",
            "id_5": "Смутьян",
            "id_6": "Пастух",
            "id_7": "Учёный",
            "id_8": "Придворный маг",
            "id_9": "Десница",
            "id_10": "Трубадур"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {  
            "id_1": "Писательница",
            "id_2": "Первооткрывательница",
            "id_3": "Пиратка",
            "id_4": "Лучница",
            "id_5": "Сиделка",
            "id_6": "Законодательница мод",
            "id_7": "Королева",
            "id_8": "Прядильщица",
            "id_9": "Гейша",
            "id_10": "Участница турниров"
        }
    }`,
    birthDateJson: `{
        "count": 12,
        "list": {     
            "id_1": {"name": "января", "month": 31},
            "id_2": {"name": "февраля", "month": 28},
            "id_3": {"name": "марта", "month": 31},
            "id_4": {"name": "апреля", "month": 30},
            "id_5": {"name": "мая", "month": 31},
            "id_6": {"name": "июня", "month": 30},
            "id_7": {"name": "июля", "month": 31},
            "id_8": {"name": "августа", "month": 31},
            "id_9": {"name": "сентября", "month": 30},
            "id_10": {"name": "октября", "month": 31},
            "id_11": {"name": "ноября", "month": 30},
            "id_12": {"name": "декабря", "month": 31}
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomGender: function() {
        return this.randomIntNumber() === 0  ? this.GENDER_FEMALE : this.GENDER_MALE
    },

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {

        return this.randomValue(this.person.gender === this.GENDER_FEMALE ? this.firstNameFemaleJson : this.firstNameMaleJson);

    },

    randomSecondName: function() {
        if (this.person.gender === this.GENDER_FEMALE) {
            return this.randomValue(this.secondNameJson) + 'на';
        }
        else {
            return this.randomValue(this.secondNameJson) + 'ич';
        }  
    },

     randomSurname: function() {

        return `${this.randomValue(this.surnameJson)}${this.person.gender === this.GENDER_FEMALE ? 'а' : ''}`;

    },

    randomProfession: function() {
        if (this.person.gender === this.GENDER_FEMALE) {

            return this.randomValue(this.professionFemaleJson);
        }
        else {
            return this.randomValue(this.professionMaleJson);
        }
    },

    randomBirthYear: function () {
        return this.randomIntNumber(1200, 1400);
    },
    // Специально год перед датой, мне так по стилю больше нравится
    randomBirthDate: function() {
        let birthDate=this.randomValue(this.birthDateJson); // fetch month
        return this.randomIntNumber(birthDate.month,1) +' '+ birthDate.name; 
    //     return this.randomIntNumber(this.randomValue(this.birthDateJson.month)) +' '+ this.randomValue(this.birthDateJson.name);
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.secondName = this.randomSecondName();
        this.person.birthYear = this.randomBirthYear();
        this.person.birthDate = this.randomBirthDate();
        this.person.surname = this.randomSurname();
        this.person.profession = this. randomProfession();
       
        
        return this.person;
        
    }
};
