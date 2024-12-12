import lume from "lume/mod.ts";

import basePath from "lume/plugins/base_path.ts";
import jsx from "lume/plugins/jsx_preact.ts";

const site = lume({
  location: new URL("https://gim.garden"),
});

site
  .use(basePath())
  .use(jsx())
  ;

export default site;
