"use client"
import { Button } from "@/components/ui/button"
import React from "react"
import { useModals } from "./_states/use-modals.state"

export default function ModalTrigger() {
	const { update } = useModals(state => state)
	const openModal = () => update({ show: true })

	return (
		<div className="flex flex-col gap-2 bg-white p-2 rounded-lg border w-1/2">
			<p>This is a demo of the modal trigger</p>
			<Button variant={"secondary"} onClick={openModal}>
				Open Modal
			</Button>
		</div>
	)
}
