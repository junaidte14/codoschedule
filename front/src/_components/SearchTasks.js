import React, {Component} from 'react';
class SearchTasks extends Component{
    render(){
        return (
            <div className="search-tasks row justify-content-center my-4">
                <div className="col-md-6">
                    <div className="input-group">
                        <input
                        id="SearchTasks"
                        type="text"
                        className="form-control rounded-0"
                        aria-label="Search Tasks"
                        onChange={e => this.props.searchTasks(e.target.value)}
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
                                    (this.props.orderBy === 'name' ? 'active': '')
                                } href="#"
                                onClick={e => this.props.changeOrder('name', this.props.orderDir)}>
                                    Task Name
                                </button>
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderBy === 'date' ? 'active': '')
                                } href="#"
                                onClick={e => this.props.changeOrder('date', this.props.orderDir)}>
                                    Date
                                </button>
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderBy === 'ownerName' ? 'active': '')
                                } href="#"
                                onClick={e => this.props.changeOrder('ownerName', this.props.orderDir)}>
                                    Owner
                                </button>
                                <div role="separator" className="dropdown-divider" />
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderDir === 'asc' ? 'active': '')
                                } href="#"
                                onClick={e => this.props.changeOrder(this.props.orderBy, 'asc')}>
                                    Asc
                                </button>
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderDir === 'desc' ? 'active': '')
                                } href="#"
                                onClick={e => this.props.changeOrder(this.props.orderBy, 'desc')}>
                                    Desc
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchTasks;