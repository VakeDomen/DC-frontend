import { Note } from './note';

export class PatriciaTree {
    children: Node[];

    insertWord(word: string, obj: Note): void {
        if (!this.children) {
            this.children = [];
        }
        if(word.length === 0) {
            return;
        }
        let letterChild: Node = null;
        for (const child of this.children) {
            if (child.char === word.charAt(0)) {
                letterChild = child;
                break;
            }
        }
        if (letterChild === null) {
            letterChild = new Node(word, obj);
            this.children.push(letterChild);
        } else {
            letterChild.insert(word, obj);
        }
    }

    collect(prefix: string): Note[] {
        if(!prefix || prefix.length === 0 || this.children.length === 0) {
            return [];
        }
        //traverse
        for (const child of this.children) {
            if(child.char === prefix.charAt(0)) {
                return child.collect(prefix.substr(1));
            }
        }    
    }
}


class Node {
    char: string;
    children: Node[];
    leaf: boolean;
    obj: Note;

    constructor(word: string, obj: Note) {
        this.char = word.charAt(0);
        this.children = [];
        if(word.length === 1) {
            this.leaf = true;
            this.obj = obj;
        } else {
            this.leaf = false;
            this.children.push(new Node(word.substr(1), obj));
        }
    }

    collect(prefix: string): Note[] {
        const notes: Note[] = [];
        if (prefix.length === 0) {
            //collect
            if (this.leaf) {
                notes.push(this.obj);
            }
            if (this.children.length === 0) {
                return notes;
            }            
            for (const child of this.children) {
                notes.push(...child.collect(""));
            }
            return notes;
        } else {
            //traverse    
            if(this.children.length === 0) {
                return notes;
            }
            for (const child of this.children) {
                if(child.char === prefix.charAt(0)) {
                    notes.push(...child.collect(prefix.substr(1)));
                }
            }
            return notes;
        }
    }

    insert(word: string, obj: Note): void {
        if (word.length === 1) {
            this.leaf = true;
            this.obj = obj;
            return;
        }
        word = word.substr(1); 
        if (this.children.length > 0) {
            for (const child of this.children) {
                if (child.char === word.charAt(0)) {
                    child.insert(word, obj);
                    return;
                }
            }
        }
        this.children.push(new Node(word, obj));
    }
}