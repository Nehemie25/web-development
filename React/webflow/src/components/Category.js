import {plantList} from '../data/plantList'
import '../styles/Category.css'

function Category ({category, setCategory})
{


function handleOnChange (value)
{
       
     
        setCategory (value);
}


const categories = plantList.reduce (
        (acc, plant) => 
        acc.includes (plant.category) ? acc : acc.concat (plant.category)
    , []
    );

    const categoriesDOM = categories.map ((cat) => 
    <option key ={'cat'} > {cat} </option>
    );


return (<div className ='lmj-categories'>
<select value = {category}  onChange = {(e) =>handleOnChange (e.target.value)} className = 'lmj-categories-select'>  {categoriesDOM } </select> 
<button   onClick = {() => setCategory ("all")}> Tout selectionner </button>
</div>
);

}

export default Category;