import React from "react"
import ComponentBlue21 from "./blue/component-blue-2-1"
import ComponentBlue22 from "./blue/component-blue-2-2"
import TutorStep from "@/tutor/components/tutor-step"

export default function ComponentBlue1() {
	return (
		<TutorStep
			title="Card for component 1"
			description="Im in the component 1"
			order={1}
		>
			<div className="bg-blue-50 rounded-lg p-2 border border-blue-500 flex flex-col gap-2">
				<h3 className="font-semibold text-xl">Nested Level 1 - blue</h3>
				<TutorStep
					title="Card for component 2"
					description="Im in the component 2"
					order={2}
				>
					<ComponentBlue21 />
				</TutorStep>
				<TutorStep
					title="Card for component 2"
					description="Im in the component 2"
					order={3}
				>
					<ComponentBlue22 />
				</TutorStep>
			</div>
		</TutorStep>
	)
}
