import React from 'react'

const Form = () => {
  return (
    <div className="card rounded-0 p-3">
    <h1 className="text-center text-secondary">Enter Your Transaction</h1>
    <form>
      <input
        type="text"
        className="form-control rounded-0 my-2"
        placeholder="Enter Transaction"
      />
      <input
        type="text"
        className="form-control rounded-0 my-2"
        placeholder="Enter Amount : eg.(For Expense : -2000 , For Income : 2000)"
      />
      <button className="btn btn-success rounded-0 w-100">
        Save Transaction
      </button>
    </form>
  </div>
  )
}

export default Form
