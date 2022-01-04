export class Post {
    ytId: string;
    title: string;
    description: string;
    thumbnail: string;
    constructor(ytId: string, title: string, description: string, thumbnail: string) {
        this.ytId = ytId;
        this.title = title;
        this.description = description;
        this.thumbnail = thumbnail;
    }
}
