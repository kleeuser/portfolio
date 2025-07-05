'use client';
import { useState } from 'react';
import works from '../data/works.json';
import ProjectCard from '../components/ProjectCard';

type Category = 'all' | 'music' | 'tanka';

const categories: Category[] = ['all', 'music', 'tanka'];

export default function HomePage() {
  const [filter, setFilter] = useState<Category>('all');
  const filtered = filter === 'all' ? works : works.filter(w => w.category === filter);

  return (
    <main>
      <div className="filter-buttons">
        {categories.map((cat) => {
          const isActive = filter === cat;
          const src = `/img/ui/${cat}${isActive ? '-active' : ''}.png`;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="filter-image-button"
            >
              <img src={src} alt={cat} className="filter-image" />
            </button>
          );
        })}
      </div>
      <div className="card-grid">
        {filtered.map(work => (
          <ProjectCard
            key={work.slug}
            slug={work.slug}
            thumbnail={work.thumbnail}
          />
        ))}
      </div>
    </main>
  );
}
