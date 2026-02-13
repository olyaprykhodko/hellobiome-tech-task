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
    <div className="relative isolate overflow-hidden bg-gray-400 py-16 sm:py-24 min-h-screen">
      <Image
        src="/bg-image.avif"
        alt="microbe-background-image"
        width={2600}
        height={800}
        className="absolute inset-0 -z-10 size-full object-cover object-center opacity-20 sm:opacity-30 md:opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-white/80 via-white/70 to-white/80 sm:from-white/50 sm:via-white/40 sm:to-white/50" />

      <div className="mx-auto w-[92%] max-w-3xl lg:max-w-5xl relative z-10 min-h-75 pb-12 sm:pb-16 rounded-3xl bg-gray/70 backdrop-blur-md shadow-xl ring-1 ring-white/10">
        <header className="mx-auto max-w-2xl lg:mx-0 px-6 sm:px-10 lg:px-12 py-8 sm:py-10">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900">
            Microbes
          </h1>
        </header>

        <main className="mx-auto px-6 sm:px-10 lg:px-12 mt-6 sm:mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 rounded-xl mb-6 sm:mb-8 sm:items-center">
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
          <div className="px-1 text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
            <List data={microbesList} />
          </div>
        </main>
      </div>
    </div>
  );
}
