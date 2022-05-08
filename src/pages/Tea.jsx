import React, {useState} from 'react';
import Tabs from './Tabs';
import '../css/tea.css';




const concepts = {
  'Black Tea $4': `
  Black tea is withered, fully oxidized and dried. Black tea commonly yields a hearty, amber-colored brew. 
  Some of the most popular types of black teas are bold breakfast teas (e.g. English Breakfast, Irish Breakfast) and Darjeelings..`,
  'Green Tea $4': `
  Green tea production endeavors to avoid the oxidation of the tea leaves, in order to retain its natural green color and fresh flavor. 
  In Japan, the leaves are steamed, while other countries will pan-fire or dry it through other methods. This type of tea has a more delicate flavor than black tea and often brews up pale green or golden in color..`,
  'Oolong Tea $4':`
  Oolong tea is produced mainly in China and Taiwan and is only partially oxidized. This type of tea can range from tasting similar to a fresh green tea, The flavor can vary widely, depending on where the tea leaves 
  are grown and how the tea is made.`,
  'Pu-erh Tea $4':`
  Pu-erh (also spelled pu'er) comes exclusively from China and is famous for its distinctively earthy flavor. Pu-erh is tea that has been fermented, often stored underground for several years. Traditionally, pu-erh 
  is compressed into round cakes and can be very expensive.`,

};

function Tea(){
  const [content] = useState(concepts);
  return (
    <div className="app">
     <Tabs entries={content}/>
    </div>

  );

};

export default Tea;
