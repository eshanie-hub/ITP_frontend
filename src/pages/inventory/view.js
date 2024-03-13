import React, { useEffect, useState } from 'react'
import Header from '../../component/Header';
import axios from 'axios';

const View = () => {
<<<<<<< HEAD
  const [search, setSearch] = useState("");
=======
>>>>>>> aae4c39573c4d38e21946b5cad21588e1069ce9f
  const [state, setState] = useState({
    inventory: []
  })

    useEffect(() => {
        axios.get("http://localhost:8000/inventory/").then(res =>{
            if(res.data){
              setState({
                inventory:res.data
              })
            }
        })
    }, [state]);
  return (
    <>
      <div class="col">
<<<<<<< HEAD
          <Header dashboard={"Inventory Management System"} setSearch={setSearch}/>
=======
          <Header dashboard={"Inventory Management System"} />
>>>>>>> aae4c39573c4d38e21946b5cad21588e1069ce9f
      </div>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col py-3">
           
            {/* details */}
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Item No</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Color</th>
                    <th scope="col">Size</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock Count</th>
<<<<<<< HEAD
                    <th scope="col">Reorder Point</th>
                    </tr>
                </thead>
                <tbody>
                {state.inventory.filter((inventory) => {
                  return search.toLowerCase()===''
                  ? inventory
                  : inventory.itemName.toLowerCase().includes(search);
                })
                
                .map((inventory, index) => (
=======
                    </tr>
                </thead>
                <tbody>
                {state.inventory.map((inventory, index) => (
>>>>>>> aae4c39573c4d38e21946b5cad21588e1069ce9f
                    <tr key={index}>
                    <td>{inventory.itemNo}</td>
                    <td>{inventory.itemName}</td>
                    <td>{inventory.color}</td>
                    <td>{inventory.size}</td>
                    <td>{inventory.price}</td>
                    <td>{inventory.stockCount}</td>
<<<<<<< HEAD
                    <td>{inventory.reorderPoint}</td>
=======
>>>>>>> aae4c39573c4d38e21946b5cad21588e1069ce9f
                    <td>
                    </td>
                    </tr>
                ))}
                </tbody>
                </table>
            </div>
        </div>
      </div>
    </>
  )
}

export default View