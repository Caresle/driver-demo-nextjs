"use client"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import React from "react"
import { useModals } from "./_states/use-modals.state"

export default function DemoModal() {
	const { show, update } = useModals(state => state)
	return (
		<Dialog onOpenChange={show => update({ show })} open={show}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Modal Header</DialogTitle>
				</DialogHeader>
				<p id="modal-test" className="border p-2 rounded-lg">
					This is a demo of the modal
				</p>
				<p id="modal-test-2" className="border p-2 rounded-lg">
					This is the second step
				</p>
				<p id="modal-test-3" className="border p-2 rounded-lg">
					This is the last step in the modal
				</p>
				<DialogFooter>
					<Button variant={"secondary"} onClick={() => update({ show: false })}>
						Close
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
