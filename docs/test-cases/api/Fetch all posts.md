## Test Title: Fetch all posts

### Description:

This test case checks the behavior when fetching all posts from the server.

### Preconditions:

- The API server is running.

### Test Steps:

1. Send a `GET` request to the `/posts` endpoint for fetching all posts.
2. Observe the response.

### Expected Results:

- The response status should be `200 OK`.
- The response body should contain a list of posts.
