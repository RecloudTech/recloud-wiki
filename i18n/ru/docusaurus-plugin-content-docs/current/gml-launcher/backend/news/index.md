---
sidebar_position: 6
---


# Новости

import {DocsCardList} from "@site/src/components/DocsCard";
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocsCardList list={useCurrentSidebarCategory().items} />