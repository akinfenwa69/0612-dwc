import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { IoLogoGithub } from "react-icons/io";

export function SiteHeader() {
  const pathname = window.location.pathname
  const urlArray = []

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1 cursor-pointer" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <ul className="flex gap-2 items-center">
          {
            pathname === "/" ?
              <p>Home</p>
              : pathname.split('/').map((item, index) => {
                const currentURL = pathname.split('/').slice(1, index + 1)
                if (item === "") item = "Home"
                urlArray.push(item)

                if (pathname.split('/')[index + 1]) {
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <a
                        href={'/' + String(currentURL).replaceAll(',', '/')}
                        className={`capitalize ${item !== pathname.split('/')[pathname.split('/').length - 1] ? "text-muted-foreground" : ""} hover:text-foreground transition`}
                      >
                        {/\d/.test(item) ? item : item.replaceAll('-', ' ')}
                      </a>
                      <span className="text-muted-foreground">/</span>
                    </div>
                  )
                } else {
                  return (
                    <p key={index} className={`capitalize`}>
                      {/\d/.test(item) ? item : item.replaceAll('-', ' ')}
                    </p>
                  )
                }
              })
          }
        </ul>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              href="https://github.com/akinfenwa69/0612-dwc"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground flex items-center gap-2"
            >
              <IoLogoGithub />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
