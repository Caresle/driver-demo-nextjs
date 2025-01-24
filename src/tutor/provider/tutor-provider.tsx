"use client"

import { DriveStep } from "driver.js"
import React, { createContext, RefObject, useContext, useRef } from "react"

export interface CustomDriveStep extends DriveStep {
	order: number
}

interface TutorContext {
	section: string
	steps?: RefObject<CustomDriveStep[]>
	addStep: (step: CustomDriveStep) => void
	removeStep: (step: CustomDriveStep) => void
}

const TutorContext = createContext<TutorContext>({
	section: "",
	steps: undefined,
	addStep: () => {},
	removeStep: () => {},
})

export const useTutorProvider = () => useContext(TutorContext)

export const TutorProvider = ({
	children,
	section,
}: {
	children: React.ReactNode
	section: string
}) => {
	const steps = useRef<CustomDriveStep[]>([])

	const addStep = (step: CustomDriveStep) => {
		console.group("add step")
		console.log(step)
		console.groupEnd()

		if (steps.current.find(s => s.element === step.element)) return
		steps.current.push(step)
		steps.current.sort((a, b) => a.order - b.order)
	}

	const removeStep = (step: CustomDriveStep) => {
		console.group("remove step")
		console.log(step)
		console.groupEnd()
		steps.current = steps.current.filter(s => s.element !== step.element)
	}

	const values: TutorContext = {
		section,
		steps,
		addStep,
		removeStep,
	}

	return (
		<TutorContext.Provider value={values}>{children}</TutorContext.Provider>
	)
}
