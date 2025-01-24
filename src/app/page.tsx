import BetweenZustand from "./_components/between-components-zustand/between-zustand"
import BetweenComponents from "./_components/between-components/between-section"
import BetweenPages from "./_components/between-pages/between-pages"
import InlineDriver from "./_components/inline/inline-driver"
import NestedComponents from "./_components/nested-components/nested-components"
import SimpleHighlight from "./_components/simple-highlight/simple-highlight"
import UsingModals from "./_components/usign-modals/using-modals"
import WithServerActions from "./_components/with-server-actions/with-server-actions"

export default function Home() {
	return (
		<div className="p-2 h-screen w-full flex flex-col gap-2 overflow-y-auto">
			<SimpleHighlight />
			<InlineDriver />
			<BetweenComponents />
			<BetweenZustand />
			<NestedComponents />
			<UsingModals />
			<BetweenPages />
			<WithServerActions />
		</div>
	)
}
