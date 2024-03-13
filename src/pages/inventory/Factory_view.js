import React, { useEffect, useState } from 'react'
import Header from '../../component/Header';
import axios from 'axios';

const FactoryView = () => {
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
=======
>>>>>>> aae4c39573c4d38e21946b5cad21588e1069ce9f
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
<<<<<<< HEAD
                {state.inventory.filter((inventory) => {
                  return search.toLowerCase()===''
                  ? inventory
                  : inventory.itemName.toLowerCase().includes(search);
                })
                
                .map((inventory, index) => (
=======
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
                    <div class="d-grid gap-2">
                    <button type="button" class="btn btn-success btn-sm">
                        <a href={`/pages/inventory/edit/${inventory._id}`} style={{textDecoration: 'none', color:'white'}}>
                            update
                        </a>
                    </button>
                    </div>
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

export default FactoryView