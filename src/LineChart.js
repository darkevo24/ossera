import React, { Component } from 'react';
import { AgChartsReact } from 'ag-charts-react';

export default class ChartExample extends Component {
    data = [
        {
            quarter: 'Q1',
            spending: 10,
        },
        {
            quarter: 'Q2',
            spending: 60,
        },
        {
            quarter: 'Q3',
            spending: 100,
        },
        {
            quarter: 'Q4',
            spending: 200,
        },
    ];

    constructor(props) {
        super(props);

        this.state = {
            options: {
                data: this.data,
                series: [{
                    xKey: 'quarter',
                    yKey: 'spending',
                }],
            },
        };
    }

    render() {
        return <AgChartsReact options={this.state.options} />;
    }
}