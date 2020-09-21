import React from 'react';

const SearchTasks = (props) =>{
    return (
        <div className="search-tasks row justify-content-center my-4">
            <div className="col-md-6">
                <div className="input-group">
                    <input
                    id="SearchTasks"
                    type="text"
                    className="form-control rounded-0"
                    aria-label="Search Tasks"
                    onChange={e => props.searchTasks(e.target.value)}
                    />
                    <div className="input-group-append">
                        <button
                            type="button"
                            className="btn btn-primary dropdown-toggle rounded-0"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Sort by: <span className="caret" />
                        </button>

                        <div className="sort-menu dropdown-menu dropdown-menu-right">
                            <button className={
                                'sort-by dropdown-item ' +
                                (props.orderBy === 'name' ? 'active': '')
                            } href="#"
                            onClick={e => props.changeOrder('name', props.orderDir)}>
                                Task Name
                            </button>
                            <button className={
                                'sort-by dropdown-item ' +
                                (props.orderBy === 'date' ? 'active': '')
                            } href="#"
                            onClick={e => props.changeOrder('date', props.orderDir)}>
                                Date
                            </button>
                            <button className={
                                'sort-by dropdown-item ' +
                                (props.orderBy === 'ownerName' ? 'active': '')
                            } href="#"
                            onClick={e => props.changeOrder('ownerName', props.orderDir)}>
                                Owner
                            </button>
                            <div role="separator" className="dropdown-divider" />
                            <button className={
                                'sort-by dropdown-item ' +
                                (props.orderDir === 'asc' ? 'active': '')
                            } href="#"
                            onClick={e => props.changeOrder(props.orderBy, 'asc')}>
                                Asc
                            </button>
                            <button className={
                                'sort-by dropdown-item ' +
                                (props.orderDir === 'desc' ? 'active': '')
                            } href="#"
                            onClick={e => props.changeOrder(props.orderBy, 'desc')}>
                                Desc
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchTasks;