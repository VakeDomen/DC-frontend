import { Deserializable } from './deserializable';
import { Group } from './group';
import { Note } from './note';

export class GroupedNotes implements Deserializable {
    group: Group;
    notes: Note[];
  
    deserialize(input: any): this {
        return Object.assign(this, input);
    }

    
}