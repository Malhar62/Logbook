import { types, getSnapshot } from "mobx-state-tree";


const Common = types.model({
    source: types.model({
        id: types.maybe(types.maybeNull(types.string)),
        name: types.maybe(types.maybeNull(types.string))
    }),
    author: types.maybe(types.maybeNull(types.string)),
    title: types.maybe(types.maybeNull(types.string)),
    description: types.maybe(types.maybeNull(types.string)),
    url: types.maybe(types.maybeNull(types.string)),
    urlToImage: types.maybe(types.maybeNull(types.string)),
    publishedAt: types.maybe(types.maybeNull(types.string)),
    content: types.maybe(types.maybeNull(types.string)),
    type: types.maybe(types.maybeNull(types.string)),
})

const RootStore1 = types.model({
    likes: types.optional(types.array(Common), []),
    visited: types.optional(types.array(Common), []),
    isLogin: types.optional(types.boolean, false),
})
    .actions((self) => ({
        addToLike(data) {
            let obj = {
                source: data.item.source,
                author: data.item.author,
                title: data.item.title,
                description: data.item.description,
                url: data.item.url,
                urlToImage: data.item.urlToImage,
                publishedAt: data.item.publishedAt,
                content: data.item.content,
                type: data.type
            }
            var count = 0;
            self.likes.forEach(item => {
                if (item.title == obj.title && item.author == obj.author) {
                    count++;
                }
            })
            if (count == 0) {
                self.likes.push(obj)
                console.log('added')
            }
        },
        deleteFromLike(index) {
            self.likes.splice(index, 1)
        },
        addToVisited(data) {
            let obj = {
                source: data.info.source,
                author: data.info.author,
                title: data.info.title,
                description: data.info.description,
                url: data.info.url,
                urlToImage: data.info.urlToImage,
                publishedAt: data.info.publishedAt,
                content: data.info.content,
                type: data.type
            }
            var count = 0;
            self.visited.forEach((item, index) => {
                if (item.title == obj.title && item.author == obj.author) {
                    self.visited.splice(index, 1)
                }
            })
            self.visited.push(obj)
            console.log('added to visited : ' + self.visited.length)
        },
        deleteFromVisited(id) {
            self.visited.splice(id, 1)
        },
        signUp() {
            self.isLogin = true;
        },
        signOut() {
            self.isLogin = false;
        }
    }))


export const newsStore = RootStore1.create({})
// {"source":{"id":null,"name":"NDTV News"},
//  * "author":"Ajay Pal Singh",
//"title":"\"With Covid, Things Are Very Uncertain\": Virat Kohli On Cancelled 5th Test | Cricket News - NDTVSports.com",
//  * "description":"Virat Kohli opened up about the cancelled Manchester Test match and said with Covid in place, things are very uncertain.",
//  * "url":"https://sports.ndtv.com/cricket/with-covid-things-are-very-uncertain-virat-kohli-on-cancelled-5th-test-2540201",
//  * "urlToImage":"https://c.ndtvimg.com/2021-08/rlm5e8_virat-kohli-afp_625x300_28_August_21.jpg",
//  * "publishedAt":"2021-09-14T06:50:55Z",
//  * "content":"Virat Kohli arrived