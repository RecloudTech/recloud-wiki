---
sidebar_position: 5
---

# Серверная часть

import {DocsCardList} from "@site/src/components/DocsCard";
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocsCardList list={useCurrentSidebarCategory().items} />