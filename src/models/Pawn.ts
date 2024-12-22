import {Figure, FigureNames} from './Figure.ts'
import {Colors} from './Colors.ts'
import {Cell} from './Cell.ts'

export class Pawn extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.name = FigureNames.PAWN
		this.logoLink = `/${color}/${this.name}.svg`
	}
}