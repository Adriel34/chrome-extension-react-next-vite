import { createRoot } from "react-dom/client";
import Newtab from "@pages/newtab/Newtab";
import refreshOnUpdate from "virtual:reload-on-update-in-view";

refreshOnUpdate("pages/newtab");

function newtab() {
  const appContainer = document.querySelector("#app-container");
  const root = createRoot(appContainer);
  root.render(<Newtab />);
}

newtab();
