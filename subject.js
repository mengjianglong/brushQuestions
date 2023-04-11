//配置信息设置
var indexItem = 0; //题目编号
var itemCouAll = subject[subject.length - 1].order; //大题总数
window.onload = function() {
    var orderNo = [];
    //写入各个大题的div
    var itemChooseHTML = '';
    for (var i = 0; i < itemCouAll; i++) {
        itemChooseHTML +=
            `
            <div id = ${'order'+i} >
                <button> - </button>
                <p>第${i+1}道大题</p>
                <ul></ul>
            </div>
            `
    }
    document.getElementById('itemChoose').innerHTML = itemChooseHTML;

    //获取每个div下应有多少li
    var orderCou = [];
    for (var i = 0; i < itemCouAll; i++) {
        var m = 0;
        for (var j = 0; j < subject.length; j++) {
            if (subject[j].order === i + 1) {
                m++;
            }
        }
        orderCou[i] = m;
    }

    for (var i = 0; i < itemCouAll; i++) {
        var optionHTML = '';
        for (var j = 0; j < orderCou[i]; j++) {
            optionHTML += `<li class="noAnswer">${j+1}</li>`
        }
        document.getElementById('order' + i).getElementsByTagName("ul")[0].innerHTML = optionHTML;
    }

    var liList = document.getElementById('itemChoose').getElementsByTagName('li');
    for (var i = 0; i < liList.length; i++) {
        liList[i].index = i;
        liList[i].onclick = function() {
            indexItem = this.index;
            refresh();
        }
    }
    refresh(); //加载题目
}

//
//题目刷新
//
function refresh() {
    //题目序号与题目类型描述文本
    var itemType = ''; //单选题、多选题
    switch (subject[indexItem].type) {
        case "single":
            itemType = '单选题';
            break;
        case "judge":
            itemType = '判断题';
            break;
        case "multiple":
            itemType = '多选题';
            break;
        case "indeterminate":
            itemType = '不定项';
            break;
    }
    document.getElementById("index").innerHTML = indexItem + 1 + '丨' + itemType;

    //题目描述
    var describeText = "";
    describeText += subject[indexItem].describe;
    document.getElementById("describe").innerHTML = describeText;

    //答案选项
    var optNum = subject[indexItem].option.length;
    var optionText = "";
    var inputType = "";
    var inputName = subject[indexItem].type;
    switch (subject[indexItem].type) {
        case "single":
        case "judge":
            inputType = "radio";
            break;
        case "multiple":
        case "indeterminate":
            inputType = "checkbox";
            break;
    }

    for (var i = 0; i < optNum; i++) {
        var itemChecked = '';
        if (subject[indexItem].type === 'indeterminate' || subject[indexItem].type === 'multiple') {
            if (subject[indexItem].answer.charAt(i) !== '_' && subject[indexItem].answer.charAt(i) !== '') {
                itemChecked = 'checked="checked"';
            }
        } else {
            if (subject[indexItem].answer === String.fromCharCode(65 + i)) {
                itemChecked = 'checked="checked"';
            }
        }

        optionText +=
            `
            <li>
                <input type=${inputType} name="opt" value= ${String.fromCharCode(65 + i)} ${itemChecked}/>
                <i>${String.fromCharCode(65 + i)}</i>
                <p>${subject[indexItem].option[i]}</p>
            </li>
            `
    }
    document.getElementById("option").innerHTML = optionText;

    //答案解析
    document.getElementById("knowledge").innerHTML = subject[indexItem].explain;

    //按钮禁用状态
    if (indexItem === 0) {
        document.getElementById("prevItem").className += "enable";
    } else if (indexItem === subject.length - 1) {
        document.getElementById("nextItem").className += "enable";
    } else {
        document.getElementById("prevItem").className = "";
        document.getElementById("nextItem").className = "";
    }

    //设置左侧答题卡对应题目为当前
    var liList = document.getElementById('itemChoose').getElementsByTagName('li');
    for (var i = 0; i < liList.length; i++) {
        if (i === indexItem) {
            liList[i].classList.add('nowAnswer');
        } else {
            liList[i].classList.remove('nowAnswer');
        }
    }

    BindOpt(); //重新绑定点击选项的事件

}


//上/下一题按钮绑定
document.getElementById("prevItem").onclick = function() {
    if (indexItem) {
        indexItem--;
        refresh();
    }
}

document.getElementById("nextItem").onclick = function() {
    if (indexItem < subject.length - 1) {
        indexItem++;
        refresh();
    }
}

