## Test Title: Update post

### Description:

This test case checks the behavior when updating an existing post.

### Preconditions:

- The API server is running.
- The post ID used in the request exists in the database.

### Test Steps:

1. Send a `PUT` request to the `/posts/<id>` endpoint for updating a post with a valid post ID and new data.
2. Observe the response.

### Expected Results:

- The response status should be `200 OK`.
