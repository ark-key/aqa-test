describe('DELETE /posts/:id - Delete an existing post', () => {
  it('should delete a post successfully', () => {
    cy.request({
      method: 'DELETE',
      url: '/posts/1',
    }).then((response) => {
      expect([200, 204]).to.include(response.status);
    });
  });

  it('should return 404 Not Found for non-existent post', () => {
    cy.request({
      method: 'DELETE',
      url: '/posts/999',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
