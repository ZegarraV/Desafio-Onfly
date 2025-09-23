"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
class Random {
    constructor() {
        this.description = {
            displayName: 'Random',
            name: 'random',
            icon: 'file:Random.node.svg',
            group: ['transform'],
            version: 1,
            subtitle: '= {{ $parameter["operation"] }}',
            description: 'Gera um número aleatório utilizando a API do Random.org',
            defaults: {
                name: 'Random',
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'True Random Number Generator',
                            value: 'generate',
                            action: 'Gera um número aleatório',
                        },
                    ],
                    default: 'generate',
                },
                {
                    displayName: 'Min',
                    name: 'minValue',
                    type: 'number',
                    default: 1,
                    required: true,
                    description: 'O valor mínimo para o número aleatório (inclusivo)',
                    displayOptions: {
                        show: {
                            operation: ['generate'],
                        },
                    },
                },
                {
                    displayName: 'Max',
                    name: 'maxValue',
                    type: 'number',
                    default: 100,
                    required: true,
                    description: 'O valor máximo para o número aleatório (inclusivo)',
                    displayOptions: {
                        show: {
                            operation: ['generate'],
                        },
                    },
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            const minValue = this.getNodeParameter('minValue', i);
            const maxValue = this.getNodeParameter('maxValue', i);
            const apiUrl = `https://www.random.org/integers/`;
            const options = {
                method: 'GET',
                qs: {
                    num: 1,
                    min: minValue,
                    max: maxValue,
                    col: 1,
                    base: 10,
                    format: 'plain',
                    rnd: 'new',
                },
                uri: apiUrl,
                json: false,
            };
            const response = await this.helpers.request(options);
            const randomNumber = parseInt(response, 10);
            returnData.push({
                json: {
                    randomNumber: randomNumber,
                },
            });
        }
        return [this.helpers.returnJsonArray(returnData)];
    }
}
exports.Random = Random;
//# sourceMappingURL=Random.node.js.map