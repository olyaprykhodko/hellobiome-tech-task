'use client';

import { useState } from 'react';
import FilterSwithcer from './FilterSwithcer';
import List from './MicrobesList';
import { microbes, Microbe } from './microbes';
import SortSwitcher from './SortSwitcher';
import Image from 'next/image';

export default function App() {
  const [filterOption, setFilterOption] = useState<string>('All');
  const [sortOption, setSortOption] = useState<string>('Abundance ↑');

  const filteredMicrobesList = () => {
    let filteredList: Microbe[];

    switch (filterOption) {
      case 'All':
        filteredList = microbes;
        break;
      case 'Bacteria':
        filteredList = microbes.filter(
          (microbe) => microbe.type === 'bacteria',
        );
        break;
      case 'Fungi':
        filteredList = microbes.filter((microbe) => microbe.type === 'fungi');
        break;
      default:
        filteredList = microbes;
    }

    let sorted: Microbe[];

    switch (sortOption) {
      case 'asc':
        sorted = [...filteredList].sort((a, b) => a.abundance - b.abundance);
        break;
      case 'desc':
        sorted = [...filteredList].sort((a, b) => b.abundance - a.abundance);
        break;
      default:
        sorted = [...filteredList].sort((a, b) => a.abundance - b.abundance);
    }

    return sorted;
  };

  const microbesList = filteredMicrobesList();

  return (
    <div className="relative isolate overflow-hidden bg-gray-400 py-24 sm:py-32 min-h-screen">
      <Image
        src="/bg-image.avif"
        alt="microbe-background-image"
        width={2600}
        height={800}
        className="absolute inset-0 -z-10 size-full object-cover object-right opacity-40 md:object-center"
      />

      <div className="mx-auto max-w-2xl lg:max-w-screen-2xl relative z-10 min-h-300 w-1/2 pb-20 rounded-4xl bg-gray/70 backdrop-blur-md shadow-xl ring-1 ring-white/10">
        <header className="mx-auto max-w-2xl lg:mx-0 px-30 py-10">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Microbes
          </h1>
        </header>

        <main className="mx-auto px-30 mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="flex flex-wrap gap-2 rounded-xl mb-8 items-baseline">
            <FilterSwithcer label="All" onClick={(e) => setFilterOption(e)} />
            <FilterSwithcer
              label="Bacteria"
              onClick={(e) => setFilterOption(e)}
            />
            <FilterSwithcer label="Fungi" onClick={(e) => setFilterOption(e)} />
            <SortSwitcher
              value={sortOption}
              onChange={(value) => setSortOption(value)}
            />
          </div>
          <div className="px-3 text-3xl">
            <List data={microbesList} />
          </div>
        </main>
      </div>
    </div>
  );
}
