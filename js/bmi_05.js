// time: 17.53

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
// 輸出bmi狀態資料
function bmiStatesText(state) {
    console.log(`您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`);
};
// 輸出bmi歷史資料
function showHistoryData() {
    let bmiNum = bmiHistoryData.length;
    let lastNum = bmiNum - 1;
    let lastBmi = bmiHistoryData[lastNum].bmi;
    let lastState = bmiHistoryData[lastNum].state;
    console.log(`您總共計算 ${bmiNum} 次 BMI 紀錄，最後一次 BMI 指數為 ${lastBmi}，體重${bmiStatesData[lastState].state}！健康指數為${bmiStatesData[lastState].color}！`);
}
// 新增bmi歷史資料
function addData(bmi, state) {
    let obj = {};
    obj.bmi = bmi;
    obj.state = state;
    bmiHistoryData.push(obj);
};
// bmi計算
function printBmi(height, weight) {
    let bmi = Number((weight/(height/100)**2).toFixed(2));
    console.log(bmi);

    if(bmi<18.5){
        bmiStatesText('overThin');
        addData(bmi, 'overThin');
    } else if(bmi>=18.5 && bmi<24){
        bmiStatesText('normal');
        addData(bmi, 'normal');
    } else if(bmi>=24 && bmi<27){
        bmiStatesText('overWeight');
        addData(bmi, 'overWeight');
    } else if(bmi>=27 && bmi<30){
        bmiStatesText('mildFat');
        addData(bmi, 'mildFat');
    } else if(bmi>=30 && bmi<35){
        bmiStatesText('moderateFat');
        addData(bmi, 'moderateFat');
    } else if(bmi>=35){
        bmiStatesText('severeFat');
        addData(bmi, 'severeFat');
    } else {
        console.log(`您的數值輸入錯誤，請重新輸入`);
    }
};

printBmi(178, 20) 
// 您的體重過輕
printBmi(178, 70) 
// 您的體重正常
printBmi(178, 85)
// 您的體重過重
// printBmi(178, 90)
// // 您的體重輕度肥胖
// printBmi(178, 110)
// // 您的體重中度肥胖
// printBmi(178, 130)
// // 您的體重重度肥胖
// printBmi("身高","體重")
// 您的數值輸入錯誤，請重新輸入
showHistoryData();
console.log(bmiHistoryData);

// 第一階段：請寫 printBmi 函式，並印出對應狀態

// printBmi(178, 20) 
// 您的體重過輕
// printBmi(178, 70) 
// 您的體重正常
// printBmi(178, 85)
// 您的體重過重
// printBmi(178, 90)
// 您的體重輕度肥胖
// printBmi(178, 110)
// 您的體重中度肥胖
// printBmi(178, 130)
// 您的體重重度肥胖
// printBmi("身高","體重")
// 您的數值輸入錯誤，請重新輸入

// 52(公斤)/1.552 ( 公尺2 )= 21.6
// 體重過輕 BMI ＜ 18.5
// 體重正常 18.5≦BMI＜24
// 體重過重 24≦BMI＜27
// 體重輕度肥胖 27≦BMI＜30
// 體重中度肥胖 30≦BMI＜35
// 體重重度肥胖 BMI≧35


// 第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。

// printBmi(178, 20) 
// 您的體重過輕，健康指數為藍色
// printBmi(178, 70) 
// 您的體重正常，健康指數為紅色
// printBmi(178, 85)
// 您的體重過重，健康指數為澄色
// printBmi(178, 90)
// 您的體重輕度肥胖，健康指數為黃色
// printBmi(178, 110)
// 您的體重中度肥胖，健康指數為黑色
// printBmi(178, 130)
// 您的體重重度肥胖，健康指數為綠色
// printBmi("身高","體重")
// 您的數值輸入錯誤，請重新輸入

// const bmiStatesData = {
//     "overThin": {
//         "state": "過輕",
//         "color": "藍色"
//     },
//     "normal": {
//         "state": "正常",
//         "color": "紅色"
//     },
//     "overWeight": {
//         "state": "過重",
//         "color": "澄色"
//     },
//     "mildFat": {
//         "state": "輕度肥胖",
//         "color": "黃色"
//     },
//     "moderateFat": {
//         "state": "中度肥胖",
//         "color": "黑色"
//     },
//     "severeFat": {
//         "state": "重度肥胖",
//         "color": "綠色"
//     },
// }


// 第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// showHistoryData() >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」