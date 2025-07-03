import Image from "next/image"
import candidateLogo from "../public/images/gustavo-header-logo.png" 

export function CampaignLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <Image
          src={candidateLogo}
          alt="Gustavo E. Juárez"
          width={56}
          height={56}
          className="rounded-full object-cover border-2 border-slate-200"
          style={{ objectPosition: "center center" }}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-base font-semibold text-slate-900 leading-tight">GUSTAVO E. JUÁREZ</span>
      </div>
    </div>
  )
}