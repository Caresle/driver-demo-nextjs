"use client"
import React, { useEffect } from "react"
import { CustomDriveStep, useTutorProvider } from "../provider/tutor-provider"
import { DriveStep } from "driver.js"
import { cn } from "@/lib/utils"

interface TutorStepProps {
	children: React.ReactNode
	className?: string
	title: string
	description: string
	order?: number
}

export default function TutorStep({
	children,
	className,
	title,
	description,
	order = 0,
}: TutorStepProps) {
	const { addStep, removeStep, section } = useTutorProvider()

	const step: CustomDriveStep = {
		element: `#${section}-${order}`,
		popover: {
			title,
			description,
		},
		order,
	}

	useEffect(() => {
		addStep(step)

		return () => removeStep(step)
	}, [])

	return (
		<div className={cn("w-full", className)} id={`${section}-${order}`}>
			{children}
		</div>
	)
}
