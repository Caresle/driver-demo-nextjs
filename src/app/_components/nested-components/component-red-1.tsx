import React from "react"
import ComponentRed21 from "./red/component-red-2-1"
import ComponentRed22 from "./red/component-red-2-2"
import TutorStep from "@/tutor/components/tutor-step"

export default function ComponentRed1() {
	return (
		<TutorStep
			title="Card for component 1"
			description="Im in the component 1"
			order={4}
		>
			<div className="bg-red-50 rounded-lg p-2 border border-red-500 flex flex-col gap-2">
				<h3 className="font-semibold text-xl">Nested Level 1 - red</h3>
				<TutorStep
					title="Card for component 2"
					description="Im in the component 2"
					order={5}
				>
					<ComponentRed21 />
				</TutorStep>
				<TutorStep
					title="Card for component 2"
					description="Im in the component 2"
					order={6}
				>
					<ComponentRed22 />
				</TutorStep>
			</div>
		</TutorStep>
	)
}
