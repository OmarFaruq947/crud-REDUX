import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const From = () => {

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.transaction);



  return (
    <>
      <div className="form">
        <h3>Add new transaction</h3>

        <form >
          <div className="form-group">
            <label>Name</label>
            <input
            required
              type="text"
              name="name"
              placeholder="transaction_name"
              
            />
          </div>

          <div className="form-group radio">
            <label>Type</label>
            <div className="radio_group">
              <input
              
                type="radio"
                value="income"
                name="type"
                
              />
              <label>Income</label>
            </div>
            <div className="radio_group">
              <input
              
                type="radio"
                value="expense"
                name="type"
                placeholder="Expense"
                
              />
              <label>Expense</label>
            </div>
          </div>

          <div className="form-group">
            <label>Amount</label>
            <input
            required
              type="number"
              placeholder="enter amount"
              name="amount"
             
            />
          </div>

          <button  className="btn" type="submit">
            Add Transaction
          </button>
          
        </form>
        <button className="btn cancel_edit">Cancel Edit</button>
      </div>
    </>
  );
};

export default From;
