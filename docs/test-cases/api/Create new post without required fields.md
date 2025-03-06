## Test Title: Create new post without required fields

### Description:

This test case checks the behavior when attempting to create a new post without providing all the required fields.

### Preconditions:

- The API server is running.

### Test Steps:

1. Send a `POST` request to the `/posts` endpoint for creating a post without required fields
2. Observe the response

### Expected Results:

- The response status should be `400 Bad Request`.
