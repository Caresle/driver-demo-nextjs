import { Button } from "@/components/ui/button"
import React from "react"
import Card from "../shared/card"
import Component1 from "./component-1"
import Component2 from "./component-2"
import Component3 from "./component-3"

export default function BetweenZustand() {
	return (
		<Card>
			<div className="flex items-center gap-2">
				<h2 className="font-semibold text-2xl">Between Components (Zustand)</h2>
				<Button>Start</Button>
			</div>
			<p>
				This is a demo for when you want to use the driver between components
				using zustand
			</p>

			<div className="border p-2 rounded-lg grid grid-cols-2 grid-rows-2 gap-2 bg-slate-50">
				<Component1 />
				<Component2 />
				<Component3 />
			</div>
		</Card>
	)
}
