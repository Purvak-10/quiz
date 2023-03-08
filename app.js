const questions=[{
    'que': 'Markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'java',
    'd': 'javascript',
    'correct': 'a'
},
{
    'que': 'javascript language used for?',
    'a': 'structure',
    'b': 'style',
    'c': 'java',
    'd': 'function',
    'correct': 'd'
},{
    'que': 'CSS stands for?',
    'a': 'HTML',
    'b': 'Cascading',
    'c': 'java',
    'd': 'javascript',
    'correct': 'b'
}
]

let index=0;
let total =questions.length;
let right=0,
wrong=0;
const quebox= document.getElementById("quebox");
const oinput=document.querySelectorAll('.options');
const loadquestion = () => {
    if(index===total){
        return end()
    }
    reset();
    const data=questions[index]
    quebox.innerText=`${index+1}) ${data.que}`;
    console.log(data)
    oinput[0].nextElementSibling.innerText= data.a;
    oinput[1].nextElementSibling.innerText= data.b;
    oinput[2].nextElementSibling.innerText= data.c;
    oinput[3].nextElementSibling.innerText= data.d;
}

const submit=()=>{
    const data = questions[index]
    const ans=getanswer()
    if(ans===data.correct){
        right++
    }
    else{
        wrong++;
    }
    index++;
    loadquestion();
    return ;
}

const getanswer =()=>{
    let answer;
    oinput.forEach(
        (input)=>{
            if(input.checked){
               answer= input.value;
            }
            
        }
    )
    return answer;
}

const reset=()=>{
    oinput.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}


const end =()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <h3>Thank you for playing </h3>
    <h2> ${right}/${total} are correct</h2>
    </div>`
}
//initial call
loadquestion();