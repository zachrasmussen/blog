export class Blog {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.img = data.imgUrl
        this.body = data.body
        this.creatorId = data.creatorId
    }
}