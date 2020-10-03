// const content=document.querySelectorAll('.content');
// const dev=document.querySelector('.dev');
// const laravel=document.querySelector('.laravel');
// const sql=document.querySelector('.sql');
// const php=document.querySelector('.php');
// const html=document.querySelector('.html');
// const js=document.querySelector('.js');
// const wordpress=document.querySelector('.wordpress');
// const bash=document.querySelector('.bash');
// const linux=document.querySelector('.linux');
// const close=document.querySelector('.close');
// const quesSec=document.querySelector('.quesSec');
// var Ques=document.querySelectorAll('.Ques');
// const next=document.querySelectorAll('.next');
// questions=document.querySelectorAll('.questions span')
// console.log(Ques.length)


// // document.addEventListener('DOMContentLoaded',()=>{
    

// //     close.addEventListener('click',()=>{
// //         quesSec.classList.toggle('showQuesSec');
// //         for(let i=0;i<Ques.length;i++){
// //             questions[i+1].classList.remove('active');
// //             Ques[1].style.display="block"
// //             Ques[i+1].style.display="none";
            
            
// //         }
// //         window.location.reload()
// //     })
// //     for(let i=0;i<content.length;i++){
// //         content[i].addEventListener('click',()=>{
// //             quesSec.classList.toggle('showQuesSec');
// //             var head=content[i].children[1].children[0].innerHTML.toLowerCase();
// //             console.log(head)
// //             document.getElementsByClassName('title')[0].innerHTML=head.toUpperCase();

// //             var a=fetch(`https://quizapi.io/api/v1/questions?apiKey=5hlUBdJGuueP1patNCDTIHytyLkvesfVoIzuBVDw&category=${head}&difficulty=Easy&limit=20`).then((res)=>{
// //                 return res.json()
// //                     }).then((data)=>{
// //                         let questions=data;
// //                         console.log(questions[0])
// //                         for(let i=0;i<Ques.length;i++){
// //                             Ques[i].children[1].children[0].innerHTML=questions[i].question;
// //                             Ques[i].children[2].children[1].value=questions[i].answers.answer_a;
// //                             Ques[i].children[2].children[1].innerHTML=questions[i].answers.answer_a;
// //                             Ques[i].children[2].children[4].value=questions[i].answers.answer_b;
// //                             Ques[i].children[2].children[4].innerHTML=questions[i].answers.answer_b;
// //                             Ques[i].children[2].children[7].value=questions[i].answers.answer_c;
// //                             Ques[i].children[2].children[7].innerHTML=questions[i].answers.answer_c;
// //                             Ques[i].children[2].children[10].value=questions[i].answers.answer_d;
// //                             Ques[i].children[2].children[10].innerHTML=questions[i].answers.answer_d;
// //                             //console.log(Ques[i].children[4].children[1])
// //                         }
            
// //             })
// //         })
// //     }

// //     Ques=[...Ques]
// //     for(let i=0;i<Ques.length;i++){
// //         next[i].addEventListener('click',()=>{
// //             if(i<20){
// //                 questions[i+1].classList.add('active');
// //                 Ques[i].style.display="none"
// //                 i=(i+1)%Ques.length;
// //                 Ques[i].style.display="block";
               
                
// //             }
           
// //         })
// //     }

        

// // });


// var y;
// var p={

// };
// function getAllUnCategorisedQues(){
//     fetch('https://opentdb.com/api.php?amount=10&token=8f229407bcd2868b38539c90767e5938f0c115fedc22e4fa08fdfc59a4229a5c')
	
//         .then(response => {
//             return response.json()
//         }).then((data)=>{
//             console.log(data.results)
//             var x=data.results;
//             x=x.map(element => {
//                 const ques=element.question;
//                 const difficulty=element.difficulty;
//                y={ques,difficulty}
//                p.q1=y;
//             });
//             console.log(x)
//             return x
//         })
//         .catch(err => {
//             console.log(err);
//         });
// } console.log(p)

// getAllUnCategorisedQues()

// // async function getAllUnCategorisedQues(){
// //     try{
// //         let result=await fetch('https://opentdb.com/api.php?amount=10&token=8f229407bcd2868b38539c90767e5938f0c115fedc22e4fa08fdfc59a4229a5c');
// //         let data=await result.json();
// //         let products=data.items;
// //         //let x=products[0].fields.title;
// //         products=products.map(item =>{
// //             const {title}=question;
// //             const {id} =item.sys
// //             const image=item.fields.image.fields.file.url;
// //             return {title,price,id,image}
// //         })

// //         return products
// //     }
// //     catch(error){
// //         console.log(error)
// //     }
    
// // };

// // class getQuestions{
// //         //for Uncategorised
// //         async Uncategorised(){
// //             let UncategorisedCart=[];
            
// //             var UnCategiorised=await fetch('https://opentdb.com/api.php?amount=10&token=8f229407bcd2868b38539c90767e5938f0c115fedc22e4fa08fdfc59a4229a5c')
// //                     .then(response => {
// //                         return response.json()
// //                     }).then((data)=>{
// //                         console.log(data)
// //                         data=data.map(ques=>{
// //                             const {questions}=data[0]
// //                         })
// //                     })
// //                     .catch(err => {
// //                         console.log(err);
// //                     });
// //                             }
// // }

// // document.addEventListener('DOMContentLoaded',()=>{
    
// // })





















