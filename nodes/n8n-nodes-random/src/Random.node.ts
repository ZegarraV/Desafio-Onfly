import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IHttpRequestMethods, 
} from 'n8n-workflow';

export class Random implements INodeType {
	description: INodeTypeDescription = {
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
			// ... (seu código de propriedades está correto e não precisa mudar)
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

	// A função execute é onde a mágica acontece
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			// Pega os valores dos inputs definidos acima
			const minValue = this.getNodeParameter('minValue', i) as number;
			const maxValue = this.getNodeParameter('maxValue', i) as number;

			// Monta a URL da API do Random.org
			const apiUrl = `https://www.random.org/integers/`;
			const options = {
				method: 'GET' as IHttpRequestMethods, // <-- 2. AVISAR QUAL É O TIPO AQUI
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
				// Importante: A API retorna texto puro, então não tentamos fazer o parse como JSON
				json: false,
			};

			// Executa a requisição para a API externa
			const response = await this.helpers.request(options);

			// O resultado vem como texto puro, então precisamos prepará-lo
			const randomNumber = parseInt(response as string, 10);

			// Estrutura o dado de retorno para o n8n
			returnData.push({
				json: {
					randomNumber: randomNumber,
				},
			});
		}

		// Retorna os dados para o próximo nó no workflow
		return [this.helpers.returnJsonArray(returnData)];
	}
}