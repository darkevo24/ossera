import React, { Component } from 'react';
import { AgChartsReact } from 'ag-charts-react';

export default class BarChart extends Component {
    data = [
        {
            beverage: 'Coffee',
            Q1: 450,
            Q2: 560,
            Q3: 600,
            Q4: 700,
        },
        {
            beverage: 'Tea',
            Q1: 270,
            Q2: 380,
            Q3: 450,
            Q4: 520,
        },
        {
            beverage: 'Milk',
            Q1: 180,
            Q2: 170,
            Q3: 190,
            Q4: 200,
        },
    ];

    constructor(props) {
        super(props);
    
        this.state = {
            options: {
                data: this.data,
                series: [{
                    type: 'column',
                    xKey: 'beverage',
                    yKeys: ['Q1', 'Q2', 'Q3', 'Q4'],
                  label: {},
                }],
            }
        }
    }

    render() {
        return <AgChartsReact options={this.state.options} />;
    }
}