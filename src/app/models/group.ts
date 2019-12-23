import { Deserializable } from './deserializable';
import { User } from './user';

export class Group implements Deserializable {
    public id: string;
    public created_at: string;
    public cration_date?: Date;
    public created_by: string;
    public name: string;
    public color: string;
    
  
    deserialize(input: any): this {
        this.cration_date = new Date(input.created_at);
        return Object.assign(this, input);
    }

    preprareForUpload(user: User, color: string): void {
        delete this.id, this.created_at, this.cration_date, this.created_by;
        this.color = color;
    }

}