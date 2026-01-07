
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const GroceryEstimator: React.FC<CalculatorProps> = ({ onBack }) => {
  const [items, setItems] = useState([{ name: '', price: '' }]);
  
  const total = items.reduce((sum, item) => sum + (parseFloat(item.price) || 0), 0);

  const addItem = () => setItems([...items, { name: '', price: '' }]);
  const updateItem = (i: number, field: string, val: string) => {
    const newItems: any = [...items];
    newItems[i][field] = val;
    setItems(newItems);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
        <h2 className="text-2xl font-bold">Grocery Estimator</h2>
      </div>
      <div className="space-y-3 mb-6 max-h-64 overflow-y-auto pr-2 scrollbar-hide">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <input placeholder="Item" value={item.name} onChange={e => updateItem(i, 'name', e.target.value)} className="flex-grow p-3 rounded-xl bg-slate-50 dark:bg-slate-800" />
            <input type="number" placeholder="$" value={item.price} onChange={e => updateItem(i, 'price', e.target.value)} className="w-24 p-3 rounded-xl bg-slate-50 dark:bg-slate-800" />
          </div>
        ))}
      </div>
      <button onClick={addItem} className="w-full py-3 mb-6 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl font-bold text-slate-400 hover:text-primary-600 transition-colors">+ Add Item</button>
      <div className="p-8 bg-slate-900 text-white rounded-3xl text-center">
        <div className="text-xs uppercase opacity-40 font-bold mb-1">Estimated Total</div>
        <div className="text-5xl font-black">${total.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default GroceryEstimator;
