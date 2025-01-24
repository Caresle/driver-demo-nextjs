import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import TutorStep from "@/tutor/components/tutor-step"
import React from "react"

export default function Component1() {
	return (
		<div className="row-span-2 col-span-1 border p-2 rounded-lg bg-white grid">
			<h3 className="font-semibold text-xl">Component 1</h3>
			<TutorStep
				title="Component 1"
				description="In component 1 card"
				order={0}
			>
				<div className="flex gap-2 flex-col w-4/5 mx-auto">
					<TutorStep
						order={1}
						title="Username"
						description="This is the username step"
					>
						<Input placeholder="Username" />
					</TutorStep>
					<TutorStep
						order={2}
						title="Password"
						description="This is the password step"
					>
						<Input placeholder="Password" type="password" />
					</TutorStep>
					<Button variant={"secondary"}>Login</Button>
				</div>
			</TutorStep>
		</div>
	)
}
