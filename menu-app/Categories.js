import React from 'react';




const Categories = ({filterItems, setToDefault}) => {

    return (
        <div className='btn-container'>
             <button className='filter-btn' onClick={()=> setToDefault()}>
            all
           </button>

           <button className='filter-btn' onClick={()=> filterItems('breakfast')}>
            breakfast
           </button>
           <button className='filter-btn' onClick={()=> filterItems('lunch')}>
            lunch
           </button>
           <button className='filter-btn' onClick={()=> filterItems('shakes')}>
           shakes
           </button>






        </div>
    )
   


};

export default Categories;
