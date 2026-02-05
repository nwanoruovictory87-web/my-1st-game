
const text=['Welcome', ' My little dream world is a test game with easy rules to follow you would be given 2 options and a 3rd option if you want fath to decide your destiny !!', 'December 1785 you took your first breath into this world your father took you from your mothers arm and said you shall be called ! ','10 years letter little ', ' is all grown up and ready for school ', '1st simester at school was rough but luckly you made new friends', 'A due term school assingment is coming up and you have to  select a partner !', 'A  David a kid same age as you who loves football and his friends ', 'B Emily a kid your same age as you a little shi who enjoys readying and playing with her friends ', 'David didnt show up as he got a football macth and you both got an f on the test ',
    'Turns out emily is very inteligent and you both did great on your test', 'You are falling back on your test david suggest A you cheat  B you study together', 'You both cheated and got coaght now you got detention for a week ', ' you both studed and surprisly did well in your test', 'you got a test coming up this week and aslo a party A attened the party have some fun and let emily cover the test for you B read for your test','Emily was also invited to the party know of you read for the test do you both failed ', 'Emily was also invited to the party know luckly you stayed and took and read for the test you pass'
    ];
    let chapter1=true;
    let chapter2=true;
    let chapter3=true;
    let chapter4=true;
    let chapter5=true;
    let chapter6=true;
    let chapter7=true;
    let chapter8=true;
    let chapter9=true;
    let chapter10=true;
    let a=true;
    let b=true;
    let select=null;
    let playerLogin=true;
    let name1=null;
    let gender=null;
    let playerInfor={
     name : null,
     gender : null
    }
    let life={
        school:{
            class:null,
            friends:null,
            enimys:null
        },
        family:{
            father:'christain',
            mother:'isablla',
            brothe:'Andrew',
            Sister: 'sophia'
        },
        friends:{
            boy:null,
            girl:null,
        },
        enimys:{
            haters:null
        },
        about:{
            likes:null,
            hates:null,
            dreams:null
        },
        loveLife:{
            single:null,
            married:null
        },
        finacalStatues:{
            rich:null,
            poor:null,
        }
    }
    function start(){
        (playerLogin===true) ? play() : alert('you cant hide from this !!!')
    }
    function play(){
          name1=prompt('whats your name')
          playerInfor.name=name1.toLocaleLowerCase()
          gender=prompt('Hello ' + playerInfor.name +' '+'what do you indentify as ? / you can only be male or female')
          playerInfor.gender=gender.toLocaleLowerCase()
        check()   
    }
    function callBack(){ //calls back a function manule loop
        check()
    }
    function callBack1() {
         chapter4=true
         next()
    }
    function check(){
         if (name1===''){
            name1=prompt('name cant be empty! / whats your name')
            playerInfor.name=name1.toLocaleLowerCase()
            callBack()// calls a loop funtion
         } else if (gender===''){
            gender=prompt('gender cant be empty! / what are you !')
            playerInfor.gender=gender.toLocaleLowerCase()
            callBack()// calls a loop funtion
         } else { checkAgain() }
    }
    function checkAgain(){// playerinfor details getter
        if (playerInfor.gender==='male'){
           Player()
        } else if (playerInfor.gender=='female'){
            Player()
        } else alert('what are you gay ?/ if you wish to continue you most be Male or Female !!')
    }
     function Player(){
        document.querySelector("#instructions").innerHTML=(text[0] +' ' + playerInfor.name + ' '+ text[1] + '!')  
        document.querySelector("#next").innerHTML=('next')
        document.querySelector("#begin").innerHTML=('')
     }
        function next(){ // using if else statment to detamine function type
            a=true
            b=true
            if (chapter1===true){
                document.querySelector("#instructions").innerHTML=('')
            document.querySelector("#test").innerHTML=(text[2]+' '+playerInfor.name  )
            chapter1=false
            }else if (chapter2===true){
                document.querySelector("#test").innerHTML=(text[3]+' '+playerInfor.name + ' ' + text[4]  )
                chapter2=false
            }else { nextChepter()}
         }
    function nextChepter(){
        if (chapter3===true){
            document.querySelector("#test").innerHTML=(text[6] + ' ' + text[7] +' || '+ text[8])// A and b Selection 
            document.querySelector("#a").innerHTML=('A')
            document.querySelector("#b").innerHTML=('B')
            chapter3=false
        }else if (chapter4===true){
            chapterFour()
             chapter4=false
        }else {
            nextChepter1()
        }
    }
    function nextChepter1(){
        if (chapter5===true){
            document.querySelector("#test").innerHTML=(text[5])
            chapter5=false
        }else if (chapter6===true){
             chapterSix()
            chapter6=false
        }else {
            nextChepter2()
        }
    
    }
    function nextChepter2(){
        if (chapter7===true){
             chapterSeven()
            chapter7=false
        }else if (chapter8===true){
            chapter8=false
        }else {
            nextChepter3()
        }
    
    }
    function nextChepter3(){
        if (chapter9===true){
            console.log('under work')
            chapter9=false
        }else if (chapter10===true){
            console.log('underwork')
            chapter10=false
        }else {
            chapter1=true
            chapter2=true
            chapter3=true
            chapter4=true
            chapter5=true
            chapter6=true
            chapter7=true
            chapter8=true
            chapter9=true
            chapter10=true
        }
    
    }function a1(){
        if ( b===true){
            select='a'
            a=false
        }else {alert('you have alredy picked option B')}
    }
    function b1(){
        if ( a===true){
            select='b'
            b=false
        } else {alert('you have alredy picked option A')}
    }
    function chapterFour(){
        if (select==='a'){
            life.school.friends='david'
            document.querySelector("#test").innerHTML=(text[9])// A and b Selection 
        }else if (select==='b'){
            life.school.friends='emily'
            document.querySelector("#test").innerHTML=(text[10])// A and b Selection 
        }else { alert("you have to pick a friend")
            
        }
    }
    function chapterSix(){
        if(life.school.friends==='david'){
            document.querySelector("#test").innerHTML=(text[11])
         a=true
         b=true
        }else if(life.school.friends==='emily'){
            document.querySelector("#test").innerHTML=(text[14])
            a=true
            b=true
        }
    }
    function chapterSeven(){
        if(life.school.friends==='david'){
            chapterSevenDavid()
        }else if(life.school.friends==='emily'){
            chapterSevenEmily()
        }
    }
    function chapterSevenDavid(){
     if (select==='a'){
        document.querySelector("#test").innerHTML=(text[12])
     }else if (select==='b'){
        document.querySelector("#test").innerHTML=(text[13])
     }else { alert("you have to selsct an obtion")}
    }
    function chapterSevenEmily(){
        if (select==='a'){
           document.querySelector("#test").innerHTML=(text[14])
        }else if (select==='b'){
           document.querySelector("#test").innerHTML=(text[15])
        }else { alert("you have to selsct an obtion")}
       }