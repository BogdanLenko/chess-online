import {FC} from 'react'

interface Props {
	className?: string
}

export const CellComponent: FC<Props> = ({className}) => {
	return (
		<div className={`${className} h-20 w-20`}></div>
	)
}