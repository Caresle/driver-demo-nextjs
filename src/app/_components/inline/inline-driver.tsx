import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from "react"
import Card from "../shared/card"
import { TutorProvider } from "@/tutor/provider/tutor-provider"
import TutorStep from "@/tutor/components/tutor-step"
import TutorStepTrigger from "@/tutor/components/tutor-step-trigger"

export default function InlineDriver() {
	return (
		<TutorProvider section="inline">
			<Card>
				<div className="flex items-center gap-2">
					<h2 className="font-semibold text-2xl">Inline Driver</h2>
					<TutorStepTrigger>Start</TutorStepTrigger>
				</div>
				<p className="text-slate-500">
					This is a demo of the inline driver. That is when driver is being used
					in a single file and not between multiple Components
				</p>
				<div className="w-full bg-slate-50 border rounded-lg flex flex-col items-center gap-2 p-2">
					<TutorStep
						title="Login"
						description="This is the login step"
						order={1}
					>
						<div className="flex flex-col gap-2 max-w-2xl bg-white p-2 rounded-lg border mx-auto">
							<TutorStep
								title="Username"
								description="This is the username step"
								order={2}
							>
								<Input placeholder="Username" />
							</TutorStep>
							<TutorStep
								title="Password"
								description="This is the password step"
								order={3}
							>
								<Input placeholder="Password" type="password" />
							</TutorStep>
							<Button variant={"secondary"}>Login</Button>
						</div>
					</TutorStep>
				</div>
			</Card>
		</TutorProvider>
	)
}
