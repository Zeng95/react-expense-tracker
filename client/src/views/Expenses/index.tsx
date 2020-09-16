import AppLayout from 'components/App/AppLayout'
import Popup from 'components/Popup/index'
import React from 'react'
import AddButton from './AddButton'
import ExpenseAmount from './ExpenseAmount'

const Expenses: React.FunctionComponent = () => {
  return (
    <AppLayout>
      <Popup>
        <ExpenseAmount />
      </Popup>

      <AddButton />
    </AppLayout>
  )
}

export default Expenses
