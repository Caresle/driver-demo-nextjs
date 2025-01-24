import React from "react"
import Card from "../shared/card"
import {
	TutorHighlight,
	TutorHighlightTrigger,
	TutorHighlightContent,
} from "@/tutor/components/tutor-highlight"

export default function SimpleHighlight() {
	return (
		<Card>
			<TutorHighlight text="Simple Highlight">
				<div className="flex items-center gap-2">
					<h2 className="font-semibold text-2xl">Simple Highlight</h2>
					<TutorHighlightTrigger>Start</TutorHighlightTrigger>
				</div>
				<p className="text-slate-500">
					This is a demo of the simple highlight. That is when driver is being
					used
				</p>
				<div className="w-full bg-slate-50 border rounded-lg flex flex-col items-center gap-2 p-2">
					<TutorHighlightContent className="w-full flex flex-col items-center">
						<div className="flex flex-col gap-2 w-1/2 bg-white p-2 rounded-lg border">
							<h2>Simple Highlight</h2>
						</div>
					</TutorHighlightContent>
				</div>
			</TutorHighlight>
		</Card>
	)
}
