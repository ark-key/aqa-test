## Test Title: Delete non-existent post

### Description:

This test case checks the behavior when attempting to delete a post that does not exist.

### Preconditions:

- The API server is running.
- The post ID used in the request does not exist in the database.

### Test Steps:

1. Send a `DELETE` request to the `/posts/<id>` endpoint for deleting a post with a non-existent post ID.
2. Observe the response.

### Expected Results:

- The response status should be `404 Not Found`.
