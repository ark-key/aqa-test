## Title: POST request to /posts endpoint returns incorrect status code when required fields are missing

### Steps to Reproduce:

1. Make POST request to /posts endpoint without required fields

### Observed Result:

Endpoint returns status code 201.

### Expected Result:

Endpoint returns 400 Bad Request.

### Environment:

- Cypress: 14.1.0
- Browser: Electron 130 (headless)
- Node Version: v22.14.0
