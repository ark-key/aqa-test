describe('PUT /posts/:id - Update an existing post', () => {
  const requestInit = {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  it('should update the post successfully', () => {
    cy.request({
      ...requestInit,
      url: '/posts/1',
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('should return 404 Not Found for non-existent post', () => {
    cy.request({
      ...requestInit,
      url: '/posts/999',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
