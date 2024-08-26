import "react-cmdk/dist/cmdk.css";
import React from "react";
import { useState } from "react";
import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";

const ReactCMDK = () => {
  const [page, setPage] = useState<"root" | "projects">("root");
  const [open, setOpen] = useState<boolean>(true);
  const [search, setSearch] = useState("");

  const filteredItems = filterItems(
    [
      {
        heading: "Create",
        id: "create",
        items: [
          {
            id: "map",
            children: "Map",
            icon: "MapIcon",
            href: "#",
          },
          {
            id: "waypoint",
            children: "Waypoint",
            icon: "MapPinIcon",
            href: "#",
          },
          {
            id: "mission",
            children: "Mission",
            icon: "MapIcon",
            href: "/create/mission",
          },
        ],
      },
      {
        heading: "Home",
        id: "home",
        items: [
          {
            id: "home",
            children: "Home",
            icon: "HomeIcon",
            href: "#",
          },
          {
            id: "settings",
            children: "Settings",
            icon: "CogIcon",
            href: "#",
          },
          {
            id: "projects",
            children: "Projects",
            icon: "RectangleStackIcon",
            closeOnSelect: false,
            onClick: () => {
              setPage("projects");
            },
          },
        ],
      },
      {
        heading: "Other",
        id: "advanced",
        items: [
          {
            id: "developer-settings",
            children: "Developer settings",
            icon: "CodeBracketIcon",
            href: "#",
          },
          {
            id: "privacy-policy",
            children: "Privacy policy",
            icon: "LifebuoyIcon",
            href: "#",
          },
          {
            id: "log-out",
            children: "Log out",
            icon: "ArrowRightOnRectangleIcon",
            onClick: () => {
              alert("Logging out...");
            },
          },
        ],
      },
    ],
    search
  );

  return (
    <CommandPalette
      onChangeSearch={setSearch}
      onChangeOpen={setOpen}
      search={search}
      isOpen={open}
      page={page}
    >
      <CommandPalette.Page id="root">
        {filteredItems.length ? (
          filteredItems.map((list) => (
            <CommandPalette.List key={list.id} heading={list.heading}>
              {list.items.map(({ id, ...rest }) => (
                <CommandPalette.ListItem
                  key={id}
                  index={getItemIndex(filteredItems, id)}
                  {...rest}
                />
              ))}
            </CommandPalette.List>
          ))
        ) : (
          <CommandPalette.FreeSearchAction />
        )}
      </CommandPalette.Page>

      <CommandPalette.Page id="projects">
        <CommandPalette.List heading="Projects">
          <CommandPalette.ListItem
            index={0}
            accessKey="s g"
            href="http://www.google.com"
            icon="ServerIcon"
          >
            Search Google
          </CommandPalette.ListItem>
          <CommandPalette.ListItem index={1} accessKey="s w">
            Search Wikipedia
          </CommandPalette.ListItem>
        </CommandPalette.List>
      </CommandPalette.Page>
    </CommandPalette>
  );
};

export default ReactCMDK;
