class PhishnooSandboxApi {
  name = 'phishnooSandboxApi';
  displayName = 'Phishnoo Sandbox API';
  documentationUrl = 'https://api.phishnoo.nl/docs';
  properties = [{displayName: 'Sandbox key', name: 'sandboxKey', type: 'string',
    typeOptions: {password: true}, default: '', required: true}];
  authenticate = {type: 'generic', properties: {
    headers: {Authorization: '=Bearer {{$credentials.sandboxKey}}'},
  }};
  test = {request: {baseURL: 'https://api.phishnoo.nl', url: '/v1/me'}};
}

module.exports = {PhishnooSandboxApi};
