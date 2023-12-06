import React from 'react';

export class SearchFilter extends React.Component {

    render() {
const { filterState, changeFilter } = this.props;
        return (
            <label> Find contacts by name
            <input name='filter' value={filterState} onChange={(event)=>changeFilter(event)} type="text" />
        </label>
        )
    }
}