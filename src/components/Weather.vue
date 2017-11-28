<template>
  <div>
    <select class="city" v-model="selected" v-on:change="getData">
        <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">
            {{ option.text }}
        </option>
    </select>
    <table>
        <thead>
            <tr>
                <th v-for="item in gridColumns" v-bind:key="item.key">{{item.value}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in gridData" v-bind:key="data.date">
                <td v-for="item in gridColumns" v-bind:key="item.key">{{data[item.key]}}</td>
            </tr>
            <tr>
                <td class="bold-text" v-for="item in gridFooter" v-bind:key="item">{{item}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import qs from "qs";
export default {
    name: "Weather",
    data() {
        return {
            selected: "",
            options: [
                { text: "Jakarta", value: "Jakarta" },
                { text: "Tokyo", value: "Tokyo" },
                { text: "London", value: "London" }
            ],
            gridColumns: [{key: 'date', value:''}, {key:'temp', value:'Temperature'}, {key:'variance', value:'Variance'}],
            gridData: [],
            gridFooter: ['Average', 0, 0]
        };
    },
    methods: {
        getData: function() {
            let _this = this
            let queryString = {
                q: _this.selected,
                mode: "json",
                units: "metric",
                cnt: 5,
                appid: "481e3bc28e5264e5607c2b65b449bfc1"
            };
            fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?${qs.stringify(queryString)}`).then(response => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }
                _this.gridColumns[0].value = _this.selected
                response.json().then(function(data) {
                    _this.gridData = data.list.map(x => { return {
                        date: new Date(x.dt*1000).toISOString().match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})/)[1],
                        temp: x.temp.day,
                        variance: Math.round(( x.temp.max - x.temp.min) * 100) / 100
                    }})
                    _this.gridFooter = ['Average', 0, 0]
                    _this.gridData.map(x => {
                        _this.gridFooter[1] += x.temp
                        _this.gridFooter[2] += x.variance
                    })
                    _this.gridFooter[1] = Math.round((_this.gridFooter[1] / _this.gridData.length) * 100) / 100
                    _this.gridFooter[2] = Math.round((_this.gridFooter[2] / _this.gridData.length) * 100) / 100
                });
            }).catch(err => {
                console.log("Fetch Error :-S", err);
            });
        }
    },
    created() {
        this.selected = this.options[0].value;
        this.getData();
    }
};
</script>

<style>
table {
    margin-top: 20px;
    border-spacing: 0;
}

td, th {
    border: 1px solid #ddd;
    padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2;}

tr:hover {background-color: #ddd;}

th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
}

.bold-text {
    font-weight: bold;
}
</style>
