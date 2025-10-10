import React from 'react'
import { DocsCard } from './';
import styles from './DocsCard.css'

export const DocsCardList = ({ list }) => {
    return (
        <div className="grid gap-4 card-container-setup grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            {list.map(item => (
              <DocsCard
                key={item.docId}
                label={item.label}
                link={item.href}
              />
            ))}
          </div>
    )
}

