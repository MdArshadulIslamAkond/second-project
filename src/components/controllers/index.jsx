import React from 'react';
import SearchPanel from './search-panel';
import PropType from 'prop-types';
import { Row, Col } from 'reactstrap';
import FilterController from './filter-controler';
import ViewController from './view-controler';
import BulkController from './bulk-controller';

const Controller =({term, view, changeView, clearSelected,clearCompleted, reset, handleSearch, toggleForm, handleFilter})=>(
    <div>
        <SearchPanel term={term} handleSearch={handleSearch} toggleForm={toggleForm} />
        <Row className='my-4'>
            <Col md={{size: 4}}>
                <FilterController handleFilter={handleFilter} />
            </Col>
            <Col md={{size: 4}}>
                <ViewController view={view} changeView={changeView} />
            </Col>
            <Col md={{size: 4}} className='d-flex'>
                <div className='ml-auto'>
                    <BulkController clearSelected={clearSelected} clearCompleted={clearCompleted} reset={reset} />

                </div>

            </Col>
        </Row>
    </div>
)

Controller.propTypes ={
    term: PropType.string.isRequired,
    handleSearch: PropType.func.isRequired,
    toggleForm: PropType.func.isRequired,
    handleFilter: PropType.func.isRequired,
    view: PropType.string.isRequired,
    changeView: PropType.func.isRequired,
    clearSelected: PropType.func.isRequired,
    clearCompleted: PropType.func.isRequired,
    reset: PropType.func.isRequired,
}

export default Controller;