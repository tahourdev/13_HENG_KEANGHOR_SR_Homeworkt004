import React, { useState } from 'react';
import { Star } from 'lucide-react';
import FilterComponent from './FilterComponent';
import { learningMaterials } from '../data/learningMaterials';

export default function LearningMaterialsComponent() {
  const [materials, setMaterials] = useState(
    learningMaterials.map((item) => ({ ...item, isFavorite: item.isFavorite || false }))
  );

  const [sortOrder, setSortOrder] = useState('');

  const handleFavoriteToggle = (id) => {
    setMaterials((prevMaterials) =>
      prevMaterials.map((item) => (item.id === id ? { ...item, isFavorite: !item.isFavorite } : item))
    );
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
    setMaterials((prevMaterials) => {
      const sortedMaterials = [...prevMaterials];
      if (value === 'A-Z') {
        sortedMaterials.sort((a, b) => a.title.localeCompare(b.title));
      } else if (value === 'Z-A') {
        sortedMaterials.sort((a, b) => b.title.localeCompare(a.title));
      }
      return sortedMaterials;
    });
  };

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto no-scrollbar h-[80vh] max-w-[290px] w-full">
      {/* calling filter component */}
      <FilterComponent onSortChange={handleSortChange} />

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      <div className="space-y-3">
        {materials.map((item) => {
          return (
            <div key={item.id} className="bg-light-gray px-4 py-2 flex gap-5 items-center">
              <img src={item.image} alt="HTML5" width={50} height={50} className="rounded-xl" />

              <div className="w-full">
                <div className="flex justify-between">
                  <p className="text-base font-medium">{item.title}</p>
                  <button onClick={() => handleFavoriteToggle(item.id)}>
                    {item.isFavorite ? (
                      <Star fill="#FAA300" className="text-custom-carrot" size={20} />
                    ) : (
                      <Star size={20} />
                    )}
                  </button>
                </div>
                <p className="text-gray-400 text-sm">Posted at: {item.postedAt}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
