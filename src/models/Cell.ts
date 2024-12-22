import {Colors} from './Colors.ts'
import {Board} from './Board.ts'

export class Cell {
	readonly x: number
	readonly y: number
	readonly color: Colors
	figure: string | null
	board: Board
	available: boolean = false //possibility to move here
	id: number = Math.random() // for react keys
	
	constructor(x: number, y: number, color: Colors, figure: string | null, board: Board, available: boolean, id: number) {
		this.x = x
		this.y = y
		this.color = color
		this.figure = figure
		this.board = board
		this.available = available
		this.id = id
	}
}