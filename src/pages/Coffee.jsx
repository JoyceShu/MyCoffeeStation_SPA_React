import React, {useState} from 'react';
import Tabs from './Tabs';
import '../css/coffee.css';




const concepts = {
  'Latte $4': `
  Cafe lattes are considered an introductory coffee drink since the acidity and bitterness of coffee are cut 
  by the amount of milk in the beverage. Flavoring syrups are often added to the latte for those who enjoy 
  sweeter drinks.`,
  'Mocha $4': `
  The mocha is considered a coffee and hot chocolate hybrid. The chocolate powder or syrup gives it a rich 
  and creamy flavor and cuts the acidity of the espresso.`,
  'Macchiato $4':`
  The word macchiato means mark or stain. This is in reference to the mark that steamed milk leaves on the 
  surface of the espresso as it is dashed into the drink. Flavoring syrups are often added to the drink 
  according to customer preference.`,
  'Americano $4':`
  Americanos are popular breakfast drinks and thought to have originated during World War II. Soldiers would 
  add water to their coffee to extend their rations farther. The water dilutes the espresso while still maintaining 
  a high level of caffeine.`,
  'Espresso $4' : `
  The espresso, also known as a short black, is approximately 1 oz. of highly concentrated coffee. Although simple 
  in appearance, it can be difficult to master.`
};

function Coffee(){
  const [content] = useState(concepts);
  return (
    <div className="app">
     <Tabs entries={content}/>
    </div>

  );

};

export default Coffee;
