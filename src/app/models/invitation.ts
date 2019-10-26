import { Deserializable } from './deserializable';
import { User } from './user';

export class Invitation implements Deserializable {
    public id: string;
    public email: string;
    public expires_at: Date;
    public resolved: number;
  
  
    deserialize(input: any): this {
      return Object.assign(this, input);
    }
    
}