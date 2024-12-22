import {FC, useEffect} from 'react'
import {useBoard} from '../../store/useBoard.ts'
import {CellComponent} from '../CellComponent.tsx'
import styles from './BoardComponent.module.sass'

interface Props {
	className?: string
}

export const BoardComponent: FC<Props> = ({className}) => {
	const {board, restart} = useBoard()
	useEffect(() => {
		restart()
	}, [])
	console.log(board.cells)
	return (
		<div className={`${className} rounded-lg flex flex-col w-auto`}>
			{board.cells.map((row, i) => (
				<div key={`row-${i}`} className='flex w-auto'>
					{row.map((cell) => (
						<CellComponent
							key={cell.id}
							className={`w-5 h-5 ${styles[`bg-${cell.color}`]}`}
						/>
					))}
				</div>
			))}
		</div>
	)
}