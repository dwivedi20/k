import React from 'react'

const ListItem = ({transaction}) => {
  return (
    <li
    className={
      transaction.amount > 0
        ? "list-group-item rounded-0 bg-success"
        : "list-group-item rounded-0 bg-danger"
    }
  >
    <h2 className="text-light">
      {transaction.text} : {transaction.amount}
    </h2>
    <span className="float-end">
      <button className="btn btn-outline-warning btn-sm rounded-0 mx-1">
        Edit
      </button>
      <button className="btn btn-outline-light btn-sm rounded-0 mx-1">
        Delete
      </button>
    </span>
  </li>
  )
}

export default ListItem
