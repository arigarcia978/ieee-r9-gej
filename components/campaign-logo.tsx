import { Star } from "lucide-react"

export function CampaignLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lapis-lazuli">
        <Star className="h-4 w-4 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold">John Smith</span>
        <span className="text-xs text-muted-foreground">for City Council</span>
      </div>
    </div>
  )
}
