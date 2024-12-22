import {Figure, FigureNames} from './Figure.ts'
import {Colors} from './Colors.ts'
import {Cell} from './Cell.ts'

export class Rook extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.name = FigureNames.ROOK
		this.logoLink = `/${color}/${this.name}.svg`
	}
}