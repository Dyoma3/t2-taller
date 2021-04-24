const app = require('../../src/app');

describe('\'artists\' service', () => {
  it('registered the service', () => {
    const service = app.service('artists');
    expect(service).toBeTruthy();
  });
});
