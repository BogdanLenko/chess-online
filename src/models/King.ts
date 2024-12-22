import {Figure, FigureNames} from './Figure.ts'
import {Colors} from './Colors.ts'
import {Cell} from './Cell.ts'

export class King extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.name = FigureNames.KING
		this.logoLink = `/${color}/${this.name}.svg`
	}
}