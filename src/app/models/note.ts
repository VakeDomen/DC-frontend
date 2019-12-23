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
      this.date = new Date(input.date_tag);
      return Object.assign(this, input);
    }

    preprareForUpload(pub: boolean, pinned: boolean): void {
      delete this.user_id;
      this.public = pub ? 1 : 0;
      this.pinned = pinned ? 1 : 0;
    }
    
}