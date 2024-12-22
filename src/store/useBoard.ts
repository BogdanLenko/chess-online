import {create} from 'zustand/react'
import {Board} from '../models/Board.ts'

interface BoardStore {
	board: Board
	setBoard: (board: Board) => void
	restart: () => void
}

export const useBoard = create<BoardStore>((set) => ({
	board: new Board(),
	setBoard: (board) => set({board}),
	restart: () => {
		const newBoard = new Board()
		newBoard.initCells()
		set({board: newBoard})
	}
}))