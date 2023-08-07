import React, {useState} from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'





function App() {

  const [menuItems,setMenuItems] = useState(items)
  const [categories,setCategories] = useState([])
 

  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category)
     setMenuItems(newItems)
  }
  

  function setToDefault (){
    setMenuItems(items)
  }

 


  return (
    <main>
      <section className='menu section'>
     <div className='title'> 
   <h2>our menu</h2>
   <div className='underline'></div>

     </div>
     <Categories  filterItems={filterItems} setToDefault={setToDefault} />
     <Menu items={menuItems}/>
      </section>
    </main>
  );
}




export default App;


