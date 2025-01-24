import React from "react"
import Card from "../shared/card"
import { Button } from "@/components/ui/button"
import ComponentBlue1 from "./component-blue-1"
import ComponentRed1 from "./component-red-1"
import { TutorProvider } from "@/tutor/provider/tutor-provider"
import TutorStepTrigger from "@/tutor/components/tutor-step-trigger"
import TutorStep from "@/tutor/components/tutor-step"

export default function NestedComponents() {
	return (
		<TutorProvider section="nested_components">
			<Card>
				<div className="flex items-center gap-2">
					<h2 className="font-semibold text-2xl">Nested Components</h2>
					{/* <Button>Start</Button> */}
					<TutorStepTrigger>Start</TutorStepTrigger>
				</div>
				<p>
					This is a demo for when you want to use driver in components that are
					nested
				</p>

				<TutorStep
					title="Card for component 1"
					description="Im in the component 1"
				>
					<div className="border p-2 rounded-lg gap-2 bg-slate-50 flex flex-col">
						<div className="bg-white rounded-lg p-2 border">
							<h3 className="font-semibold text-xl">Component 1</h3>
							<div className="bg-slate-50 p-2 rounded-lg border flex flex-col gap-2">
								<ComponentBlue1 />
								<ComponentRed1 />
							</div>
						</div>
					</div>
				</TutorStep>
			</Card>
		</TutorProvider>
	)
}
