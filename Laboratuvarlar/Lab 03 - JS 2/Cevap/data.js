/*
1.  **Create Posts Data:**  
    * Create and `export` a constant named `posts`.  
    * This should be an array of objects. Each object represents a blog post and must have the followings:  
        *  `id` (number)  
        *  `title` (string)  
        *  `author` (string) properties  
    *  Create at least 4 posts with **unique IDs** and different authors.  
2.  **Create Comments Data:**  
    * Create and `export` another constant named `comments`.  
    * This should be an array of objects. Each comment object must have the followings: 
        * `id` (number)  
        * `postId` (number, linking it to a post)  
        * `text` (string)  
    * Create at least 5 comments, with **unique IDs** ensuring some posts have multiple comments and at least one post has no comments.  
*/

export const posts = [
    { id: 1, title: "First Post", author: "Alice" },
    { id: 2, title: "Second Post", author: "Bob" },
    { id: 3, title: "Third Post", author: "Charlie" },
    { id: 4, title: "Fourth Post", author: "David" },
    { id: 5, title: "Fifth Post", author: "Eve" }
];

export const comments = [
    { id: 1, postId: 1, text: "Great post!" },
    { id: 2, postId: 1, text: "Thanks for sharing!" },
    { id: 3, postId: 2, text: "Very informative." },
    { id: 4, postId: 3, text: "I learned something new." },
    { id: 5, postId: 4, text: "Can't wait for the next one!" }
];