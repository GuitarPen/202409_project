// time: 13:55

// bmi歷史資料
const bmiHistoryData = [];

// bmi狀態資料
const bmiStatesData = {
    "overThin": {
        "state": "過輕",
        "color": "藍色"
    },
    "normal": {
        "state": "正常",
        "color": "紅色"
    },
    "overWeight": {
        "state": "過重",
        "color": "澄色"
    },
    "mildFat": {
        "state": "輕度肥胖",
        "color": "黃色"
    },
    "moderateFat": {
        "state": "中度肥胖",
        "color": "黑色"
    },
    "severeFat": {
        "state": "重度肥胖",
        "color": "綠色"
    },
};

// 輸出bmi歷史資料
function showHistoryData(){
    let bmiNum = bmiHistoryData.length;
    let lastNum = bmiNum - 1;
    let lastBmi = bmiHistoryData[lastNum].bmi;
    let lastState = bmiHistoryData[lastNum].state;
    return `您總共計算 ${bmiNum} 次 BMI 紀錄，最後一次 BMI 指數為 ${lastBmi}，體重${bmiStatesData[lastState].state}！健康指數為${bmiStatesData[lastState].color}！`;
};

// 新增bmi歷史資料
function addData(bmi,state){
    let obj = {};
    obj.bmi = bmi;
    obj.state = state;
    bmiHistoryData.push(obj);
};

// bmi計算
function calculateBmi(height, weight){
    if(typeof height !== 'number' || typeof weight !== 'number'){
        return false;
    }
    let bmi = Number((weight/(height/100)**2).toFixed(2));
    return bmi;
}

// 獲得bmi狀態
function getBmiState(bmi){
    let bmiState = "";
    if(bmi < 18.5){
        bmiState = "overThin";
    }else if(bmi < 24){
        bmiState = "normal";
    }else if(bmi < 27){
        bmiState = "overWeight";
    }else if(bmi < 30){
        bmiState = "mildFat";
    }else if(bmi < 35){
        bmiState = "moderateFat";
    }else if(bmi >= 35){
        bmiState = "severeFat";
    }
    return bmiState;
}

// 印出及新增bmi
function printBmi(height, weight){
    let bmi = calculateBmi(height, weight);
    let state = getBmiState(bmi);
    if(bmi === false){
        return `您的數值輸入錯誤，請重新輸入`;
    }
    addData(bmi,state);
    return `您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`;
};

console.log(printBmi('12', 20));
console.log(printBmi(178, 20));
console.log(printBmi(178, 70));
console.log(printBmi(178, 85));
console.log(showHistoryData());