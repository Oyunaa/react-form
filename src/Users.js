import React, { useEffect, useState } from "react";

export default function Users() {
  const [productName, setName] = useState("");
  const [category, setCategory] = useState(0);
  const [isSpecial, setIsSpecial] = useState(false);

  const [products, setProducts] = useState([]);

  const categories = ["Clothes", "Food", "Shoes"];

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.result);
      });
  };

  const onSave = (e) => {
    e.preventDefault();

    const newPro = {
      productName: productName,
      category: category,
      isSpecial: isSpecial,
    };

    fetch("http://localhost:8000/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newPro, productName: "HAHAH" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.result);

        clearData();
      });
  };

  const clearData = () => {
    setName("");
    setCategory(0);
    setIsSpecial(false);
  };

  const onUpdate = (e) => {
    
    e.preventDefault();
    const newArr = products.map((item, index) => {
      if (index == 0) {
        const newObj = { ...item, productName: "KKKK" };

        return newObj;
      } else {
        return item;
      }
    });

    setProducts(newArr);
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-4 p-4">
          <form>
            <div className="mb-3">
              <label className="form-label"> Name</label>
              <input
                type={"text"}
                className="form-control"
                value={productName}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label"> category</label>
              <select
                value={category}
                className="form-control"
                onChange={(e) => e.target.value}
              >
                <option value={0}>Select</option>
                {categories.map((item, index) => (
                  <option value={index}>{item}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label"> isSpecial?</label>

              <input
                type={"checkbox"}
                value={isSpecial}
                className="form-check"
                onChange={(e) => setIsSpecial(e.target.checked)}
              />
            </div>
            <div className="mb-3">
              <button onClick={onSave} className="btn btn-primary">
                Save
              </button>
              <button onClick={onUpdate} className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <th>id</th>
                <th>Name</th>
                <th>category</th>
                <th>Special</th>
              </thead>
              <tbody>
                {products.map(({ id, productName, category, isSpecial }) => {
                  //newdate = > date format

                  return (
                    <tr>
                      <td>{id}</td>
                      <td>{productName}</td>
                      <td>{category}</td>
                      <td>{isSpecial ? "Yes" : "No"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
