class Post {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static comparePosts(item1, item2) {
        return item1.date - item2.date;
    }
}

const posts = [
    new Post('title 1', new Date(2018,8,4)),
    new Post('title 2', new Date(2018,4,9)),
    new Post('title 3', new Date(2019,6,10)),
    new Post('title 4', new Date(2019,5,19))
]

let a = posts.sort(Post.comparePosts)
