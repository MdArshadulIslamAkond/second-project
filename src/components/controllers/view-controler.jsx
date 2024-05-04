import React from 'react';
import { Label,Input } from 'reactstrap';
import PropTypes from 'prop-types'

const ViewController = ({view, changeView}) =>(
    <div className='d-flex '>
      <Label for="list-view" className='mx-1'>
        <Input type="radio" name="view" id="list-view" value="list" onChange={changeView} className='d-inline-block mx-2' checked={view ==="list"} />
        List View</Label>
        <Label for="table-view" className='mx-1'>
        <Input type="radio" name="view" id="table-view" value="table" onChange={changeView} className='d-inline-block mx-2' checked={view ==="table"} />
        Table View</Label>
    </div>
)

ViewController.prototype ={
    view:PropTypes.string.isRequired,
    changeview:PropTypes.func.isRequired
}

export default ViewController;