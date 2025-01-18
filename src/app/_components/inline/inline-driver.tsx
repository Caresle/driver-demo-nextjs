import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from "react"
import Card from "../shared/card"

export default function InlineDriver() {
	return (
		<Card>
			<div className="flex items-center gap-2">
				<h2 className="font-semibold text-2xl">Inline Driver</h2>
				<Button>Start</Button>
			</div>
			<p className="text-slate-500">
				This is a demo of the inline driver. That is when driver is being used
				in a single file and not between multiple Components
			</p>
			<div className="w-full bg-slate-50 border rounded-lg flex flex-col items-center gap-2 p-2">
				<div className="flex flex-col gap-2 w-1/2 bg-white p-2 rounded-lg border">
					<Input placeholder="Username" />
					<Input placeholder="Password" type="password" />
					<Button variant={"secondary"}>Login</Button>
				</div>
			</div>
		</Card>
	)
}
