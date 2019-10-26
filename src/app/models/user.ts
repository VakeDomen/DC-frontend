import { Deserializable } from './deserializable';

export class User implements Deserializable {
    public id: string;
    public name: string;
    public email: string;
  
  
    deserialize(input: any): this {
      return Object.assign(this, input);
    }
    
}