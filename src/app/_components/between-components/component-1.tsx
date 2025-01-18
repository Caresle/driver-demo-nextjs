import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from "react"

export default function Component1() {
	return (
		<div className="row-span-2 col-span-1 border p-2 rounded-lg bg-white grid">
			<h3 className="font-semibold text-xl">Component 1</h3>
			<div className="flex gap-2 flex-col w-4/5 mx-auto">
				<Input placeholder="Username" />
				<Input placeholder="Password" type="password" />
				<Button variant={"secondary"}>Login</Button>
			</div>
		</div>
	)
}
