import { Config, Driver, driver, DriveStep, State } from "driver.js"
import "driver.js/dist/driver.css"
import { useState } from "react"

interface Tutor {
	highlight: (step: DriveStep, config?: Config) => void
	tour: (steps: DriveStep[]) => void
}

export interface CustomDriveStep extends DriveStep {
	isModal?: boolean
	isFirstModalStep?: boolean
	isLastModalStep?: boolean
	triggerModalFn?: () => void
}

const tutor = driver({
	popoverClass: "driverjs-theme",
})

const defaultConfig: Config = {
	showProgress: true,
	smoothScroll: true,
}

export default function useTutor(): Tutor {
	const highlight = (step: DriveStep) => {
		tutor.highlight(step)
	}

	const tour = (steps: CustomDriveStep[], config: Config = {}) => {
		tutor.setConfig({
			...config,
			...defaultConfig,
			popoverClass: "lt",
			steps,
			onNextClick: (
				element,
				step: CustomDriveStep,
				opts: { config: Config; state: State }
			) => {
				if (
					opts.state.activeIndex === undefined ||
					opts.state.activeIndex === null
				)
					return

				const nextStep = steps[opts.state.activeIndex + 1]

				if (nextStep?.isModal) {
					if (nextStep.isFirstModalStep) {
						nextStep.triggerModalFn?.()
						setTimeout(() => {
							tutor.moveNext()
						}, 50)
						return
					}
				}

				if (step?.isModal) {
					if (step.isLastModalStep) {
						step.triggerModalFn?.()
						setTimeout(() => {
							tutor.moveNext()
						}, 50)
						return
					}
				}

				tutor.moveNext()
			},
		})

		tutor.drive()
	}

	return {
		highlight,
		tour,
	}
}
