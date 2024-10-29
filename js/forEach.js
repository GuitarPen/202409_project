let data = [
    {
        Charge: '免費',
        name: '鉛筆充電站',
    },
    {
        Charge: '投幣式',
        name: '小花充電站',
    },
    {
        Charge: '投幣式',
        name: '小明充電站',
    },
    {
        Charge: '投幣式',
        name: '小天充電站',
    }
];



const list = document.querySelector('.list');

// 預設載入函式 - 外包一層function初始化狀態
function init(){
    let str = '';
    data.forEach(function(item,index){
        let content = `<li>${item.name}，${item.Charge}</li>`;
        str += content;
        // <li>xxx充電站，免費</li>
    });
    list.innerHTML = str;
};

init();

// 篩選器選擇
const stationFilter = document.querySelector('.filter');
stationFilter.addEventListener('click',function(e){
    if(e.target.value == undefined){
        console.log('你點到空的地方');
        return;
    }
    let str = '';
    data.forEach(function(item,index){
        let content = `<li>${item.name}，${item.Charge}</li>`;
        if(e.target.value == '全部'){
            str += content;
        } else if(e.target.value == item.Charge){
            str += content;
        }
    });
    list.innerHTML = str;
});

// 新增邏輯
const stationName = document.querySelector('.stationName');
const stationCharge = document.querySelector('.stationCharge');
const btn = document.querySelector('.btn');

btn.addEventListener('click',function(e){
    let obj = {};
    obj.name = stationName.value;
    obj.Charge = stationCharge.value;
    data.push(obj);
    // 新增資料後重新載入
    init();
    // 清空輸入框
    stationName.value = '';
    stationCharge.value = '';
});

