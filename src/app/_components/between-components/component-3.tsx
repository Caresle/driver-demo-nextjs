import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import TutorStep from "@/tutor/components/tutor-step"
import React from "react"

export default function Component3() {
	return (
		<div className="border rounded-lg p-2 bg-white">
			<h3 className="font-semibold text-xl">Component 3</h3>
			<TutorStep
				title="Title"
				description="Ya me quede sin que hacer"
				order={6}
			>
				<div className="flex flex-col gap-2">
					<TutorStep
						title="Title 2"
						description="Pues es un input la neta"
						order={7}
					>
						<Input placeholder="Enter your name" />
					</TutorStep>
					<TutorStep
						title="Final step"
						description="Pues es el final step papito"
						order={8}
					>
						<Button variant={"secondary"}>Submit</Button>
					</TutorStep>
				</div>
			</TutorStep>
		</div>
	)
}
