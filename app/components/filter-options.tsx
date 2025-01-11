import { Button } from "@/components/ui/button"

type FilterOptionsProps = {
  setFilter: (filter: string | null) => void
}

export default function FilterOptions({ setFilter }: FilterOptionsProps) {
  return (
    <div className="flex space-x-2">
      <Button onClick={() => setFilter(null)} variant="outline">All</Button>
      <Button onClick={() => setFilter('Task Update')} variant="outline">Task Updates</Button>
      <Button onClick={() => setFilter('System Alert')} variant="outline">System Alerts</Button>
      <Button onClick={() => setFilter('Message')} variant="outline">Messages</Button>
    </div>
  )
}

