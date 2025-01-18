import { create } from "zustand"

interface ModalState {
	show: boolean
	update: (data: Partial<ModalState>) => void
}

export const useModals = create<ModalState>(set => ({
	show: false,
	update: data => set(data),
}))
