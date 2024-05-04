import React from 'react';
import{Button, ButtonGroup} from 'reactstrap';
import PropYypes from 'prop-types'

const FilterController =({handleFilter})=>(
    <ButtonGroup>
        <Button color="primary" onClick={()=>handleFilter('all')}>All</Button>
        <Button color="primary" onClick={()=>handleFilter('running')}>Running</Button>
        <Button color="primary" onClick={()=>handleFilter('completed')}>Completed</Button>
      
    </ButtonGroup>
)

FilterController.propTypes={
    handleFilter:PropYypes.func.isRequired
}

export default FilterController;