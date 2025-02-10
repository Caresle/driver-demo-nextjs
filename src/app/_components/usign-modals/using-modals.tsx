"use client"
import React from "react"
import Card from "../shared/card"
import { Button } from "@/components/ui/button"
import DemoModal from "./demo-modal"
import ModalTrigger from "./modal-trigger"
import useTutor, { CustomDriveStep } from "@/tutor/useTutor"
import { useModals } from "./_states/use-modals.state"

export default function UsingModals() {
	const tutor = useTutor()
	const { update } = useModals(state => state)

	const onStart = () => {
		const steps: CustomDriveStep[] = [
			{
				element: "#before-start",
				popover: {
					title: "Modal Header",
					description: "This is a demo of the modal",
				},
			},
			{
				element: "#modal-test",
				popover: {
					title: "Modal Header",
					description: "This is a demo of the modal",
				},
				isModal: true,
				isFirstModalStep: true,
				triggerModalFn: () => update({ show: true }),
			},
			{
				element: "#modal-test-2",
				popover: {
					title: "Modal Header",
					description: "This is a demo of the modal",
				},
			},
			{
				element: "#modal-test-3",
				popover: {
					title: "Modal Header",
					description: "This is a demo of the modal",
				},
				isModal: true,
				isLastModalStep: true,
				triggerModalFn: () => update({ show: false }),
			},
			{
				element: "#after-end",
				popover: {
					title: "Modal Header",
					description: "This is a demo of the modal",
				},
			},
		]

		tutor.tour(steps)
	}

	return (
		<Card>
			<div className="flex items-center gap-2">
				<h2 className="font-semibold text-2xl">Using modals</h2>
				<Button onClick={onStart}>Start</Button>
			</div>
			<p>
				This is a demo for when you want to use the driver between a modal and a
				normal component
			</p>

			<div className="border p-2 rounded-lg gap-2 bg-slate-50 items-center justify-center flex flex-col">
				<div className="flex items-center gap-2">
					<div id="before-start" className="p-2 rounded-lg border bg-white">
						<p>This should be highlight before the modal</p>
					</div>
					<div id="after-end" className="p-2 rounded-lg border bg-white">
						<p>This should be highlight after the modal</p>
					</div>
				</div>
				<DemoModal />
				<ModalTrigger />
			</div>
		</Card>
	)
}
