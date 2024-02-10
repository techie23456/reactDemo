import React from 'react'
function List()
{
    const fruit = ["apple","orange","banana"];

    // const fruitList = fruit.map(item => <li>{item}</li>)

    return(
    //    <ol>{fruit.map(item =><li>{item}</li>)} </ol>

    <ol>{fruit.map(item =><li>{item}</li>) }</ol>
    
     )
}

export default List;