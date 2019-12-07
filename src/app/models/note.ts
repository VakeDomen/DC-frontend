import { Deserializable } from './deserializable';
import { User } from './user';

export class Note implements Deserializable {
    public id: string;
    public user_id: string;
    public group_id?: string;
    public title: string;
    public date_tag: string;
    public date?: Date;
    public body: string;
    public public: number;
    public pinned: number;
  
  
    deserialize(input: any): this {
      return Object.assign(this, input);
    }
    
}