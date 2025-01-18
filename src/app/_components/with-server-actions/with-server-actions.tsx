import { Button } from "@/components/ui/button"
import React from "react"
import Card from "../shared/card"

export default function WithServerActions() {
	return (
		<Card>
			<div className="flex items-center gap-2">
				<h2 className="font-semibold text-2xl">With server actions</h2>
				<Button>Start</Button>
			</div>
			<p>This is a demo for when you want to use driver between pages.</p>

			<div className="border p-2 rounded-lg gap-2 bg-slate-50 flex flex-col">
				<div className="bg-white rounded-lg p-2 border">
					<h3 className="font-semibold text-xl">Component 1</h3>
				</div>
			</div>
		</Card>
	)
}
