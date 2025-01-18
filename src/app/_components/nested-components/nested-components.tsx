import React from "react"
import Card from "../shared/card"
import { Button } from "@/components/ui/button"

export default function NestedComponents() {
	return (
		<Card>
			<div className="flex items-center gap-2">
				<h2 className="font-semibold text-2xl">Nested Components</h2>
				<Button>Start</Button>
			</div>
			<p>
				This is a demo for when you want to use driver in components that are
				nested
			</p>

			<div className="border p-2 rounded-lg gap-2 bg-slate-50 flex flex-col">
				<div className="bg-white rounded-lg p-2 border">
					<h3 className="font-semibold text-xl">Component 1</h3>
					<div className="bg-slate-50 p-2 rounded-lg border flex flex-col gap-2">
						<div className="bg-blue-50 rounded-lg p-2 border border-blue-500 flex flex-col gap-2">
							<h3 className="font-semibold text-xl">Nested Level 1 - blue</h3>
							<div className="bg-blue-100 rounded-lg p-2 border border-blue-500">
								<h3 className="font-semibold text-xl">
									Nested Level 2-1 - blue
								</h3>
							</div>
							<div className="bg-blue-100 rounded-lg p-2 border border-blue-500">
								<h3 className="font-semibold text-xl">
									Nested Level 2-2 - blue
								</h3>
							</div>
						</div>
						<div className="bg-red-50 rounded-lg p-2 border border-red-500 flex flex-col gap-2">
							<h3 className="font-semibold text-xl">Nested Level 1 - red</h3>
							<div className="bg-red-100 rounded-lg p-2 border border-red-500">
								<h3 className="font-semibold text-xl">
									Nested Level 2-1 - red
								</h3>
							</div>
							<div className="bg-red-100 rounded-lg p-2 border border-red-500">
								<h3 className="font-semibold text-xl">
									Nested Level 2-2 - red
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Card>
	)
}
