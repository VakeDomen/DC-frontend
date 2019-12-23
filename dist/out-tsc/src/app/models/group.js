export class Group {
    deserialize(input) {
        this.cration_date = new Date(input.created_at);
        return Object.assign(this, input);
    }
    preprareForUpload(user, color) {
        delete this.id, this.created_at, this.cration_date, this.created_by;
        this.color = color;
    }
}
//# sourceMappingURL=group.js.map