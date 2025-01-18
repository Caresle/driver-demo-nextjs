import React from "react"
import Card from "../shared/card"
import { Button } from "@/components/ui/button"
import DemoModal from "./demo-modal"
import ModalTrigger from "./modal-trigger"

export default function UsingModals() {
	return (
		<Card>
			<div className="flex items-center gap-2">
				<h2 className="font-semibold text-2xl">Using modals</h2>
				<Button>Start</Button>
			</div>
			<p>
				This is a demo for when you want to use the driver between a modal and a
				normal component
			</p>

			<div className="border p-2 rounded-lg gap-2 bg-slate-50 items-center justify-center flex flex-col">
				<DemoModal />
				<ModalTrigger />
			</div>
		</Card>
	)
}
