import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import TutorStep from "@/tutor/components/tutor-step"
import React from "react"

export default function Component2() {
	return (
		<TutorStep
			title="Card for component 2"
			description="Im in the component 2"
			order={3}
		>
			<div className="border rounded-lg p-2 bg-white">
				<h3 className="font-semibold text-xl">Component 2</h3>
				<div className="flex flex-col gap-2">
					<TutorStep
						title="Step in component 2"
						description="Im in the component 2input"
						order={4}
					>
						<Input placeholder="Enter your name" />
					</TutorStep>
					<TutorStep
						title="Step in component 2"
						description="Action button"
						order={5}
					>
						<Button variant={"secondary"}>Submit</Button>
					</TutorStep>
				</div>
			</div>
		</TutorStep>
	)
}
