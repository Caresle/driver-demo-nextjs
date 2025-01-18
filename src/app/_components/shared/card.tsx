import React from "react"

export default function Card({ children }: { children: React.ReactNode }) {
	return (
		<section className="border p-2 rounded-lg bg-white flex flex-col gap-2">
			{children}
		</section>
	)
}
