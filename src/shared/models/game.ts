import { IGame } from './../interfaces/index';

export { Game };
export default class Game implements IGame {

	constructor(
		public id: string,
		public name: string,
	) { }

}