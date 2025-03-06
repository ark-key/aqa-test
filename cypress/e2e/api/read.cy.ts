describe('GET /posts - Fetch all posts', () => {
  it('should fetch all posts successfully', () => {
    cy.request<object[]>({
      method: 'GET',
      url: '/posts',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.above(1);
    });
  });

  it('should return 404 Not Found for non-existent post', () => {
    cy.request({
      method: 'GET',
      url: '/posts/999',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
