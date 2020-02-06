export class User {
    constructor(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }

    getUsername() {
        return this.name; 
    }
}

export default User;