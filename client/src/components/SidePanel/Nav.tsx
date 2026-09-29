import type { NavLink } from '~/common';
import { useActivePanel, resolveActivePanel } from '~/Providers';

function SidebarBrand() {
  return (
    <div className="flex h-12 shrink-0 items-center gap-2 px-3">
      <img src="/assets/atos-logo.svg" alt="Atos" className="h-4 w-auto object-contain" />
      <img src="/assets/SPN-logo-bis.png" alt="SPN" className="h-14 w-auto" />
    </div>
  );
}

export default function Nav({ links }: { links: NavLink[] }) {
  const { active } = useActivePanel();
  const effectiveActive = resolveActivePanel(active, links);
  return (
    <div className="flex h-full min-h-0 flex-col overflow-y-auto overflow-x-hidden text-text-primary">
      <SidebarBrand />
      {links.map((link) =>
        link.id === effectiveActive && link.Component ? <link.Component key={link.id} /> : null,
      )}
    </div>
  );
}
