export default class UserDto {
    email;
    id;
    name;
    lastname;
    birthday;
    phone;

    constructor(model){
        this.email = model.email;
        this.id = model._id;
        this.name = model.name;
        this.lastname = model.lastname;
        this.birthday = model.birthday;
        this.phone = model.phone;
    }
}