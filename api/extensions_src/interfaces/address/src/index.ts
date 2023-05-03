import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'address',
	name: 'Address',
	icon: 'home_pin',
	description: 'Input for address, outputs data is in json',
	component: InterfaceComponent,
	options: null,
	types: ['json', 'text'],
});
