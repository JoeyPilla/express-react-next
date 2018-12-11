import React, { Component } from 'react';
import ReactTable from "react-table";
import DeviceDropdown from './deviceDropdown';
import matchSorter from 'match-sorter';
import "react-table/react-table.css";
import { Button } from 'semantic-ui-react';

export default class deviceTable extends Component {
    constructor(props) {
        super();
        this.state = {
          data: [],
          pages: -1,
          loading: true
        };
      this.force = this.force.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
      }
      force() {
        this.componentDidMount();
        this.forceUpdate();
      }
      componentDidMount() {
        fetch('/api/getDevices')
          .then(res => res.json())
          .then(user => this.setState({data: user.resp}));
      }
        render() {
        const data = this.state.data;

        const columns = [{
            Header: 'Device',
            accessor: 'name',
            filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["device"] }),
            filterAll: true
        }, {
            Header: 'Die Plot',
            accessor: 'dieplot',
            Cell: e => e.value? <Button size='big' fluid href={e.value}/>: <h1>{e.value}</h1>,
            filterMethod: (filter, row) => {
                if (filter.value === "all") {
                    return true;
                }
                if (filter.value === "true") {
                    return row[filter.id].length > 1;
                }
                return row[filter.id] < 21;
            },
            Filter: ({ filter, onChange }) =>
                <select
                    onChange={event => onChange(event.target.value)}
                    style={{ width: "100%" }}
                    value={filter ? filter.value : "all"}
                >
                    <option value="all">Show All</option>
                    <option value="true">Has Die Plot</option>
                </select>
        }, {
            Header: 'Pinout',
            accessor: 'pinout',
            Cell: (e) => e.value? <Button size='big' fluid href={e.value}/>: <h1>{e.value}</h1>,
            filtermethod: (filter, row) => {
                if (filter.value === "all") {
                    return true;
                }
                if (filter.value === "true") {
                    return row[filter.id].length > 1;
                }
                return row[filter.id] < 21;
            },
            filter: ({ filter, onchange }) =>
                <select
                    onchange={event => onchange(event.target.value)}
                    style={{ width: "100%" }}
                    value={filter ? filter.value : "all"}
                >
                    <option value="all">Show All</option>
                    <option value="true">Has Pinout</option>
                </select>
        }, {
            Header: 'Database',
            accessor: 'database',
            Cell: e => e.value? <Button size='big' fluid href={e.value}/>: <h1>{e.value}</h1>,
            filterMethod: (filter, row) => {
                if (filter.value === "all") {
                    return true;
                }
                if (filter.value === "true") {
                    return row[filter.id].length > 1;
                }
                return row[filter.id] < 21;
            },
            Filter: ({ filter, onChange }) =>
                <select
                    onChange={event => onChange(event.target.value)}
                    style={{ width: "100%" }}
                    value={filter ? filter.value : "all"}
                >
                    <option value="all">Show All</option>
                    <option value="true">Has Database Information</option>
                </select>
        }, {
            Header: 'Assura',
            accessor: 'assura',
            Cell: e => e.value? <Button size='big' fluid href={e.value}/>: <h1>{e.value}</h1>,
            filterMethod: (filter, row) => {
                if (filter.value === "all") {
                    return true;
                }
                if (filter.value === "true") {
                    return row[filter.id].length > 1;
                }
                return row[filter.id] < 21;
            },
            Filter: ({ filter, onChange }) =>
                <select
                    onChange={event => onChange(event.target.value)}
                    style={{ width: "100%" }}
                    value={filter ? filter.value : "all"}
                >
                    <option value="all">Show All</option>
                    <option value="true">Has Assura Information</option>
                </select>
        }, {
            Header: 'Datasheet',
            accessor: 'datasheet',
            Cell: e => e.value? <Button size='big' fluid href={e.value}/>: <h1>{e.value}</h1>,
            filterMethod: (filter, row) => {
                if (filter.value === "all") {
                    return true;
                }
                if (filter.value === "true") {
                    return row[filter.id].length > 1;
                }
                return row[filter.id] < 21;
            },
            Filter: ({ filter, onChange }) =>
                <select
                    onChange={event => onChange(event.target.value)}
                    style={{ width: "100%" }}
                    value={filter ? filter.value : "all"}
                >
                    <option value="all">Show All</option>
                    <option value="true">Has Datasheet</option>
                </select>
        }, {
            Header: 'EVM',
            accessor: 'evm',
            Cell: e => e.value? <Button size='big' fluid href={e.value}/>: <h1>{e.value}</h1>,
            filterMethod: (filter, row) => {
                if (filter.value === "all") {
                    return true;
                }
                if (filter.value === "true") {
                    return row[filter.id].length > 1;
                }
                return row[filter.id] < 21;
            },
            Filter: ({ filter, onChange }) =>
                <select
                    onChange={event => onChange(event.target.value)}
                    style={{ width: "100%" }}
                    value={filter ? filter.value : "all"}
                >
                    <option value="all">Show All</option>
                    <option value="true">Has EVM images</option>
                </select>
        }
        ]

        return (
            <div>
                {data ? <ReactTable
                    data={data}
                    filterable
                    defaultFilterMethod={(filter, row) =>
                        String(row[filter.id]) === filter.value}
                    columns={columns}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    SubComponent={row => {
                        return (
                            <DeviceDropdown row={row}></DeviceDropdown>
                            // <DevicesTable row={row}
                            //   force={this.force}/>
                        );
                    }}
                />
                    : <h1>Loading.. please wait!</h1>}
            </div>
        );
    }
}

function getClass(str) {

    if (str) {
        return "button";
    }
    return "n";
}