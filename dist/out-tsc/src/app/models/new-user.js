export class NewUser {
    checkData(password) {
        if (this.name === '') {
            return false;
        }
        if (this.email === '') {
            return false;
        }
        if (this.password === '') {
            return false;
        }
        if (this.password !== password) {
            return false;
        }
        return true;
    }
}
//# sourceMappingURL=new-user.js.map