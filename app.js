
import myJson from './MOCK_DATA.json' assert {type: 'json'};


let sorta2z=document.getElementById("sorta2z");
let sortz2a=document.getElementById("sortz2a");
let sortmarks=document.getElementById("sortmarks");
let sortpass=document.getElementById("sortpass");
let sortclass=document.getElementById("sortclass");
let sortgender=document.getElementById("sortgender");
let searchbtn=document.getElementById("searchbtn");
let sbn=document.getElementById("sbn");
let sdata=document.getElementById("sdata");


//=====to insert rows according to json data====//
const data=((el)=>{
  let tr=document.createElement("tr");
  let id=document.createElement("td");
  let sname=document.createElement("td");
  let marks=document.createElement("td");
  let pass=document.createElement("td");
  let gender=document.createElement("td");
  let email=document.createElement("td");
  let sclass=document.createElement("td");

  id.innerText=el.id;
  sname.innerHTML=`<p><img src=${el.img_src} class="userimg" />${el.first_name} ${el.last_name}</p>`;
  marks.innerText=el.marks;
  pass.innerText=`${el.passing?"Passing":"Failed"}`
  gender.innerText=el.gender;
  email.innerText=el.email;
  sclass.innerText=el.class;

  tr.appendChild(id);
  tr.appendChild(sname);
  tr.appendChild(gender);
  tr.appendChild(sclass);
  tr.appendChild(marks);
  tr.appendChild(pass);
  tr.appendChild(email);

  sdata.appendChild(tr);
});

// =======default table========// 
myJson.map(el=>data(el));


//========for searching in search bar==========//
searchbtn.addEventListener('click',(e)=>{
  e.preventDefault();
  let searchvalue=sbn.value.toLowerCase();
  //=====if the value of input is email=====//
  if(searchvalue.includes("@") && searchvalue.includes(".")){
    sdata.innerHTML="";
    myJson.filter(el=>{
      if(el.email.toLowerCase()===searchvalue){
        return data(el);
      }
    });
  }

  //=====if the value of input is name=====//
  else{
    sdata.innerHTML="";
    myJson.filter(el=>{
      if(el.first_name.toLowerCase()===searchvalue || el.last_name.toLowerCase()===searchvalue){
        return data(el);
      }
      else if(el.first_name.toLowerCase()+" "+el.last_name.toLowerCase()===searchvalue){
        return data(el);
      }
    });
  }
});


//=========to sort in Alphabetically========//
sorta2z.addEventListener('click',(el)=>{
  el.preventDefault();
  let newarr=[...myJson];
  newarr.sort((x,y)=>{
    let fname=`${x.first_name} ${x.last_name}`;
    let fname2=`${y.first_name} ${y.last_name}`;
    if(fname>fname2){
      return 1;
    }
    if(fname<fname2){
      return -1;
    } 
    return 0;
    
  });
  sdata.innerHTML="";
  newarr.map((el)=>data(el));
});

//=========to sort in Alphabetically (Z->A)========//
sortz2a.addEventListener('click',(el)=>{
  el.preventDefault();
  let newarr=[...myJson];
  newarr.sort((x,y)=>{
    let fname=`${x.first_name} ${x.last_name}`;
    let fname2=`${y.first_name} ${y.last_name}`;
    if(fname>fname2){
      return -1;
    }
    if(fname<fname2){
      return 1;
    } 
    return 0;
    
  });
  sdata.innerHTML="";
  newarr.map((el)=>data(el));
});

//========to sort by marks========//
sortmarks.addEventListener('click',(el)=>{
  el.preventDefault();
  let newarr=[...myJson];
  newarr.sort((x,y)=>{
    let xm=x.marks;
    let ym=y.marks;
    if(xm>ym){
      return 1;
    }
    if(xm<ym){
      return -1;
    } 
    return 0;
    
  });
  sdata.innerHTML="";
  newarr.map((el)=>data(el));
});

//========to filter only students who are passed========//
sortpass.addEventListener('click',(el)=>{
  el.preventDefault();
  sdata.innerHTML="";
  let newarr=[...myJson];
  newarr.filter(e=>{
    if(e.passing)
    return data(e);
  });
});

//========to sort by class========//
sortclass.addEventListener('click',(el)=>{
  el.preventDefault();
  let newarr=[...myJson];
  newarr.sort((x,y)=>{
    let xm=x.class;
    let ym=y.class;
    if(xm>ym){
      return 1;
    }
    if(xm<ym){
      return -1;
    } 
    return 0;
    
  });
  sdata.innerHTML="";
  newarr.map((el)=>data(el));
});

//========sort according to gender=========//
sortgender.addEventListener('click',(e)=>{
  e.preventDefault();
  let female=document.getElementById("main");
  
  sdata.innerHTML="";
  myJson.filter(el=>{
    if(el.gender.toLowerCase()==="female"){
      return data(el);
    }
  });
  let male=document.createElement("table");
  male.innerHTML=female.innerHTML;
  let br=document.createElement("br");
  female.insertAdjacentElement("beforeend", br);
  myJson.filter(el=>{
    if(el.gender.toLowerCase()==="male"){
      return data(el);
    }
  });
});