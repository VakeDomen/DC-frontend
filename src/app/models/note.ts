import { Deserializable } from './deserializable';
import { User } from './user';

export class Note implements Deserializable {
    public id: string;
    public user_id: string;
    public title: string;
    public date_tag: string;
    public date?: Date;
    public body: string;
  
  
    deserialize(input: any): this {
      return Object.assign(this, input);
    }
    
}