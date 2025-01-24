import { Config, driver, DriveStep } from "driver.js"
import "driver.js/dist/driver.css"

interface Tutor {
	highlight: (step: DriveStep, config?: Config) => void
	tour: (steps: DriveStep[]) => void
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

	const tour = (steps: DriveStep[], config: Config = {}) => {
		tutor.setConfig({
			...config,
			...defaultConfig,
			popoverClass: "lt",
			steps,
		})

		tutor.drive()
	}

	return {
		highlight,
		tour,
	}
}
