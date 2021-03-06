const content = document.querySelectorAll('.content');
const quesSec=document.querySelector('.quesSec');
const next=document.querySelector('.next');
const heading = document.querySelector('.heading');
const displayQues =document.querySelector('.ques');
const close = document.querySelector('.close');
const answerDiv =document.querySelector('.answerDiv p');
const CorrectAns =document.querySelector('.CorrectAns p');
const divider=document.querySelector('.divider span');
const timer = document.querySelector('.timer');





document.addEventListener('DOMContentLoaded',()=>{

    //for Close Button
    close.addEventListener('click',()=>{
        quesSec.classList.toggle('showQuesSec');
        CorrectAns.innerHTML='';
        location='index.html';
    })
    

    //Event On Categories


    for(let i=0;i<content.length;i++){
        // console.log(content[i]);
        content[i].addEventListener('click',()=>{
            window.scrollTo(0, 0);
            quesSec.classList.toggle('showQuesSec');
            var category=content[i].children[1].children[0].innerHTML;
            // console.log(category);
            if(category=='General Knowledge'){
                var x=0;
                var q=fetchUncategorised(x);
                dispalyQuesSection('General Knowledge',q);
                DisabledOptionsForNEwTab()
                checkAnswer(q,x)
            }
            else if(category=='computers'){
                var x=0;
                var q=fetchComputers(x);
                dispalyQuesSection('computers',q);
                DisabledOptionsForNEwTab()
                checkAnswer(q)
            }
            else if(category=='Sports'){
                var x=0;
                var q=fetchSports(x);
                dispalyQuesSection('Sports',q);
                DisabledOptionsForNEwTab()
                checkAnswer(q)
            }
            else if(category=='Mathematics'){
                var x=0;
                var q=fetchMathematics(x);
                dispalyQuesSection('Mathematics',q);
                DisabledOptionsForNEwTab()
                checkAnswer(q)
            }
            else if(category=='Movies'){
                var x=0;
                var q=fetchMovies(x);
                dispalyQuesSection('Movies',q);
                DisabledOptionsForNEwTab()
                checkAnswer(q)
            }
            else if(category=='History'){
                var x=0;
                var q=fetchHistory(x);
                dispalyQuesSection('History',q);
                DisabledOptionsForNEwTab()
                checkAnswer(q)
            }
            else if(category=='Geography'){
                var x=0;
                var q=fetchGeography(x);
                dispalyQuesSection('Geography',q);
                DisabledOptionsForNEwTab()
                checkAnswer(q)
            }
            else if(category=='Animals'){
                var x=0;
                var q=fetchAnimals(x);
                if(x==0){
                    checkAnswer(q);
                }
                
                dispalyQuesSection('Animals',q);
                DisabledOptionsForNEwTab()
            }
            else if(category=='computers'){
                var x=0;
                var q=fetchComputers(x);
                dispalyQuesSection('computers',q);
                DisabledOptionsForNEwTab()
                checkAnswer(q)
            }
            else if(category=='Cricket'){
                var x=0;
                var q=fetchCricket(x);
                dispalyQuesSection('Cricket',q);
                DisabledOptionsForNEwTab()
                checkAnswer(q)
            }
    
            var countDownDate = new Date().getTime() + 30 * 60 * 1000;
            var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.querySelector('.timer').innerHTML =  hours + ":"
            + minutes + ":" + seconds;
            if (distance < 0) {
                clearInterval(x);
                document.querySelector('.timer').innerHTML = "EXPIRED";
            }
            }, 1000);
            
    
    
    
            
            
    
    
    //for Next Question...............................................................
    
    
            var c=0;
            next.onclick = function(){
                event.preventDefault()
                c++;
                count=Math.floor((Math.random() * 49) + 1);
                console.log(count)
                if(c<50 && category=='General Knowledge'){
                        var q=fetchUncategorised(count);
                        dispalyQuesSection("General Knowlwdge",q,count,c);
                        checkAnswer(q)
                        DisabledOptions();
                }
                else if(c<50 && category=='computers'){
                        var q=fetchComputers(count);
                        dispalyQuesSection("Computers",q,count,c);
                        // console.log(category)
                        checkAnswer(q)
                        DisabledOptions();
                }
                else if(c<50 && category=='Mathematics'){
                        var q=fetchMathematics(count);
                        dispalyQuesSection("Mathematics",q,count,c);
                        checkAnswer(q)
                        DisabledOptions();
                        console.log(category)
                }
                else if(c<50 && category=='Sports'){
                        var q=fetchSports(count+1);
                        dispalyQuesSection("Sports",q,count,c);
                        checkAnswer(q)
                        DisabledOptions();
                        console.log(category)
                }
                else if(c<50 && category=='Movies'){
                        var q=fetchMovies(count);
                        dispalyQuesSection("Movies",q,count,c);
                        checkAnswer(q)
                        DisabledOptions();
                        console.log(category)
                }
                else if(c<50 && category=='History'){
                        var q=fetchHistory(count);
                        dispalyQuesSection("History",q,count,c);
                        checkAnswer(q)
                        DisabledOptions();
                        console.log(category)
                }
                else if(c<50 && category=='Geography'){
                        var q=fetchGeography(count);
                        dispalyQuesSection("Geography",q,count,c);
                        checkAnswer(q)
                        DisabledOptions();
                        console.log(category)
                }
                else if(c<50 && category=='Animals'){
                        var q=fetchAnimals(count);
                        dispalyQuesSection("Animals",q,count,c);
                        checkAnswer(q)
                        DisabledOptions();
                        console.log(category)
                }
                else if(c<50 && category=='Cricket'){
                        var q=fetchCricket(count);
                        dispalyQuesSection("Cricket",q,count,c);
                        checkAnswer(q)
                        DisabledOptions();
                        console.log(category)
                }
                
                   
                
                
            }



        var cn=0;
        function checkAnswer(q){
        q.then((p)=>{
            var ans = p.ans;
            const opt =document.querySelectorAll('.opt');
            for(let i=0;i<opt.length;i++){
                opt[i].addEventListener('click',()=>{
                    if(event.target.innerHTML===ans){
                        cn+=1;
                        console.log("Correct Ans");
                        event.target.style.background="rgb(5, 236, 63)";
                        for(let j=0;j<4;j++){
                            opt[j].style.pointerEvents = 'none';
                            if(j!=i){
                                opt[j].style.background="rgb(240, 84, 84)";
                            }
                        }
                        
                        answerDiv.innerHTML="Answer Is :- "+ ans;
                        CorrectAns.innerHTML='Correct Answers : '+cn+'/50';
                    }
                    else{
                        event.target.style.background="rgb(240, 84, 84)";
                        for(let j=0;j<4;j++){
                            opt[j].style.pointerEvents = 'none';
                        }
                        answerDiv.innerHTML="Answer Is :- "+ ans;
                    }
                },{once : true})
                
                // opt[i].removeEventListener('click'); 
            }
    
        })

    }
    
    function DisabledOptions(){
        const opt = document.querySelectorAll('.opt');
        for(let i=0;i<opt.length;i++){
            opt[i].style.background='rgba(126, 171, 179, 0.15)';
            opt[i].style.pointerEvents = 'auto';
            answerDiv.innerHTML="";
            }
    
        }
    function DisabledOptionsForNEwTab(){
        const opt = document.querySelectorAll('.opt');
        for(let i=0;i<opt.length;i++){
            opt[i].style.background='rgba(126, 171, 179, 0.15)';
            opt[i].style.pointerEvents = 'auto';
            answerDiv.innerHTML="";
            CorrectAns.innerHTML='';
            }
    
        }  
    })    
}

    
    
    
    
    
    
    
    
    
    
    async function fetchUncategorised(x){
        try{
            var genralData=await fetch('pakages/generalKnowledge.json');
            let data=await genralData.json();
            let ques=data.results;
            let question =data.results[x].question;
            let answer =data.results[x]
            const ans =data.results[x].correct_answer;
            const [opt1,opt2,opt3,opt4]=data.results[x].incorrect_answers;
            // console.log({question,ans,opt1,opt2,opt3})
            return {question,ans,opt1,opt2,opt3,opt4}
        }
        catch(error){
            console.log(error)
        }
       
    
        
    }
    
    
    
    
    
    async function fetchSports(x){
        try{
            var genralData=await fetch('pakages/sports.json');
            let data=await genralData.json();
            let ques=data.results;
            let question =data.results[x].question;
            let answer =data.results[x]
            const ans =data.results[x].correct_answer;
            const [opt1,opt2,opt3,opt4]=data.results[x].incorrect_answers;
            console.log({question,ans,opt1,opt2,opt3})
            return {question,ans,opt1,opt2,opt3,opt4}
        }
        catch(error){
            console.log(error)
        }
    
    }
    
    
    
    
    
    async function fetchGeography(x){
        try{
            var genralData=await fetch('pakages/Geography.json');
            let data=await genralData.json();
            let ques=data.results;
            let question =data.results[x].question;
            let answer =data.results[x]
            const ans =data.results[x].correct_answer;
            const [opt1,opt2,opt3,opt4]=data.results[x].incorrect_answers;
            console.log({question,ans,opt1,opt2,opt3,opt4})
            return {question,ans,opt1,opt2,opt3,opt4}
        }
        catch(error){
            console.log(error)
        }
    
    }
    
    
    
    
    
    
    
    async function fetchMovies(x){
        try{
            var genralData=await fetch('pakages/film.json');
            let data=await genralData.json();
            let ques=data.results;
            let question =data.results[x].question;
            let answer =data.results[x]
            const ans =data.results[x].correct_answer;
            const [opt1,opt2,opt3,opt4]=data.results[x].incorrect_answers;
            console.log({question,ans,opt1,opt2,opt3})
            return {question,ans,opt1,opt2,opt3,opt4}
        }
        catch(error){
            console.log(error)
        }
    
    }
    async function fetchAnimals(x){
        try{
            var genralData=await fetch('pakages/Animals.json');
            let data=await genralData.json();
            let ques=data.results;
            console.log(ques)
            let question =data.results[x].question;
            let answer =data.results[x]
            const ans =data.results[x].correct_answer;
            const [opt1,opt2,opt3,opt4]=data.results[x].incorrect_answers;
            console.log({question,ans,opt1,opt2,opt3})
            return {question,ans,opt1,opt2,opt3,opt4}
        }
        catch(error){
            console.log(error)
        }
    
    }
    
    
    
    async function fetchComputers(x){
        try{
            var genralData=await fetch('pakages/computers.json');
            let data=await genralData.json();
            let ques=data.results;
            let question =data.results[x].question;
            let answer =data.results[x]
            const ans =data.results[x].correct_answer;
            const [opt1,opt2,opt3,opt4]=data.results[x].incorrect_answers;
            console.log({question,ans,opt1,opt2,opt3})
            return {question,ans,opt1,opt2,opt3,opt4}
        }
        catch(error){
            console.log(error)
        }
    
    }
    
    
    
    
    
    async function fetchHistory(x){
        try{
            var genralData=await fetch('pakages/history.json');
            let data=await genralData.json();
            let ques=data.results;
            let question =data.results[x].question;
            let answer =data.results[x]
            const ans =data.results[x].correct_answer;
            const [opt1,opt2,opt3,opt4]=data.results[x].incorrect_answers;
            console.log({question,ans,opt1,opt2,opt3})
            return {question,ans,opt1,opt2,opt3,opt4}
        }
        catch(error){
            console.log(error)
        }
       
    
        
    }
    
    
    
    
    
    
    
    
    async function fetchMathematics(x){
        try{
            var genralData=await fetch('pakages/mathematics.json');
            let data=await genralData.json();
            let ques=data.results;
            let question =data.results[x].question;
            let answer =data.results[x]
            const ans =data.results[x].correct_answer;
            const [opt1,opt2,opt3,opt4]=data.results[x].incorrect_answers;
            console.log({question,ans,opt1,opt2,opt3})
            return {question,ans,opt1,opt2,opt3,opt4}
        }
        catch(error){
            console.log(error)
        }
    
    }
    async function fetchCricket(x){
        try{
            var genralData=await fetch('pakages/cricket.json');
            let data=await genralData.json();
            let ques=data.results;
            let question =data.results[x].question;
            let answer =data.results[x]
            const ans =data.results[x].correct_answer;
            const [opt1,opt2,opt3,opt4]=data.results[x].incorrect_answers;
            console.log({question,ans,opt1,opt2,opt3,opt4})
            return {question,ans,opt1,opt2,opt3,opt4}
        }
        catch(error){
            console.log(error)
        }
    
    }
    
    
    
    
    
    
    
    const lead=document.querySelector('.lead p');
    const option1 =document.querySelector('.option1');
    const option2 =document.querySelector('.option2');
    const option3 =document.querySelector('.option3');
    const option4 =document.querySelector('.option4');
    const Ropt1 =document.querySelector('#opt1');
    const Ropt2 =document.querySelector('#opt2');
    const Ropt3 =document.querySelector('#opt3');
    const Ropt4 =document.querySelector('#opt4');
    
    function dispalyQuesSection(x,q,i=0,c=0){
        heading.innerHTML=x;
        q.then((p)=>{
            
            var ques=p.question;
            var opt1=p.opt1;
            var opt2=p.opt2;
            var opt3=p.opt3;
            var opt4=p.opt4;
            var qno=c+1;
            divider.innerHTML=qno;
            lead.innerHTML=ques;
            option1.innerHTML=opt1;
            Ropt1.value=opt1;
            Ropt2.value=opt2;
            Ropt3.value=opt3;
            Ropt4.value=opt4;
            option2.innerHTML=opt2;
            option3.innerHTML=opt3;
            option4.innerHTML=opt4;
            // console.log(Ropt1,Ropt2,Ropt3,Ropt4)
    
    
            }
    
            
        )
    }
    



})





