const reportOnly = {show: {operation: ['report']}};

class PhishnooSandbox {
  description = {
    displayName: 'Phishnoo Sandbox',
    name: 'phishnooSandbox',
    icon: 'file:phishnoo.svg',
    group: ['transform'],
    version: 1,
    description: 'Read sandbox scores or submit a synthetic report',
    defaults: {name: 'Phishnoo Sandbox'},
    inputs: ['main'],
    outputs: ['main'],
    credentials: [{name: 'phishnooSandboxApi', required: true}],
    requestDefaults: {baseURL: 'https://api.phishnoo.nl', headers: {Accept: 'application/json'}},
    properties: [
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        default: 'scores',
        options: [
          {name: 'Get Scores', value: 'scores', action: 'Get sandbox scores',
            routing: {request: {method: 'GET', url: '/v1/scores'}}},
          {name: 'Submit Example Report', value: 'report', action: 'Submit an example report',
            routing: {request: {method: 'POST', url: '/v1/threats'}}},
        ],
      },
      {
        displayName: 'Example Report Title',
        name: 'title',
        type: 'string',
        default: '',
        required: true,
        displayOptions: reportOnly,
        routing: {send: {type: 'body', property: 'title'}},
      },
    ],
  };
}

module.exports = {PhishnooSandbox};
