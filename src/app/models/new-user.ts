
export class NewUser {
    public name: string;
    public email: string;
    public password: string;    

    checkData(password: string): boolean {
        if (this.name === '') {
            return false;
        }
        if (this.email === '') {
            return false;
        }
        if(this.password === '') {
            return false;
        }
        if(this.password !== password) {
            return false;
        }
        return true;
    }

}