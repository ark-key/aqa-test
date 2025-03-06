describe('POST /posts - Create a new post', () => {
  const requestInit = {
    url: '/posts',
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  it('should create a new post successfully', () => {
    cy.request({
      ...requestInit,
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it('should return 400 Bad Request when required fields are missing', () => {
    cy.request({
      ...requestInit,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });
});
