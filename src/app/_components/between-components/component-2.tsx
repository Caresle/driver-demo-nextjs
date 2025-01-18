import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from "react"

export default function Component2() {
	return (
		<div className="border rounded-lg p-2 bg-white">
			<h3 className="font-semibold text-xl">Component 2</h3>
			<div className="flex flex-col gap-2">
				<Input placeholder="Enter your name" />
				<Button variant={"secondary"}>Submit</Button>
			</div>
		</div>
	)
}
