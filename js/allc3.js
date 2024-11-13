let data = [];
axios.get('https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json?token=AAQWFQDSNRRXC6FBW7PDSETBOESVW')
        .then(function (response) {
                data = response.data;
                console.log(data);
                renderData1();
                renderData2();
                renderData3();
                renderData4();
        })

// 一條長條圖：接案公司的薪資滿意度平均分數
function renderData1() {
        let chartAry = [];
        chartAry.push('接案公司');

        // let totle = 0;
        data.forEach(function (item) {
                if (item.company.industry === '接案公司') {
                        let score = Number(item.company.salary_score);
                        chartAry.push(score);
                }
                // totle += score;
        });
        // console.log(parseInt(totle / data.length));
        console.log(chartAry);

        let chart1 = c3.generate({
                bindto: '#chart1',
                data: {
                        columns: [chartAry],
                        type: 'bar'
                },
                bar: {
                        width: {
                                ratio: 0.5 // this makes bar width 50% of length between ticks
                        }
                        // or
                        //width: 100 // this makes bar width 100px
                }
        });

        setTimeout(function () {
                chart1.load({
                        columns: [
                                // ['data3', 130, -150, 200, 300, -200, 100]
                        ]
                });
        }, 1000);
}

// 二條長條圖：抓取博弈、電商公司兩個產業滿意度的平均分數
function renderData2() {
        let boyeeNum = 0; // 博奕公司總數
        let boyeeScoreTotle = 0; // 博奕公司滿意度總分
        let densenNum = 0; // 電子商務公司總數
        let densenScoreTotle = 0; // 電子商務公司滿意度總分

        data.forEach(function (item) {
                if (item.company.industry === "博奕") {
                        boyeeNum++;
                        let score = Number(item.company.score);
                        boyeeScoreTotle += score;
                } else if (item.company.industry === "電子商務") {
                        densenNum++;
                        let score = Number(item.company.score);
                        densenScoreTotle += score;
                }
        });
        console.log(boyeeNum, boyeeScoreTotle, densenNum, densenScoreTotle);

        let boyeeScore = boyeeScoreTotle / boyeeNum; // 博奕公司滿意度平均分數
        let densenScore = densenScoreTotle / densenNum; // 電子商務公司滿意度平均分數

        let chart2 = c3.generate({
                bindto: '#chart2',
                data: {
                        columns: [
                                ['博奕', boyeeScore],
                                ['電子商務', densenScore]
                        ],
                        type: 'bar'
                },
                bar: {
                        width: {
                                ratio: 0.5 // this makes bar width 50% of length between ticks
                        }
                        // or
                        //width: 100 // this makes bar width 100px
                }
        });

        setTimeout(function () {
                chart2.load({
                        columns: [
                                // ['data3', 130, -150, 200, 300, -200, 100]
                        ]
                });
        }, 1000);
}

// 圓餅圖：撈取男性跟女性比例有多少
function renderData3() {
        let manNum = 0; // 男性總數
        let womanNum = 0; // 女性總數

        data.forEach(function (item) {
                if (item.gender === "男性") {
                        manNum ++;
                } else if (item.gender === "女性") {
                        womanNum ++;
                }
        })
        console.log(manNum, womanNum);
        
        let chart3 = c3.generate({
                bindto: '#chart3',
                data: {
                        // iris data from R
                        columns: [
                                ['男性', manNum],
                                ['女性', womanNum],
                        ],
                        type: 'pie',
                        onclick: function (d, i) { console.log("onclick", d, i); },
                        // onmouseover: function (d, i) { 
                        //         console.log("onmouseover", d, i); 
                        // },
                        // onmouseout: function (d, i) { 
                        //         console.log("onmouseout", d, i); 
                        // }
                }
        });

        // setTimeout(function () {
        //         chart.load({
        //                 columns: [
        //                         ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
        //                         ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
        //                         ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
        //                 ]
        //         });
        // }, 1500);

        // setTimeout(function () {
        //         chart.unload({
        //                 ids: 'data1'
        //         });
        //         chart.unload({
        //                 ids: 'data2'
        //         });
        // }, 2500);
}

// 圓餅圖：顯示薪水區間分佈
function renderData4() {

        // 取出每個人的年薪，並計算每個薪水區間的人數
        const chartObj = {}; // {36 萬以下:14, 36~50 萬:117, 51~60 萬:96, ...}
        data.forEach(function (item) {
                let salary = item.company.salary;
                if (chartObj[salary] === undefined) {
                        chartObj[salary] = 1;
                } else {
                        chartObj[salary]++;
                }
        });
        console.log(chartObj);

        // 將資料轉成 c3js 格式
        const chartAry = Object.keys(chartObj); // [36 萬以下,36~50 萬,51~60 萬, ...]
        let c3Columns = [];
        chartAry.forEach(function (item) {
                let ary = [item, chartObj[item]];
                c3Columns.push(ary);
        })
        console.log(c3Columns);

        // c3js
        let chart = c3.generate({
                bindto: '#chart4',
                data: {
                        // iris data from R
                        columns: c3Columns,
                        type: 'pie',
                        onclick: function (d, i) { console.log("onclick", d, i); },
                        // onmouseover: function (d, i) { 
                        //         console.log("onmouseover", d, i); 
                        // },
                        // onmouseout: function (d, i) { 
                        //         console.log("onmouseout", d, i); 
                        // }
                }
        });
}