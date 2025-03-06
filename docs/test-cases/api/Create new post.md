## Test Title: Create new post

### Description:

This test case checks the behavior when creating a new post with all required fields.

### Preconditions:

- The API server is running.

### Test Steps:

1. Send a `POST` request to the `/posts` endpoint for creating a post with required fields.
2. Observe the response.

### Expected Results:

- The response status should be `201 Created`.
