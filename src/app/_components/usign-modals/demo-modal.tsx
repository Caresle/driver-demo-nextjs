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
				<p>This is a demo of the modal</p>
				<DialogFooter>
					<Button variant={"secondary"} onClick={() => update({ show: false })}>
						Close
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
