import {Figure, FigureNames} from './Figure.ts'
import {Colors} from './Colors.ts'
import {Cell} from './Cell.ts'

export class Bishop extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.name = FigureNames.BISHOP
		this.logoLink = `/${color}/${this.name}.svg`
	}
}