---
sidebar_position: 6
---

# Лаунчер

import {DocsCardList} from "@site/src/components/DocsCard";
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocsCardList list={useCurrentSidebarCategory().items} />