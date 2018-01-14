import * as moment from 'moment';

export class BlogPost {
    public id:number
    public content:string
    public postDate:moment.Moment
    public createdAt:moment.Moment
    public updatedAt:moment.Moment

    constructor(id, content, postDate, createdAt, updatedAt) {
        this.id = id;
        this.content = content;
        this.postDate = postDate;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}