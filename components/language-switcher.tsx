"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  label: string
  currentLang: string
}

const languages = {
  en: "English",
  es: "Español",
  pt: "Português",
}

export function LanguageSwitcher({ label, currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  const switchLanguage = (newLang: string) => {
    const segments = pathname.split("/")
    segments[1] = newLang
    const newPath = segments.join("/")
    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 text-slate-600 hover:text-slate-900">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-slate-200">
        {Object.entries(languages).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => switchLanguage(code)}
            className={currentLang === code ? "bg-slate-100" : ""}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
