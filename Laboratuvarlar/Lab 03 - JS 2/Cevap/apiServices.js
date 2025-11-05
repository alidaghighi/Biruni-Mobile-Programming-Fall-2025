/*
#### **File: `apiService.js`**

1.  **Import Data:**  
      * At the top of `apiService.js`, import the `posts` and `comments` arrays from `./data.js`.  
2.  **Create Utility Functions (Named Exports):**  
      * Create and `export` a function named `getPostDetails(post)`. This function should take a post object, use **object destructuring** to extract its properties, and return a new object that includes the original post properties plus a new `titleLength` property.  
      * Create and `export` a second function named `getPostAuthor(post)`. This function should simply take a post object and return its author.  

#### ** Testing Your Progress (Milestone 1)**

To test your work so far, you can add temporary test code to the bottom of your `apiService.js` file.

1.  **Get a sample post:** `const samplePost = posts[0];`  
2.  **Test the functions:**

    ```javascript
    console.log("Testing Milestone 1...");
    const details = getPostDetails(samplePost);
    const author = getPostAuthor(samplePost);
    console.log("Post Details with Length:", details);
    console.log("Author:", author);
    ```
3.  Run `node apiService.js` in your terminal. You should see the details of the first post (including its title length) and its author printed. 
*/

import { posts, comments } from './data.js';

export function getPostDetails(post) {
    const { id, title } = post;
    return {
        id,
        title,
        titleLength: title.length
    };
}

export function getPostAuthor(post) {
    return post.author;
}

// Temporary test code for Milestone 1
// console.log("Testing Milestone 1...");
// const samplePost = posts[0];
// const details = getPostDetails(samplePost);
// const author = getPostAuthor(samplePost);
// console.log("Post Details with Length:", details);
// console.log("Author:", author);


/*
### **Milestone 2: Simulating an API with Promises**

Now, let's simulate the asynchronous nature of a real-world API by creating functions that return Promises.

#### **File: `apiService.js` (continued)**

1.  **Function to Fetch All Posts:**  
      * Create and `export` a function `fetchAllPosts()`.  
      * This function should return a `new Promise`.  
      * Inside the promise, use a `setTimeout` to simulate a 1-second network delay.  
      * After the delay, the promise should **resolve** with the imported `posts` array.  
2.  **Function to Fetch Comments for a Post:**  
      * Create and `export` a function `fetchCommentsByPostId(postId)`.  
      * This function should also return a `new Promise`.  
      * Inside, use `setTimeout` for a 500ms delay.  
      * After the delay, use the `.filter()` array method on the `comments` array to find all comments matching the `postId`.  
      * The promise should **resolve** with the filtered array of comments.  
3.  **Function to Find a Specific Post:**  
      * Create and `export` a function `findPostById(postId)`.  
      * This function returns a `new Promise` with a 500ms delay.  
      * Inside, use the `.find()` array method to get the post that matches `postId`.  
      * **Error Handling:** If no post is found, the promise should **reject** with an error message (e.g., `new Error("Post not found!")`). Otherwise, it should **resolve** with the found post object.  

#### ** Testing Your Progress (Milestone 2)**

Add temporary test code to the bottom of `apiService.js` to test your promise-based functions using `.then()` and `.catch()`.

```javascript
console.log("Testing Milestone 2...");
fetchAllPosts()
  .then(allPosts => {
    console.log("Successfully fetched all posts:", allPosts.length);
    return findPostById(1); // Test finding a valid post
  })
  .then(post => {
    console.log("Successfully found post 1:", post);
    return fetchCommentsByPostId(post.id);
  })
  .then(comments => {
    console.log(`Found ${comments.length} comments for post 1:`, comments);
  })
  .catch(error => {
    console.error("An error occurred during testing:", error.message);
  });

// Test the rejection case
findPostById(99)
  .catch(error => {
      console.error("Testing rejection: ", error.message); // Should log "Post not found!"
  });
```
*/

export function fetchAllPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({status: "success", data: posts});
        }, 1000);
    });
}

export function fetchCommentsByPostId(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredComments = comments.filter(comment => comment.postId === postId);
            resolve({status: "success", data: filteredComments});
        }, 500);
    });
}

export function findPostById(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = posts.find(p => p.id === postId);
            if (post) {
                resolve({status: "success", data: post});
            } else {
                reject({status: "error", message: "Post not found!"});
            }
        }, 500);
    });
}


// Temporary test code for Milestone 2
// console.log("Testing Milestone 2...");
// fetchAllPosts()
//   .then(result => {
//     const allPosts = result.data;
//     console.log("Successfully fetched all posts:", allPosts.length);
//     return findPostById(1); // Test finding a valid post
//   })
//   .then(result => {
//     const post = result.data;
//     console.log("Successfully found post 1:", post);
//     return fetchCommentsByPostId(post.id);
//   })
//   .then(result => {
//     const comments = result.data;
//     console.log(`Found ${comments.length} comments for post 1:`, comments);
//   })
//   .catch(error => {
//     console.error("An error occurred during testing:", error.message);
//   });

// // Test the rejection case
// findPostById(99)
//   .catch(error => {
//       console.error("Testing rejection: ", error.message); // Should log "Post not found!"
//   });