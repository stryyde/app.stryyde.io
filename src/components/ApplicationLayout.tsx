import {
  ArrowRightStartOnRectangleIcon,
  BellIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  UserIcon,
} from "@heroicons/react/16/solid";

import { LogoIcon } from "@/components/icons/LogoIcon";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Avatar } from "@/components/ui/Avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/ui/Dropdown";
import { Link } from "@/components/ui/Link";
import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/ui/Navbar";
import { Sidebar } from "@/components/ui/Sidebar";
import { StackedLayout } from "@/components/ui/StackedLayout";

export function ApplicationLayout({ children }: { children: React.ReactNode }) {
  return (
    <StackedLayout
      navbar={
        <Navbar>
          <Link href="/">
            <LogoIcon className="mx-2.5 h-6 w-6" />
          </Link>
          <NavbarDivider className="max-lg:hidden" />
          <NavbarSection className="max-lg:hidden">
            <NavbarItem href="/exercises">Exercises</NavbarItem>
          </NavbarSection>
          <NavbarSpacer />
          <NavbarSection>
            <Dropdown>
              <DropdownButton plain aria-label="Notifications">
                <BellIcon />
              </DropdownButton>
            </Dropdown>
            <ThemeToggle />
            <Dropdown>
              <DropdownButton as={NavbarItem} aria-label="Account Menu">
                <Avatar initials="ST" />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="bottom end">
                <DropdownItem href="/me/profile">
                  <UserIcon />
                  <DropdownLabel>Profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/me/settings">
                  <CogIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem>
                  <ChatBubbleLeftRightIcon />
                  <DropdownLabel>Feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem>
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={<Sidebar>TODO</Sidebar>}
    >
      {children}
    </StackedLayout>
  );
}
