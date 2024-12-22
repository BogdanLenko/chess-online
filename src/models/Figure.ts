import {Colors} from './Colors.ts'
import {Cell} from './Cell.ts'

export enum FigureNames {
	FIGURE = 'figure',
	PAWN = 'pawn',
	ROOK = 'rook',
	KNIGHT = 'knight',
	BISHOP = 'bishop',
	QUEEN = 'queen',
	KING = 'king'
}

export class Figure {
	color: Colors
	logoLink: string | null = null
	cell: Cell
	name: FigureNames
	id: number
	
	constructor(color: Colors, cell: Cell) {
		this.cell = cell
		this.color = color
		this.name = FigureNames.FIGURE
		this.id = Math.random()
		this.logoLink = `/${color}/${this.name}.svg`
		this.cell.figure = this
	}
	
	canMoveTo(target: Cell): boolean {
		return true
	}
	moveTo(target: Cell): void {
		this.cell.figure = null
		this.cell = target
		this.cell.figure = this
	}
}