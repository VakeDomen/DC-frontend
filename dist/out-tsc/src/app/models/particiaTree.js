export class PatriciaTree {
    insertWord(word, obj) {
        if (!this.children) {
            this.children = [];
        }
        if (word.length === 0) {
            return;
        }
        let letterChild = null;
        for (const child of this.children) {
            if (child.char === word.charAt(0)) {
                letterChild = child;
                break;
            }
        }
        if (letterChild === null) {
            letterChild = new Node(word, obj);
            this.children.push(letterChild);
        }
        else {
            letterChild.insert(word, obj);
        }
    }
    collect(prefix) {
        if (prefix.length === 0 || this.children.length === 0) {
            return null;
        }
        //traverse
        for (const child of this.children) {
            if (child.char === prefix.charAt(0)) {
                return child.collect(prefix.substr(1));
            }
        }
    }
}
class Node {
    constructor(word, obj) {
        this.char = word.charAt(0);
        this.children = [];
        if (word.length === 1) {
            this.leaf = true;
            this.obj = obj;
        }
        else {
            this.leaf = false;
            this.children.push(new Node(word.substr(1), obj));
        }
    }
    collect(prefix) {
        if (prefix.length === 0) {
            //collect
            const notes = [];
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
        }
        else {
            //traverse    
            if (this.children.length === 0) {
                return [];
            }
            for (const child of this.children) {
                if (child.char === prefix.charAt(0)) {
                    return child.collect(prefix.substr(1));
                }
            }
        }
    }
    insert(word, obj) {
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
//# sourceMappingURL=particiaTree.js.map