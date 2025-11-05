/*
### **Milestone 3: Consuming the API with Async/Await**

This is where everything comes together. We will use the modern `async/await` syntax to consume the "API" we just built in a clean and readable way.

#### **File: `app.js`**

1.  **Import Everything:**  
      * Import all the exported functions (`getPostDetails`, `getPostAuthor`, `fetchAllPosts`, etc.) from `./apiService.js` using named import syntax.  
      * Example: `import { fetchAllPosts, findPostById, ... } from './apiService.js';`  
2.  **Create the Main Async Function:**  
      * Create an `async function` named `displayPostData()`. The rest of the logic will go inside this function.  
3.  **Implement the Logic with `await`:**  
      * Inside `displayPostData`:    
          * Call `fetchAllPosts()` using `await` and store the result in a variable. Log the titles of all fetched posts.  
          * Choose a valid post ID (e.g., `1`) and call `findPostById()` with it, using `await`. Store the result.  
          * Call `fetchCommentsByPostId()` with the same ID, using `await`. Store the result.  
          * Log the details of the specific post and its comments.  
          * Log the error message if any of the promises reject (e.g., `console.error(error.message);`).  
4.  **Using Spread and Destructuring:**
      * After fetching a specific post, use the **spread operator** to create a new object that includes all properties of the post, plus a `fetchTime` property with the current date (`new Date()`).
      * Use **destructuring with rest** to separate the `id` from the rest of the post's properties into a new object.
        ```javascript
        const { id, ...postInfo } = specificPost;
        console.log("Post Info (without ID):", postInfo);
        ```
5.  **Run the Application:**
      * Call `displayPostData()` at the bottom of `app.js`.

#### ** Testing Your Progress (Milestone 3)**

This is the final test.

1.  Open your terminal in the project folder and run `node app.js`.
2.  You should see the logs appear sequentially: all post titles, the details of a specific post, its comments, the `undefined` result from optional chaining, and the destructured post info.
3.  **Test the error handling:** In `app.js`, change `findPostById(1)` to `findPostById(99)` and run `node app.js` again. This time, you should only see the error message from your `catch` block.
*/

import { fetchAllPosts, findPostById, fetchCommentsByPostId } from './apiServices.js';

async function displayPostData() {
    let allPosts, specificPost, comments;
    allPosts = await fetchAllPosts()
                    .then(result => result.data)
                    .catch(error => {
                        console.error("Error fetching all posts:", error.message);
                    });
    console.log("All Posts:");
    allPosts.forEach(post => {
        console.log(`- ${post.title}`);
    });
    specificPost = await findPostById(1)
                        .then(result => result.data)
                        .catch(error => {
                            console.error("Error finding post:", error.message);
                        });
    comments = await fetchCommentsByPostId(specificPost.id)
                    .then(result => result.data)
                    .catch(error => {
                        console.error("Error fetching comments:", error.message);
                    });
    console.log("Specific Post:");
    console.log(specificPost);
    console.log("Comments:");
    comments.forEach(comment => {
        console.log(`- ${comment.body}`);
    });

    const newObject = { ...specificPost, fetchTime: new Date() };
    console.log("New Object with Fetch Time:", newObject);
    const { id, ...postInfo } = specificPost;
    console.log("Post Info (without ID):", postInfo);


    // Challenge 1: Combine Data with Promise.all
    setTimeout(() => {}, 3000); // Just to separate logs
    console.log("\nChallenge 1: Combine Data with Promise.all");
    const postWithComments = await getPostWithComments(1);
    console.log("Post with Comments (using Promise.all):", postWithComments);
}

displayPostData();


/*
### **Challenge Section**

1.  **Challenge 1: Combine Data with `Promise.all`**

      * Create a new `async` function called `getPostWithComments(postId)`.
      * Inside this function, use `Promise.all` to call `findPostById(postId)` and `fetchCommentsByPostId(postId)` *concurrently* (at the same time).
      * Use array destructuring on the result of `Promise.all` to get the post and comments data.
      * Return a new object that combines the data, like `{ ...post, comments: comments }`.
      * Call this new function from your `displayPostData` function and log the result.

2.  **Challenge 2: Data Transformation with `.map()` and `Object.entries()`**

      * Create a new `async` function called `getFormattedPostData()`.
      * Inside, `await` the result of `fetchAllPosts()`.
      * Use the `.map()` array method on the posts array to transform it. For each post object, return a new string in the format: `"Title: [TITLE], Author: [AUTHOR]"`.
      * **Sub-Challenge:** For each post in the `.map()`, use `Object.entries()` to create a log message that prints all of its key-value pairs.
      * Log the final array of formatted strings.

3.  **Challenge 3: Create a Dynamic "API" Module**

      * Refactor `apiService.js`. Instead of exporting many individual functions, export a **single default object** (the "API client") that contains all the functions as methods.
      * Example: `export default { fetchAllPosts, findPostById, ... };`
      * Update your `app.js` to import this single object and call the methods from it (e.g., `ApiClient.fetchAllPosts()`). This pattern is a very common and clean way to organize related functions.
*/

// Challenge 1: Combine Data with Promise.all
async function getPostWithComments(postId) {
    try {
        const [post, comments] = await Promise.all([
            findPostById(postId),
            fetchCommentsByPostId(postId)
        ]);
        return { ...post.data, comments: comments.data };
    } catch (error) {
        console.error("Error fetching post with comments:", error.message);
    }
}

// Challenge 2: Data Transformation with .map() and Object.entries()
async function getFormattedPostData() {
    try {
        const posts = await fetchAllPosts();
        const formattedPosts = posts.map(post => {
            Object.entries(post).forEach(([key, value]) => {
                console.log(`${key}: ${value}`);
            });
            return `Title: ${post.title}, Author: ${post.author}`;
        });
        formattedPosts.forEach(postString => {
            console.log(postString);
        });
    } catch (error) {
        console.error("Error fetching formatted post data:", error.message);
    }
}
setTimeout(() => {}, 6000); // Just to separate logs
getFormattedPostData();