//绑定选项按钮单击事件
function BindOpt() {
    for (var i = 0; i < document.getElementById("option").getElementsByTagName('input').length; i++) {

        document.getElementById("option").getElementsByTagName('input')[i].onchange = function() {
            //将当前答案写到JSon中

            subject[indexItem].answer = ''; //清除原有答案
            for (var j = 0; j < document.getElementById("option").getElementsByTagName('input').length; j++) {
                if (document.getElementById("option").getElementsByTagName('input')[j].checked) {
                    subject[indexItem].answer += document.getElementById("option").getElementsByTagName('input')[j].value;
                } else {
                    if (subject[indexItem].type === 'multiple' || subject[indexItem].type === 'indeterminate') {
                        subject[indexItem].answer += '_';
                    }
                }
            }

            //改变左侧答题卡显示状态
            //
            if (YesOrNo(indexItem) === 'noAnswer') {
                document.getElementById('itemChoose').getElementsByTagName('li')[indexItem].classList.add('noAnswer');
                document.getElementById('itemChoose').getElementsByTagName('li')[indexItem].classList.remove('yesAnswer');
            } else {
                document.getElementById('itemChoose').getElementsByTagName('li')[indexItem].classList.add('yesAnswer');
                document.getElementById('itemChoose').getElementsByTagName('li')[indexItem].classList.remove('noAnswer');
            }

        }
    }
}
//判断当前题目是否已作答
function YesOrNo(index) {
    if (subject[index].type === 'multiple') {
        var ans = new Array();
        ans[0] = RepeatNum('_', subject[index].option.length);

        for (var i = 0; i < subject[index].option.length; i++) {
            ans[i + 1] = RepeatNum('_', i) + String.fromCharCode(65 + i) + RepeatNum('_', subject[index].option.length - 1 - i);
        }
        var blockJudge = false; //是否为空
        for (var j = 0; j < ans.length; j++) {
            if (subject[index].answer === ans[j]) {
                blockJudge = true;
                break;
            }
        }
        if (blockJudge || subject[index].answer === '') {
            return 'noAnswer';
        } else {
            return 'yesAnswer';
        }
    } else {
        if (subject[index].answer !== '' && subject[index].answer !== RepeatNum('_', subject[index].option.length)) {
            return 'yesAnswer';
        } else {
            return 'noAnswer';
        }
    }
}


//打印num个str，如times(n,3) nnn
function RepeatNum(str, num) {
    if (num > 1) {
        return str += RepeatNum(str, --num);
    }
    if (num === 1) {
        return str;
    } else {
        return '';
    }
}

document.getElementById('submit').onclick = function() {
    var htmlText = '';
    var account = 0; //总得分
    for (var i = 0; i < subject.length; i++) {
        //计算当前题目得分
        var nowAccount;
        if (subject[i].type === 'single') {
            if (subject[i].answer === '' || subject[i].answer !== subject[i].solution) {
                nowAccount = 0;
            } else {
                nowAccount = 2;
            }
        } else if (subject[i].type === 'judge') {
            if (subject[i].answer === '' || subject[i].answer !== subject[i].solution) {
                nowAccount = -0.5;
            } else {
                nowAccount = 1;
            }
        } else if (subject[i].type === 'indeterminate') {
            if (subject[i].answer === '') { //如果未填写答案
                nowAccount = 0;
            } else {
                var hasError = false; //假设没有错误选项
                for (var j = 0; j < subject[i].option.length; j++) {
                    if (subject[i].answer.charAt(j) !== '_' && subject[i].solution.charAt(j) === '_') { //有错误选项
                        hasError = true;
                        break;
                    }
                }
                if (hasError) {
                    nowAccount = 0;
                } else {
                    nowAccount = subject[i].answer.replace(/_/g, "").length / subject[i].solution.replace(/_/g, "").length * 4;
                }

            }
        } else { //多选题
            if (subject[i].answer === '') { //如果未填写答案
                nowAccount = 0;
            } else {
                var hasError = false; //假设没有错误选项
                for (var j = 0; j < subject[i].option.length; j++) {
                    if (subject[i].answer.charAt(j) !== '_' && subject[i].solution.charAt(j) === '_') { //有错误选项
                        hasError = true;
                        break;
                    }
                }
                if (hasError) {
                    nowAccount = 0;
                } else {
                    if (subject[i].answer === subject[i].solution) { //全部正确
                        nowAccount = 4;
                    } else {
                        if (subject[i].answer.replace(/_/g, "").length >= 4) {
                            nowAccount = 3;
                        } else {
                            nowAccount = subject[i].answer.replace(/_/g, "").length;
                        }
                    }
                }
            }
        }
        htmlText += '题目' + i + '  答案' + subject[i].solution + '            回答' + subject[i].answer + '          得分' + nowAccount.toFixed(2) + '\n';
        account += nowAccount;
    }

    alert(htmlText + '\n总得分：' + account.toFixed(2));
}