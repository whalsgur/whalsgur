
loadScriptTag("https://www.gstatic.com/firebasejs/5.4.2/firebase.js", loadFirebase);

var database;

function loadFirebase () {
    
    var config = {
        apiKey: "AIzaSyAp_OWYrUppltYGxKMOuux26JR6CoP5Jq4",
        authDomain: "whalsgur2-81cdc.firebaseapp.com",
        databaseURL: "https://whalsgur2-81cdc.firebaseio.com",
        projectId: "whalsgur2-81cdc",
        storageBucket: "",
        messagingSenderId: "857597652212"
    };
    
    firebase.initializeApp(config);
    database = firebase.database();
    
    all();
    // loadText();
    
}
  // Initialize Firebase



function all () {




var bgBox = box().append().size(400, 510).border(0).disableSelection();

var mainBox = box().appendTo(bgBox).size('100%').border(0).hide();
var loginBox = box().appendTo(bgBox).size('100%').border(0).show();
var fBox = box().appendTo(bgBox).size('100%').border(0).hide();
var contentBox = box().appendTo(bgBox).size('100%').border(0).hide();
var chetBox = box().appendTo(bgBox).size('100%').border(0, 'red').hide();






var ttt2 = box().appendTo(mainBox).size('98%', 50).text('', 0).maxHeight(100).overflow('auto').border(0, 'black').borderBottom(1);
var pageBox = box().appendTo(mainBox).size('98%', 50).border(1, 'black', 10).marginTop(5);
var gg = box().appendTo(mainBox).size('99%', 390).text('', 50).border(0).marginTop(10).show().border(0, 'black').borderTop(1).borderBottom(1);
// box().appendTo(gg).size('99%', 'auto').text('게시판 이름', 20).border(0, 'black').borderBottom(1);
var ttt = box().appendTo(gg).size('100%', 360).border(0, 'red').maxHeight(360).overflow('auto').marginTop(15);
var textBox = box().appendTo(mainBox).size('100%', 400).border(1, 'red').hide();
var writeBox = box().appendTo(bgBox).size('100&', '100%').border(1).hide();








var title = box().appendTo(contentBox).size('97%', 'auto').text('', 30).border(0, 'black').borderBottom(1).marginTop(5);

var writerBox22 = box().appendTo(contentBox).size('auto').text('작성자:', 15).align('left').moveLeft(50).marginTop(10).padding('5 8').border(1, 'black', 10);
var writerBox = box().appendTo(writerBox22).size('auto').text('', 15).border(0).margin('0 10');
var timeBox = box().appendTo(contentBox).size('auto').text('날짜:', 15).align('left').moveLeft(50).margin(5).marginTop(10).padding('5 8').border(1, 'black', 10);

var conconcBox = box().appendTo(contentBox).size('97%', 360).text('', 20).align('left').border(1, 'black').padding(10).marginTop(5).maxHeight(360).overflow('auto');

var goBack = box().appendTo(contentBox).size(40).icon('color-icons:previous').border(0).click(clickBack).marginTop(4).moveLeft(170);






var menuBox = box().appendTo(ttt2).size('20%', 'auto').text('Menu', 20).marginTop(6).float('left').border(1, 'black', 5).padding('2 5').moveRight(5).click(sideClick);


box().appendTo(ttt2).size(50, 40).image("/fdn/NcTscryaXw").padding('2 5').border(0, 'black').float('right').marginTop(4).click(clickWrite);

var useridBox = box().appendTo(ttt2).size('auto').text('', 20).marginTop(6).float('right').border(1, 'black', 15).padding('2 5').minWidth(50);



var preBox = box().appendTo(pageBox).size(30).icon('glyphicons:triangle-left').border(0).marginTop(7).click(clickPre).hide();
var numBox = box().appendTo(pageBox).size(320, 45).border(0).marginTop(0);
var nextBox = box().appendTo(pageBox).size(30).icon('glyphicons:triangle-right').border(0).marginTop(7).click(clickNext);




box().appendTo(writeBox).size('98%', 'auto').text('제목', 25).border(0, 'black').borderBottom(1);
var titleBox = box().appendTo(writeBox).size('90%', 'auto').text('', 20).editable().border(1, 'black').marginTop(5);

var conBox = box().appendTo(writeBox).size('99%', 350).text('', 20).editable().marginTop(15).maxHeight(350).padding(10).overflow('auto').align('left').border(1, 'black');

box().appendTo(writeBox).size('30%', 'auto').text('취소', 20).margin(5).marginTop(20).padding('3 5').border(1, 'black', 10).click(writeBack);
box().appendTo(writeBox).size('30%', 'auto').text('확인', 20).margin(5).marginTop(20).padding('3 5').border(1, 'black', 10).click(WRITE);









var sideBox = box().append().size(200, '100%').color('white').positionFixed().left(bgBox.left()-200).float('left').top(bgBox.top());// 로고 박스 클릭시 나오는 박스: 여러 메뉴가 있음
box().appendTo(sideBox).size(40).text('X', 30).border(0).marginTop(10).left(sideBox.left() + 160).click(sideOut);//사이드 박스 없애기

box().appendTo(sideBox).size(180, 'auto').text('게시판', 25).border(1, 'black', 10).marginTop(90).click(click1).padding('5 0');
box().appendTo(sideBox).size(180, 'auto').text('채팅', 25).border(1, 'black', 10).marginTop(30).click(click4).padding('5 0');
box().appendTo(sideBox).size(180, 'auto').text('친구', 25).border(1, 'black', 10).marginTop(30).click(click2).padding('5 0');
box().appendTo(sideBox).size(180, 'auto').text('로그아웃', 25).border(1, 'black', 10).marginTop(30).click(click3).padding('5 0');











var useridBox2 = box().appendTo(fBox).size('auto').text('', 20).marginTop(10).border(1, 'black', 15).padding('2 5').moveLeft(150).minWidth(50).click(sideClick);

box().appendTo(fBox).size('98%', 'auto').text('친구목록', 30).border(0).marginTop(10);

var friendsBox = box().appendTo(fBox).size('95%', 300).border(1, 'black').maxHeight(300).overflow('auto').marginTop(20);

box().appendTo(fBox).size('40%', 'auto').text('친구추가', 20).margin(10).marginTop(30).padding('5 5').border(1, 'black', 15).click(fplus);
box().appendTo(fBox).size('40%', 'auto').text('친구삭제', 20).margin(10).marginTop(30).padding('5 5').border(1, 'black', 15).click(fmin);


var friendplusBox = box().appendTo(bgBox).size(340, 306).color('Ivory').marginTop(30).borderRadius(5).positionFixed().center().hide();
box().appendTo(friendplusBox).size('95%', 'auto').text('X', 20).align('right').border(0).marginTop(5).click(fOut);//사이드 박스 없애기
box().appendTo(friendplusBox).size('98%', 'auto').text('친구추가', 25).border(0).marginTop(0);

box().appendTo(friendplusBox).size('40%', 'auto').text('아이디로 추가', 15).marginTop(20).moveLeft(100).border(0);
var fid = box().appendTo(friendplusBox).size('90%', 30).textSize(20).editable().marginTop(10).overflow('auto').keydown(onKey3);

box().appendTo(friendplusBox).size('40%', 'auto').text('별명으로 추가', 15).marginTop(25).moveLeft(100).border(0);
var fnick = box().appendTo(friendplusBox).size('90%', 30).textSize(20).editable().marginTop(10).overflow('auto').keydown(onKey4);

var abcbcbcb = box().appendTo(friendplusBox).size('40%', 'auto').text('추가하기', 15).marginTop(20).padding('5 3').border(1, 'black', 15).click(fsearch);




var friendminusBox = box().appendTo(bgBox).size(340, 306).color('Ivory').marginTop(30).borderRadius(5).positionFixed().center().hide();
box().appendTo(friendminusBox).size('95%', 'auto').text('X', 20).align('right').border(0).marginTop(5).click(fOut);//사이드 박스 없애기
box().appendTo(friendminusBox).size('98%', 'auto').text('친구삭제', 25).border(0).marginTop(0);
var fminloadBox = box().appendTo(friendminusBox).size('98%', 200).border(1, 'black').maxHeight(200).overflow('auto').marginTop(10);












var side = 'out';

var nowPage = 1;
var start = 1;
var end = 10;

var msg = ['', '', '2hjk', '3hjk3', '4hjk4', '5hkj5', '6hk6', '7hjk7', '8hk8', '9hj9', 'ffsadf',
           'dgsgf', 'ddfgsf', 'dffsgs', 'dsdfgsfs', 'ddfgf', 'ddfgfs', 'dgfdgf', 'dsdfgsf', 'ddfgf', 'ddfgf', 
           'sdaf', 'ad', 'dfd', 'dffdhd', 'ahjksf', 'asdf', 'sdf', 'fdsfc', 'fsadf', 'fdfsfdgf',
           'sdaasdff', 'afgsfgbd', 'dfdfdgs', 'dfdfgsd', 'asteryruf', 'ahksdf', 'sdffsadff', 'ffgdsfc', 'fsasdfgdf', 'fddfgff',
           'sdaasdff', 'ad', 'dfdafy', 'dffsgd', 'asf', 'ashjkdf', 'shjkdf', 'fdsfc', 'fsadf', 'fdrtyff',
           'sdadff', 'adfgs', 'dfd', 'dhgdfd', 'ahjksf', 'asdf', 'safhdf', 'fdsfc', 'fsadfgf', 'fertyff', 
           'sdasadff', 'ad', 'dfd','dfd', 'asf', 'asdfgjdf', 'sdfhjg', 'fdsfc', 'fsadf', 'fdfsfgf',
           'sdasdff', 'adfgrtd', 'dfdaert', 'dfhld', 'ashjf', 'asdf', 'sghdf', 'fdsfc', 'fsadf', 'fdfdgff', 
           'fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs', 'fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs'
           ,'fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs','fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs', 'fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs','fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs',
           '2hjk', '3hjk3', '4hjk4', '5hkj5', '6hk6', '7hjk7', '8hk8', '9hj9', 'ffsadf',
           'dgsgf', 'ddfgsf', 'dffsgs', 'dsdfgsfs', 'ddfgf', 'ddfgfs', 'dgfdgf', 'dsdfgsf', 'ddfgf', 'ddfgf', 
           'sdaf', 'ad', 'dfd', 'dffdhd', 'ahjksf', 'asdf', 'sdf', 'fdsfc', 'fsadf', 'fdfsfdgf',
           'sdaasdff', 'afgsfgbd', 'dfdfdgs', 'dfdfgsd', 'asteryruf', 'ahksdf', 'sdffsadff', 'ffgdsfc', 'fsasdfgdf', 'fddfgff',
           'sdaasdff', 'ad', 'dfdafy', 'dffsgd', 'asf', 'ashjkdf', 'shjkdf', 'fdsfc', 'fsadf', 'fdrtyff',
           'sdadff', 'adfgs', 'dfd', 'dhgdfd', 'ahjksf', 'asdf', 'safhdf', 'fdsfc', 'fsadfgf', 'fertyff', 
           'sdasadff', 'ad', 'dfd','dfd', 'asf', 'asdfgjdf', 'sdfhjg', 'fdsfc', 'fsadf', 'fdfsfgf',
           'sdasdff', 'adfgrtd', 'dfdaert', 'dfhld', 'ashjf', 'asdf', 'sghdf', 'fdsfc', 'fsadf', 'fdfdgff', 
           'fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs', 'fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs'
           ,'fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs','fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs', 'fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs','fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs',
           '2hjk', '3hjk3', '4hjk4', '5hkj5', '6hk6', '7hjk7', '8hk8', '9hj9', 'ffsadf',
           'dgsgf', 'ddfgsf', 'dffsgs', 'dsdfgsfs', 'ddfgf', 'ddfgfs', 'dgfdgf', 'dsdfgsf', 'ddfgf', 'ddfgf', 
           'sdaf', 'ad', 'dfd', 'dffdhd', 'ahjksf', 'asdf', 'sdf', 'fdsfc', 'fsadf', 'fdfsfdgf',
           'sdaasdff', 'afgsfgbd', 'dfdfdgs', 'dfdfgsd', 'asteryruf', 'ahksdf', 'sdffsadff', 'ffgdsfc', 'fsasdfgdf', 'fddfgff',
           'sdaasdff', 'ad', 'dfdafy', 'dffsgd', 'asf', 'ashjkdf', 'shjkdf', 'fdsfc', 'fsadf', 'fdrtyff',
           'sdadff', 'adfgs', 'dfd', 'dhgdfd', 'ahjksf', 'asdf', 'safhdf', 'fdsfc', 'fsadfgf', 'fertyff', 
           'sdasadff', 'ad', 'dfd','dfd', 'asf', 'asdfgjdf', 'sdfhjg', 'fdsfc', 'fsadf', 'fdfsfgf',
           'sdasdff', 'adfgrtd', 'dfdaert', 'dfhld', 'ashjf', 'asdf', 'sghdf', 'fdsfc', 'fsadf', 'fdfdgff', 
           'fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs', 'fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs'
           ,'fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs','fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs', 'fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs','fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs',
           '2hjk', '3hjk3', '4hjk4', '5hkj5', '6hk6', '7hjk7', '8hk8', '9hj9', 'ffsadf',
           'dgsgf', 'ddfgsf', 'dffsgs', 'dsdfgsfs', 'ddfgf', 'ddfgfs', 'dgfdgf', 'dsdfgsf', 'ddfgf', 'ddfgf', 
           'sdaf', 'ad', 'dfd', 'dffdhd', 'ahjksf', 'asdf', 'sdf', 'fdsfc', 'fsadf', 'fdfsfdgf',
           'sdaasdff', 'afgsfgbd', 'dfdfdgs', 'dfdfgsd', 'asteryruf', 'ahksdf', 'sdffsadff', 'ffgdsfc', 'fsasdfgdf', 'fddfgff',
           'sdaasdff', 'ad', 'dfdafy', 'dffsgd', 'asf', 'ashjkdf', 'shjkdf', 'fdsfc', 'fsadf', 'fdrtyff',
           'sdadff', 'adfgs', 'dfd', 'dhgdfd', 'ahjksf', 'asdf', 'safhdf', 'fdsfc', 'fsadfgf', 'fertyff', 
           'sdasadff', 'ad', 'dfd','dfd', 'asf', 'asdfgjdf', 'sdfhjg', 'fdsfc', 'fsadf', 'fdfsfgf',
           'sdasdff', 'adfgrtd', 'dfdaert', 'dfhld', 'ashjf', 'asdf', 'sghdf', 'fdsfc', 'fsadf', 'fdfdgff', 
           'fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs', 'fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs'
           ,'fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs','fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs', 'fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs','fds', 'tyertydf', 'wretdf', 'dtryf', 'sdsdfhf', 'sdghjf', 'dsdfgfs'];

var last = 100;
// alert(last);

// function checklast () {
    
//     database.ref('Datas').once('value').then( function(snapshot) {
//         last = snapshot.numChildren();
//     });
// }



var logBox = box().appendTo(loginBox).size(340, 306).color('white').marginTop(30).border(1, 'black', 5).positionFixed().center().show();//로그인박스 전체
var logBox2 = box().appendTo(loginBox).size(340, 255).color('white').marginTop(30).border(1, 'black', 5).positionFixed().center().hide();//로그인박스 전체

box().appendTo(logBox).text('로그인', 28).border(0).size('100%', 'auto').marginTop(25);//필요없는 것

box().appendTo(logBox).size('auto' , '11%').text('아이디', 15).border(0).marginTop(43).marginRight(10);//필요없는 것
var log1 = box().appendTo(logBox).size('75%', 'auto').marginTop(35).textSize(18).border(1, 'black', 10).padding('2 0').moveRight(8).editable().keydown(onKey);//아이디 입력상자

box().appendTo(logBox).size('auto' , '11%').text('비밀번호', 15).border(0).marginTop(10).marginRight(10);//필요없는 것
var log2 = box().appendTo(logBox).size('75%', 'auto').marginTop(10).textSize(18).border(1, 'black', 10).padding('2 0').editable().keydown(onKey);//비번 입력 상자


var abc = box().appendTo(logBox).size('auto').marginTop(35).text('로그인', 14).padding('10 30').border(1, 'black', 8).click(logClick).marginRight(10);//로그인 버튼
box().appendTo(logBox).size('auto').marginTop(35).text('회원가입', 15).padding('10 25').border(1, 'black', 8).click(logClick2).marginLeft(10);//회원가입 버튼


box().appendTo(logBox2).size('auto').text('별명을 적어주세요', 30).border(0).marginTop(30).marginRight(10);//필요없는 것
var log3 = box().appendTo(logBox2).size('80%', 'auto').marginTop(30).textSize(25).border(3, 'black', 10).padding('2 0').editable().keydown(onKey2);//별명 입력 상자
var abcde = box().appendTo(logBox2).size('auto').marginTop(35).text('확인', 25).padding('10 40').border(1, 'black', 8).click(logIn2).marginRight(10);//별명 확인 버튼



// #edbbc7
// #8bcbd6













box().appendTo(chetBox).size('20%', 'auto').text('Menu', 20).marginTop(10).border(1, 'black', 5).padding('2 5').click(sideClick);
box().appendTo(chetBox).size('58%', 51).text('채팅', 40).border(0).marginTop(10);
var lognowBox = box().appendTo(chetBox).size('20%', 'auto').text('로그아웃', 15).marginTop(25).border(1, 'black', 15).padding('2 5').click(clickOut).hide();
var useridBox3 = box().appendTo(chetBox).size('20%', 'auto').text('', 15).marginTop(10).border(1, 'black', 15).padding('2 5');
var dataBox = box().appendTo(chetBox).size('100%', 320).marginTop(20).border(0).overflow('auto').maxHeight(320).scrollTop(100000000000000);


var textBox2 = box().appendTo(chetBox).size('75%', 'auto').textSize(25).editable().marginTop(18).border(2, 'black', 5).maxHeight(100).overflow('auto');
box().appendTo(chetBox).size('20%', 'auto').text('전송', 25).padding('5 0').marginTop(15).marginLeft(10).border(1, 'black', 15).click(makeApp);















// for (var i=1; i<=last*10; i++) {
//     box().appendTo(findBox('menu'+ (i/10))).size('95%', 35).text('abcdefgdfdsgsadgfd', 20).border(1, 'black').data(i).marginTop(0).click(loadText);
// }



// for (var i=1; i<=12; i++) {
//     for (var q=1; q<=10; q++) {
//         box().appendTo('menu' + i).size('95%', 35).text(msg[(i*10) + q], 20).border(1, 'black').data((i*10) + q).marginTop(0).click(loadText);
//     }
// }


// for (var i=11; i<=last*10; i++) {
//     box().appendTo(textBox).size('100%', 300).overflow('auto').text(msg[i], 50).border(1).marginTop(10).id('text'+i).hide();
// }



















var user;
var num;

function logClick () { //로그인 클릭시

    if (log1.text() == '') {
        alert('아이디를 입력해주세요');
        return;
    }
    
    if (log2.text() == '') {
        alert('비밀번호를 입력해주세요');
        return;
    }
    
    
    var Users = [];
    
    
    database.ref('User').once('value').then( function(snapshot){
        num = snapshot.numChildren();
        snapshot.forEach(function(childSnapshot){
            num--;
            Users.push(childSnapshot.val());
            
            if (num == 0) {
                
                var isUser = false;
                var pa = false;
        
                for (var i = 0; i<Users.length; i++) {
                    
                    if(log1.text() == Users[i].id) {
                        isUser = true;
                        if (log2.text() == Users[i].pw) {
                            pa = true;
                            user = Users[i];
                        }
                        break;
                    }//if(log1)
                
                }//for
                
                
                if (isUser) {
                    
                    if (pa) {
                        alert(user.nick + '님 환영합니다');
                        log1.text('');
                        log2.text('');
                        logBox.hide();
                        logBox2.hide();
                        loginBox.hide();
                        mainBox.show();
                        useridBox.text(user.nick);
                        useridBox2.text(user.nick);
                        useridBox3.text(user.nick);
                        loadFriends();
                        loadFriends2();
                        loadText2();
                        dataBox.scrollTop(100000)
                        return;
                    }
                    
                    else {
                        alert('비밀번호가 일치하지 않습니다');
                        return;
                    }
                }
                
                else if (isUser == false) {
                    alert('일치하는 아이디가 없습니다');
                    return;
                }
            
                
                
            }
        });
    
        
    });
    
}//func

var num2;
var id;
var pw;

function logClick2 () {
    
    if (log1.text() == '') {
        alert('아이디를 입력해주세요');
        return;
    }
    
    if (log2.text() == '') {
        alert('비밀번호를 입력해주세요');
        return;
    }
    
    
    var ids2 = [];
    
    database.ref('User').once('value').then( function(snapshot){
        num2 = snapshot.numChildren();
        snapshot.forEach(function(childSnapshot){
            num2--;
            ids2.push(childSnapshot.val().id);
            if (num2 ==0) {
                
                var isUser2 = false;
        
                for (var i = 0; i<ids2.length; i++) {
                    if(log1.text() == ids2[i]) {
                        isUser2 = true;
                        break;
                    }
            
                }
      
                if (isUser2 == true) {
                    alert ('이미 존재하는 아이디입니다');
                    return;
                }//if
                
                else if (isUser2 == false) {
                    id = log1.text();
                    pw = log2.text();
                    log1.text('');
                    log2.text('');
                    alert('회원가입 되었습니다');
                    logBox.hide();
                    logBox2.show();
                    return;
                }
                
            }
        });
    });
    
    
}//func



function logIn () {
    logBox.hide();
    logBox2.show();
}

var num3 = 0;

function logIn2 () {
    
    
    var nick = log3.text();
    var ids3 = [];
    
    database.ref('User').once('value').then(function(snapshot){
        num3 = snapshot.numChildren();
        snapshot.forEach(function(childSnapshot){
            num3--;
            ids3.push(childSnapshot.val().nick);
            
            if (num3 ==0) {
                
                var isUser3 = false;
        
                for (var i = 0; i<ids3.length; i++) {
                    if(log3.text() == ids3[i]) {
                        isUser3 = true;
                        break;
                    }
            
                }
      
                if (isUser3 == true) {
                    alert ('이미 존재하는 별명입니다');
                    return;
                }//if
                
                else if (isUser3 == false) {
                    logIn3();
                    return;
                }
                
            }
        });
    });
    
    
    
    
}

    

function logIn3 () {
    
    var data = {};
    
    data.id = id;
    data.pw = pw;
    data.nick = log3.text();
    data.freinds = {};
    database.ref('User/' + id).set(data);
                    
    user = data
                    
    log1.text('');
    log2.text('');
    log3.text('');
    loginBox.hide();
    logBox.hide();
    logBox2.hide();
    mainBox.show();
    useridBox.text(user.nick);
    useridBox2.text(user.nick);
    useridBox3.text(user.nick);
    loadFriends();
    loadFriends2();
    loadText();
    loadText2();
    dataBox.scrollTop(1000000000)
}







var keycode = [8, 9, 37, 38, 39, 40, 46];




function onKey (bx, e) {
    
    if (keycode.has(e.keyCode)) {
        var a = false
    }
    
    if (e.keyCode == 13) {
        abc.click();
        return false;
    }
    
    if (bx == log1 && log1.text().length >= 15 && a != false) {
        return false;
    }
    
    if (bx == log2 && log2.text().length >= 15 && a != false) {
        return false;
    }
    
    if (e.keyCode == 13) {
        abc.click();
        return false;
    }
}

function onKey2 (bx, e) {
    
    if (e.keyCode == 13) {
        abcde.click()
        return false;

    }
    
    if (keycode.has(e.keyCode)) {
        var a = false
    }
    
    if (log3.text().length >= 7 && a != false) {
        return false;
    }
    
    
}














function makeApp() {
    
    if (textBox2.text() == '') {
        return;
    }
    
    // if (logNow == 'out') {
    //     alert('로그인을 해주세요');
    //     return;
    // }

    
    var d = new Date();
    var msg = {};
    msg.time = d.getFullYear()+'.'+(d.getMonth()+1)+'.'+d.getDate()+'-'+d.getHours()+':'+d.getMinutes()
    msg.id = user.id;
    msg.nick = user.nick;
    msg.text = textBox2.text();
    database.ref('msgs').push().set(msg);
    textBox2.text('');
}










dataBox.scrollTop(100000)

function loadText2() {
    
    dataBox.scrollTop(100000)
    
    database.ref('msgs').on('value', function(snapshot){
        dataBox.clear();
        snapshot.forEach(function(childSnapshot){
            var ttt = box().appendTo(dataBox).size('90%', 'auto').border(0).marginTop(10);
            var usus = box().appendTo(ttt).size('100%', 'auto').text(childSnapshot.val().nick, 15).align('left').border(0).marginTop(4);
            var fff = box().appendTo(ttt).size('100%', 'auto').border(0);
            var tete = box().appendTo(fff).size('auto', '100%').text(childSnapshot.val().text, 20).float('left').border(1, 'black', 20).padding('2 5');
            var ghgh = box().appendTo(ttt).size('100%', 'auto').text(childSnapshot.val().time, 15).border(0).align('left');
            dataBox.scrollTop(100000)
            
            if (useridBox3.text() == usus.text()) {
                usus.align('right');
                tete.float('right');
                ghgh.align('right')
            }
            
            dataBox.scrollTop(100000)
        });
        
    });
}












function sideClick () {
    
    if (side == 'out') {
        sideBox.moveRight(200, 700);
        side = 'in';
        mainBox.opacity('50');
        chetBox.opacity('50');
        fBox.opacity('50');
        return;
    }
    
    else if (side == 'in') {
        return;
    }
    
}


function sideOut () {
    if (side == 'in') {
        sideBox.moveLeft(200, 500);
        side = 'out';
        mainBox.opacity('100');
        chetBox.opacity('100');
        fBox.opacity('100');
        return;
    }
    
    else if (side == 'out') {
        return;
    }
}







function clickOut () {
    
    
    mainBox.hide();
    fBox.hide();
    loginBox.show();
    logBox.show();
    logBox2.hide();
    chetBox.hide();
    sideOut();
    return;
    
}




function click1 () {
    mainBox.show();
    loginBox.hide();
    fBox.hide();
    chetBox.hide()
    sideOut();
    
}

function click2 () {
    mainBox.hide();
    fBox.show();
    loginBox.hide();
    chetBox.hide()
    sideOut();
}

function click3 () {
    clickOut();
}

function click4 () {
    mainBox.hide();
    fBox.hide();
    loginBox.hide();
    chetBox.show();
    dataBox.scrollTop(100000)
    sideOut();
}















function fplus () {
    fBox.opacity(20);
    friendplusBox.show();
}

var fff = 0;

function fsearch () {
    if (fid.text() == '' && fnick.text() == '') {
        return;
    }
    
    else if (fid.text() !='' && fnick.text() !='') {
        alert('하나만 고르세요');
        return;
    }
    
    else if (fid.text() != '' && fnick.text() == '') {
        fsearch1(fid.text());
        return;
    }
    
    else if (fid.text() == '' && fnick.text() != '') {
        fsearch2(fnick.text());
        return;
    }
}

var friend = [];
var friend2 = [];
var myF;
var myF2;
var fff2 = 0;

var nowF = [];
var nowF2 = [];

function fsearch1 (x) {
    
    
    if (x == user.id) {
        alert('자기 자신과는 친구를 할 수 없습니다.');
        fid.text('');
        return;
    }
    
    var checkF = 5;
    nowF = [];
    
    database.ref('User/'+user.id+'/'+'friends').once('value').then( function(snapshot) {
        fff2 = snapshot.numChildren();
        
        if (fff2 == 0) {
            fsearcha1(x);
            return;
        }
        
        snapshot.forEach(function(childSnapshot){
            fff2--;
            nowF.push(childSnapshot.val());
            if (fff2 == 0) {
                
                for (var i=0; i<nowF.length; i++) {
                    
                    if (x == nowF[i].id) {
                        alert('이미 친구입니다');
                        fid.text('');
                        checkF = 6;
                        break;
                    }
                    
                }
                
                if (checkF == 6) {
                    return;
                }
                
                if (checkF == 5) {
                    fsearcha1(x);
                }
            }
        });
    });
    
}   
    
    
    

function fsearcha1 (x) {
    
    friend = [];
    
    database.ref('User').once('value').then( function(snapshot){
        fff = snapshot.numChildren();
        snapshot.forEach(function(childSnapshot){
            fff--;
            friend.push(childSnapshot.val());
            
            if (fff ==0) {
                var isUser4 = true;
                myF = {};
                
                for (var i=0; i<friend.length; i++) {
                    
                    // if (x == friend[i].friends.id) {
                    //     alert('aa');
                    //     return;
                    // }
                    
                    if(x == friend[i].id) {
                        isUser4 = false;
                        myF = friend[i];
                        break;
                    }
            
                }
      
                if (isUser4 == true) {
                    alert('그런사람 없어요');
                    fid.text('');
                    return;
                }//if
                
                else if (isUser4 == false) {
                    fsearchA(x, myF);
                    return;
                }
                
            }
        });
    });

}

var fff3 = 0;

function fsearch2 (x) {
    
    if (x == user.nick) {
        alert('자기 자신과는 친구를 할 수 없습니다.');
        fnick.text('');
        return;
    }
    
    var checkF2 = 5;
    nowF2 = [];
    
    database.ref('User/'+user.id+'/'+'friends').once('value').then( function(snapshot) {
        fff3 = snapshot.numChildren();
        if (fff3 == 0) {
            fsearcha2(x);
            return;
        }
        
        snapshot.forEach(function(childSnapshot){
            fff3--;
            nowF2.push(childSnapshot.val());
            if (fff3 == 0) {
                
                for (var i=0; i<nowF2.length; i++) {
                    
                    if (x == nowF2[i].nick) {
                        alert('이미 친구입니다');
                        fnick.text('');
                        checkF2 = 6;
                        break;
                    }
                    
                }
                
                if (checkF2 == 6) {
                    return;
                }
                
                if (checkF2 == 5) {
                    fsearcha2(x);
                }
            }
        });
    });
    
}   


var fff4 = 0;

function fsearcha2 (x) {
    
    friend2 = [];
    
    database.ref('User').once('value').then( function(snapshot){
        fff4 = snapshot.numChildren();
        snapshot.forEach(function(childSnapshot){
            fff4--;
            friend2.push(childSnapshot.val());
            
            if (fff4 ==0) {
                var isUser5 = true;
                myF2 = {};
                
                for (var i=0; i<friend2.length; i++) {
                    
                    // if (x == friend[i].friends.id) {
                    //     alert('aa');
                    //     return;
                    // }
                    
                    if(x == friend2[i].nick) {
                        isUser5 = false;
                        myF2 = friend2[i];
                        break;
                    }
            
                }
      
                if (isUser5 == true) {
                    alert('그런사람 없어요');
                    fnick.text('');
                    return;
                }//if
                
                else if (isUser5 == false) {
                    fsearchA(x, myF2);
                    return;
                }
                
            }
        });
    });
}


function fsearchA (t, f) {
    
    
    var d = new Date();
    var key = d.getFullYear() + (d.getMonth()+1) + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds() + d.getMilliseconds()
    
    
    var data = {};
    data.id = f.id;
    data.nick = f.nick;
    data.pw = f.pw;
    data.key = key;
    
    var data2 = {};
    data2.id = user.id;
    data2.nick = user.nick;
    data2.pw = user.pw;
    data2.key = key;
    
    database.ref('User/'+user.id+'/'+'friends/' + f.id).set(data);
    database.ref('User/'+f.id+'/'+'friends/' + user.id).set(data2);
    
    alert('친구추가 되었습니다!');
    fid.text('');
    fnick.text('');
    loadFriends();
    loadFriends2();
    fOut()
}





function fOut () {
    fid.text('');
    fnick.text('');
    friendplusBox.hide();
    friendminusBox.hide();
    fBox.opacity(100);
    return;
}



function loadFriends () {
    database.ref('User/' + user.id + '/' + 'friends').on('value', function(snapshot){
        var qwe = 0;
        friendsBox.clear();
        snapshot.forEach(function(childSnapshot){
            qwe++;
            var ttt = box().appendTo(friendsBox).size('98%', 'auto').border(1, 'black', 5).marginTop(3);
            var fff = box().appendTo(ttt).size('20%', 'auto').border(0);
            box().appendTo(fff).size('100%', '100%').text(qwe + '.', 20).border(0).marginTop(0).float('left');
            box().appendTo(ttt).size('70%', '100%').text(childSnapshot.val().nick, 20).align('left').float('right').border(0).maxHeight(70).overflow('auto');
        });
    });
}


function loadFriends2 () {
    database.ref('User/' + user.id + '/' + 'friends').on('value', function(snapshot){
        var qwe = 0;
        fminloadBox.clear();
        snapshot.forEach(function(childSnapshot){
            qwe++;
            var ttt = box().appendTo(fminloadBox).size('95%', 'auto').border(1, 'black', 5).marginTop(3);
            var fff = box().appendTo(ttt).size('20%', 'auto').border(0, 'red');
            box().appendTo(fff).size('100%', '100%').text(qwe + '.', 20).border(0, 'green').marginTop(0).float('left');
            var ggg = box().appendTo(ttt).size('70%', '100%').text(childSnapshot.val().nick, 20).border(0).align('left').float('right').maxHeight(70).overflow('auto');
            box().appendTo(ggg).size('10%', '100%').text('X', 15).border(1, 'black').float('right').marginTop(3).moveLeft(10).click(fminus)
        });
    });
}











function fmin () {
    fBox.opacity(20);
    friendminusBox.show();
}







function fminus (bx) {
    var ob = bx.parent().text()
    
    var ddd;
    var friends3 = [];
    
    var ghg;
    database.ref('User/' + user.id + '/' + 'friends').once('value').then( function(snapshot){
        ddd = snapshot.numChildren();
        snapshot.forEach(function(childSnapshot){
            ddd--;
            friends3.push(childSnapshot.val())
            
            
            if (ddd == 0) {
                for (var i=0; i<friends3.length; i++) {
                    if (friends3[i].nick == ob) {
                        ghg = friends3[i].id
                    }
                }
                
                database.ref('User/' + user.id + '/' + 'friends/' + ghg).remove()
                database.ref('User/' + ghg + '/' + 'friends/' + user.id).remove()
            }
            
            
        });
    });
    
    

    
    // for (var z=0; z<friends3.length; z++) {
    //     alert('aaa')
    //     var data = {};
    //     data.id = friends3[z].id;
    //     data.nick = friends3[z].nick;
    //     data.pw = friends3[z].pw
    //     database.ref('User/' + user.id + '/' + 'friends').push().set(data);
    // }
    
}






function writeBack () {
    titleBox.text('');
    conBox.text('');
    writeBox.hide();
    mainBox.show();
}


function loadTitle (x) {
    
    
    var fff;
    var titles = [];
    
    
    database.ref('Datas').once('value').then( function(snapshot) {
        fff = snapshot.numChildren();
        
        if (fff ==0) {
            return;
        }
        
        snapshot.forEach(function(childSnapshot){
            
            fff--;
            titles.push(childSnapshot.val());
            
            if (fff == 0) {
                
                ttt.clear();
                titles.push("''");
                titles.reverse();
                var end2 = x + 10;
                
                if (titles.length-x <= 9) {
                    end2 = titles.length;
                }
                
                for (var i=x; i<end2; i++) {
                    box().appendTo(ttt).size('95%', 35).text(titles[i].title, 20).border(1, 'black', 5).data(titles[i]).marginTop(1).click(loadText);

                }
                
            }
                
        });
    });
}




function clickWrite () {
    writeBox.show();
    mainBox.hide();
}


function WRITE () {
    
    
    
    if (titleBox.text() == '') {
        alert('제목을 입력해주세요');
        return;
    }
    
    if (conBox.text() == '') {
        alert('내용을 입력해주세요');
        return;
    }
    
    var data = {};
    data.title = titleBox.text();
    data.content = conBox.text();
    
    var d = new Date();
    data.time = d.getFullYear() + '.' + (d.getMonth()+1) + '.' + d.getDate() + '.' + d.getHours() + ':' + d.getMinutes();
    data.writer = user.nick
    
    database.ref('Datas/').push().set(data);
    
    titleBox.text('');
    conBox.text('');
    writeBox.hide();
    mainBox.show();
    
    checklast();
}


function loadText (bx) {
    var x = bx.data();
    
    mainBox.hide();
    contentBox.show();
    title.text(x.title);
    writerBox.text(x.writer);
    conconcBox.text(x.content);
    timeBox.text(x.time);
    
}


function clickBack () {
    mainBox.show();
    contentBox.hide();
}

function onClick(bx) {
    
    nowPage = bx.id();
    
    if (nowPage == 1) {
        preBox.hide();
        // numBox.moveRight(20);
    }
    
    if (nowPage == last) {
        nextBox.hide();
    }
    
    if (nowPage != 1) {
        preBox.show();
    }
    
    if (nowPage != last) {
        nextBox.show();
    }
    
    for (var i=1; i<=end; i++) {
        findBox(i).textSize(18);
    }
    
    
    
    
    bx.textSize(23);
    ttt2.text(nowPage);
    loadTitle(nowPage*10-9);
}




function clickPre (bx) {
    
    if (nowPage == 1) {
        preBox.hide();
        // numBox.moveRight(30);
        return;
    }
    
    nowPage--;
    
    if (nowPage == 1) {
        preBox.hide();
    }
    
    if (nowPage != last) {
        nextBox.show();
    }
    
    if ((nowPage+1) % 5 == 1 && nowPage !=1) {
        makeNext(nowPage-4);
    }
    
    
    
    for (var i=start; i<=end; i++) {
        findBox(i).textSize(18);
    }
    
    
    
    findBox(nowPage).textSize(23);
    ttt2.text(nowPage);
    loadTitle(nowPage*10-9);
}


function clickNext (bx) {
    
    if (nowPage == last) {
        nextBox.hide();
        return;
    }
    
    nowPage++;
    
    if (nowPage == last) {
        nextBox.hide();
    }
    
    if (nowPage != 1) {
        preBox.show();
    }
    
    
    if ((nowPage-1) % 5 == 0) {
        makeNext(nowPage);
    }
    
    
    for (var i=start; i<=end; i++) {
        findBox(i).textSize(18);
    }
    
    
    findBox(nowPage).textSize(23);
    ttt2.text(nowPage);
    loadTitle(nowPage*10-9);
}


function makeNext (x) {
    
    for (var i=1; i<=last; i++) {
        findBox(i).hide();
    }
    
    start = x;
    
    if (last-x <=4) {
        end = last;
    }
    
    else {
        end = x+4;
    }
    
    
    for (var i=start; i<=end; i++) {
        findBox(i).show();
    }
    
    
    
    findBox(nowPage).textSize(23);
    ttt2.text(nowPage);
    loadTitle(nowPage*10-9);
}







function checklast () {
    
    database.ref('Datas').once('value').then( function (snapshot) {
        var iii = snapshot.numChildren();
        
        if (iii <= 10) {
            last = 1;
            makeNumber();
            makeNext(1);
            
            return;
        }
        
        last = Math.ceil(iii/10);
        makeNumber();
        makeNext(1);
    });
}

checklast();


function makeNumber () {
    for (var i=1; i<=last; i++) {
            box().appendTo(numBox).size(45, 'auto').text(i, 18).border(0).margin('0 5').marginTop(8).id(i).click(onClick).hide();
        }//번호만들기
}









function onKey3 (bx, e) {
    if (keycode.has(e.keyCode)) {
        var a = false
    }
    
    if (e.keyCode == 13) {
        abcbcbcb.click();
        return false;
    }
    
    if (fid.text().length >= 15 && a != false) {
        return false;
    }

    
    if (e.keyCode == 13) {
        abc.click();
        return false;
    }
}

function onKey4 (bx, e) {
    if (e.keyCode == 13) {
        abcbcbcb.click()
        return false;

    }
    
    if (keycode.has(e.keyCode)) {
        var a = false
    }
    
    if (fnick.text().length >= 7 && a != false) {
        return false;
    }
}




loadTitle(1);



}