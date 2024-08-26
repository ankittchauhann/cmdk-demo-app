import { useState, useEffect } from "react";
// import { VercelCMDK } from "./vercel";
import * as Popover from "@radix-ui/react-popover";
import "./App.css";
import ReactCMDK from "./ReactCMDK";

function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "v") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger className="trigger-button">cmd v</Popover.Trigger>
      {open && (
        <Popover.Content className="content">
          {/* <VercelCMDK /> */}
          <ReactCMDK />
        </Popover.Content>
      )}
    </Popover.Root>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Command pallet</h1>
      <CommandMenu />
    </div>
  );
}

export default App;
