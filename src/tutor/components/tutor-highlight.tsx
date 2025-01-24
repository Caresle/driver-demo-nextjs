"use client"
import React, { createContext, useContext } from "react"
import useTutor from "../useTutor"
import { Button } from "@/components/ui/button"

interface TutorHighlightProps {
	children: React.ReactNode
	text: string
	id?: string
}

interface ITutorHighlightContext {
	text: string
	id: string
}

const TutorHighlightContext = createContext<ITutorHighlightContext>({
	id: "",
	text: "",
})

const useTutorHighlightContext = () => useContext(TutorHighlightContext)

function TutorHighlight({ text, children, id }: TutorHighlightProps) {
	return (
		<TutorHighlightContext.Provider value={{ id: id ?? "default", text }}>
			{children}
		</TutorHighlightContext.Provider>
	)
}

const TutorHighlightTrigger = ({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) => {
	const { id, text } = useTutorHighlightContext()
	const tutor = useTutor()

	const onTrigger = () => {
		tutor.highlight({
			element: `#${id}`,
			popover: {
				description: text,
			},
		})
	}

	return (
		<Button onClick={onTrigger} className={className}>
			{children}
		</Button>
	)
}

const TutorHighlightContent = ({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) => {
	const { id, text } = useTutorHighlightContext()
	return (
		<div id={id} className={className}>
			{children}
		</div>
	)
}

export { TutorHighlight, TutorHighlightTrigger, TutorHighlightContent }
