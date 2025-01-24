"use client"
import { Button } from "@/components/ui/button"
import React from "react"
import { useTutorProvider } from "../provider/tutor-provider"
import useTutor from "../useTutor"

export default function TutorStepTrigger({
	children,
}: {
	children: React.ReactNode
}) {
	const { steps } = useTutorProvider()
	const tutor = useTutor()

	const onClick = () => {
		tutor.tour(steps?.current ?? [])
	}

	return <Button onClick={onClick}>{children}</Button>
}
