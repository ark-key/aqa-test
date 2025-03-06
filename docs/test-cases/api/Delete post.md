## Test Title: Delete post

### Description:

This test case checks the behavior when deleting an existing post.

### Preconditions:

- The API server is running.
- The post ID used in the request exists in the database.

### Test Steps:

1. Send a `DELETE` request to the `/posts/<id>` endpoint for deleting a post with an existing post ID.
2. Observe the response.

### Expected Results:

- The response status should be `200 OK` or `204 No Content`.
