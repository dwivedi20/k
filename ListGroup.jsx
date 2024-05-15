import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({transactions}) => {
  return (
    <div className="my-3">
    <h3 className="text-secondary">All Transactions : </h3>
    <ul className="my-3 list-group">
      {transactions.map((transaction) => (
        <ListItem key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  </div>
  )
}

export default ListGroup
