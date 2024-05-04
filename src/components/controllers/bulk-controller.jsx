import React from 'react';
import{Button, ButtonGroup} from 'reactstrap';
import PropYypes from 'prop-types'

const BulkController =({clearSelected, clearCompleted, reset})=>(
    <ButtonGroup>
        <Button color="danger" onClick={clearSelected}>Clear Selected</Button>
        <Button color="danger" onClick={clearCompleted}>Clear Completed</Button>
        <Button color="danger" onClick={reset}>Reset</Button>
      
    </ButtonGroup>
)

BulkController.propTypes={
    clearSelected:PropYypes.func.isRequired,
    clearCompleted:PropYypes.func.isRequired,
    reset:PropYypes.func.isRequired,
}

export default BulkController;