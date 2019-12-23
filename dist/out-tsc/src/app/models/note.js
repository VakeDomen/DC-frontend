export class Note {
    deserialize(input) {
        this.date = new Date(input.date_tag);
        return Object.assign(this, input);
    }
    preprareForUpload(pub, pinned) {
        delete this.user_id;
        this.public = pub ? 1 : 0;
        this.pinned = pinned ? 1 : 0;
    }
}
//# sourceMappingURL=note.js.map