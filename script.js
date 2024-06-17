let tab = document.querySelectorAll("table");

let text1=document.querySelector("#text1");
let clk=0;

let n = localStorage.getItem('n');

let a=document.querySelector("#one");
let b=document.querySelector("#two");
let c=document.querySelector("#three");
let d=document.querySelector("#four");
let e=document.querySelector("#five");
let f=document.querySelector("#six");
let g=document.querySelector("#seven");

let final=document.querySelector("#final");
let count=0;
// A EVENT HANDLLER
a.addEventListener("click",()=>{
  tab[0].style.backgroundColor = " rgb(161, 235, 222)";
  clk++;
  if(clk==n){
    window.location.href = "forth.html";
  }
  if(clk+1<=n)
  text1.innerHTML=`NOW PLEASE SELECT THE COLUMN IN WHICH THE NUMBER ${clk+1} LETTER OF THE WORD YOU THOUGHT OF IS PRESENT`;
  
  if(count==0){

    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");
    let div4=document.createElement("div");

    div1.classList.add('col');
    div1.id="d1";
    div2.classList.add('col');
    div2.id="d2";
    div3.classList.add('col');
    div3.id="d3";
    div4.classList.add('col');
    div4.id="d4";

    let tbl1=document.createElement("table");
    let tbl2=document.createElement("table");
    let tbl3=document.createElement("table");
    let tbl4=document.createElement("table");

    let row11=document.createElement("tr");
    let row21=document.createElement("tr");
    let row31=document.createElement("tr");
    let row41=document.createElement("tr");

    let head1=document.createElement("th");
    let head2=document.createElement("th");
    let head3=document.createElement("th");
    let head4=document.createElement("th");

    head1.textContent="column 1";
    head2.textContent="column 2";
    head3.textContent="column 3";
    head4.textContent="column 4";

    row11.append(head1);
    row21.append(head2);
    row31.append(head3);
    row41.append(head4);

    tbl1.append(row11);
    tbl2.append(row21);
    tbl3.append(row31);
    tbl4.append(row41);

    div1.append(tbl1);
    div2.append(tbl2);
    div3.append(tbl3);
    div4.append(tbl4);

    localStorage.setItem('tablesHTML', div1.outerHTML + div2.outerHTML + div3.outerHTML + div4.outerHTML);
    localStorage.setItem('tablesGenerated', 'true');
    count++;
  }
   let row12=document.createElement("tr");
   let row22=document.createElement("tr");
   let row32=document.createElement("tr");
   let row42=document.createElement("tr");

   let data1=document.createElement("td");
   let data2=document.createElement("td");
   let data3=document.createElement("td");
   let data4=document.createElement("td");

   data1.textContent="A";
   data2.textContent="H";
   data3.textContent="O";
   data4.textContent="V";

   row12.append(data1);
   row22.append(data2);
   row32.append(data3);
   row42.append(data4);

   let tablesHTML = localStorage.getItem('tablesHTML');
            let parser = new DOMParser();
            let doc = parser.parseFromString(tablesHTML, 'text/html');

            doc.querySelector('table').append(row12);
            doc.querySelectorAll('table')[1].append(row22);
            doc.querySelectorAll('table')[2].append(row32);
            doc.querySelectorAll('table')[3].append(row42);

            localStorage.setItem('tablesHTML', doc.body.innerHTML);
   
});

// B EVENT HANDLLER

b.addEventListener("click",()=>{
  tab[1].style.backgroundColor = " rgb(161, 235, 222)";
  clk++;
  if(clk==n){
    window.location.href = "forth.html";
  }
  if(clk+1<=n)
  text1.innerHTML=`NOW PLEASE SELECT THE COLUMN IN WHICH THE NUMBER ${clk+1} LETTER OF THE WORD YOU THOUGHT OF IS PRESENT`;
  
  if(count==0){

    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");
    let div4=document.createElement("div");

    div1.classList.add('col');
    div1.id="d1";
    div2.classList.add('col');
    div2.id="d2";
    div3.classList.add('col');
    div3.id="d3";
    div4.classList.add('col');
    div4.id="d4";

    let tbl1=document.createElement("table");
    let tbl2=document.createElement("table");
    let tbl3=document.createElement("table");
    let tbl4=document.createElement("table");

    let row11=document.createElement("tr");
    let row21=document.createElement("tr");
    let row31=document.createElement("tr");
    let row41=document.createElement("tr");

    let head1=document.createElement("th");
    let head2=document.createElement("th");
    let head3=document.createElement("th");
    let head4=document.createElement("th");

    head1.textContent="column 1";
    head2.textContent="column 2";
    head3.textContent="column 3";
    head4.textContent="column 4";

    row11.append(head1);
    row21.append(head2);
    row31.append(head3);
    row41.append(head4);

    tbl1.append(row11);
    tbl2.append(row21);
    tbl3.append(row31);
    tbl4.append(row41);

    div1.append(tbl1);
    div2.append(tbl2);
    div3.append(tbl3);
    div4.append(tbl4);

    localStorage.setItem('tablesHTML', div1.outerHTML + div2.outerHTML + div3.outerHTML + div4.outerHTML);
    localStorage.setItem('tablesGenerated', 'true');
    count++;
  }
   let row12=document.createElement("tr");
   let row22=document.createElement("tr");
   let row32=document.createElement("tr");
   let row42=document.createElement("tr");

   let data1=document.createElement("td");
   let data2=document.createElement("td");
   let data3=document.createElement("td");
   let data4=document.createElement("td");

   data1.textContent="B";
   data2.textContent="I";
   data3.textContent="P";
   data4.textContent="W";

   row12.append(data1);
   row22.append(data2);
   row32.append(data3);
   row42.append(data4);

   let tablesHTML = localStorage.getItem('tablesHTML');
            let parser = new DOMParser();
            let doc = parser.parseFromString(tablesHTML, 'text/html');

            doc.querySelector('table').append(row12);
            doc.querySelectorAll('table')[1].append(row22);
            doc.querySelectorAll('table')[2].append(row32);
            doc.querySelectorAll('table')[3].append(row42);
            
            localStorage.setItem('tablesHTML', doc.body.innerHTML);
   
});
 // C EVENT HANDLER
c.addEventListener("click",()=>{
  tab[2].style.backgroundColor = " rgb(161, 235, 222)";
  clk++;
  if(clk==n){
    window.location.href = "forth.html";
  }
  if(clk+1<=n)
  text1.innerHTML=`NOW PLEASE SELECT THE COLUMN IN WHICH THE NUMBER ${clk+1} LETTER OF THE WORD YOU THOUGHT OF IS PRESENT`;
  
  if(count==0){

    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");
    let div4=document.createElement("div");

    div1.classList.add('col');
    div1.id="d1";
    div2.classList.add('col');
    div2.id="d2";
    div3.classList.add('col');
    div3.id="d3";
    div4.classList.add('col');
    div4.id="d4";

    let tbl1=document.createElement("table");
    let tbl2=document.createElement("table");
    let tbl3=document.createElement("table");
    let tbl4=document.createElement("table");

    let row11=document.createElement("tr");
    let row21=document.createElement("tr");
    let row31=document.createElement("tr");
    let row41=document.createElement("tr");

    let head1=document.createElement("th");
    let head2=document.createElement("th");
    let head3=document.createElement("th");
    let head4=document.createElement("th");

    head1.textContent="column 1";
    head2.textContent="column 2";
    head3.textContent="column 3";
    head4.textContent="column 4";

    row11.append(head1);
    row21.append(head2);
    row31.append(head3);
    row41.append(head4);

    tbl1.append(row11);
    tbl2.append(row21);
    tbl3.append(row31);
    tbl4.append(row41);

    div1.append(tbl1);
    div2.append(tbl2);
    div3.append(tbl3);
    div4.append(tbl4);

    localStorage.setItem('tablesHTML', div1.outerHTML + div2.outerHTML + div3.outerHTML + div4.outerHTML);
    localStorage.setItem('tablesGenerated', 'true');
    count++;
  }
   let row12=document.createElement("tr");
   let row22=document.createElement("tr");
   let row32=document.createElement("tr");
   let row42=document.createElement("tr");

   let data1=document.createElement("td");
   let data2=document.createElement("td");
   let data3=document.createElement("td");
   let data4=document.createElement("td");

   data1.textContent="C";
   data2.textContent="J";
   data3.textContent="Q";
   data4.textContent="X";

   row12.append(data1);
   row22.append(data2);
   row32.append(data3);
   row42.append(data4);

   let tablesHTML = localStorage.getItem('tablesHTML');
            let parser = new DOMParser();
            let doc = parser.parseFromString(tablesHTML, 'text/html');

            doc.querySelector('table').append(row12);
            doc.querySelectorAll('table')[1].append(row22);
            doc.querySelectorAll('table')[2].append(row32);
            doc.querySelectorAll('table')[3].append(row42);
            
            localStorage.setItem('tablesHTML', doc.body.innerHTML);
   
});
 // D EVENT HANDLLER
d.addEventListener("click",()=>{
  tab[3].style.backgroundColor = " rgb(161, 235, 222)";
  clk++;
  if(clk==n){
    window.location.href = "forth.html";
  }
  if(clk+1<=n)
  text1.innerHTML=`NOW PLEASE SELECT THE COLUMN IN WHICH THE NUMBER ${clk+1} LETTER OF THE WORD YOU THOUGHT OF IS PRESENT`;
  
  if(count==0){

    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");
    let div4=document.createElement("div");

    div1.classList.add('col');
    div1.id="d1";
    div2.classList.add('col');
    div2.id="d2";
    div3.classList.add('col');
    div3.id="d3";
    div4.classList.add('col');
    div4.id="d4";

    let tbl1=document.createElement("table");
    let tbl2=document.createElement("table");
    let tbl3=document.createElement("table");
    let tbl4=document.createElement("table");

    let row11=document.createElement("tr");
    let row21=document.createElement("tr");
    let row31=document.createElement("tr");
    let row41=document.createElement("tr");

    let head1=document.createElement("th");
    let head2=document.createElement("th");
    let head3=document.createElement("th");
    let head4=document.createElement("th");

    head1.textContent="column 1";
    head2.textContent="column 2";
    head3.textContent="column 3";
    head4.textContent="column 4";

    row11.append(head1);
    row21.append(head2);
    row31.append(head3);
    row41.append(head4);

    tbl1.append(row11);
    tbl2.append(row21);
    tbl3.append(row31);
    tbl4.append(row41);

    div1.append(tbl1);
    div2.append(tbl2);
    div3.append(tbl3);
    div4.append(tbl4);

    localStorage.setItem('tablesHTML', div1.outerHTML + div2.outerHTML + div3.outerHTML + div4.outerHTML);
    localStorage.setItem('tablesGenerated', 'true');
    count++;
  }
   let row12=document.createElement("tr");
   let row22=document.createElement("tr");
   let row32=document.createElement("tr");
   let row42=document.createElement("tr");

   let data1=document.createElement("td");
   let data2=document.createElement("td");
   let data3=document.createElement("td");
   let data4=document.createElement("td");

   data1.textContent="D";
   data2.textContent="K";
   data3.textContent="R";
   data4.textContent="Y";

   row12.append(data1);
   row22.append(data2);
   row32.append(data3);
   row42.append(data4);

   let tablesHTML = localStorage.getItem('tablesHTML');
            let parser = new DOMParser();
            let doc = parser.parseFromString(tablesHTML, 'text/html');

            doc.querySelector('table').append(row12);
            doc.querySelectorAll('table')[1].append(row22);
            doc.querySelectorAll('table')[2].append(row32);
            doc.querySelectorAll('table')[3].append(row42);
            
            localStorage.setItem('tablesHTML', doc.body.innerHTML);
   
});
//E EVENT HANDLLER
e.addEventListener("click",()=>{
  tab[4].style.backgroundColor = " rgb(161, 235, 222)";
  clk++;
  if(clk==n){
    window.location.href = "forth.html";
  }
  if(clk+1<=n)
  text1.innerHTML=`NOW PLEASE SELECT THE COLUMN IN WHICH THE NUMBER ${clk+1} LETTER OF THE WORD YOU THOUGHT OF IS PRESENT`;
  
  if(count==0){

    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");
    let div4=document.createElement("div");

    div1.classList.add('col');
    div1.id="d1";
    div2.classList.add('col');
    div2.id="d2";
    div3.classList.add('col');
    div3.id="d3";
    div4.classList.add('col');
    div4.id="d4";

    let tbl1=document.createElement("table");
    let tbl2=document.createElement("table");
    let tbl3=document.createElement("table");
    let tbl4=document.createElement("table");

    let row11=document.createElement("tr");
    let row21=document.createElement("tr");
    let row31=document.createElement("tr");
    let row41=document.createElement("tr");

    let head1=document.createElement("th");
    let head2=document.createElement("th");
    let head3=document.createElement("th");
    let head4=document.createElement("th");

    head1.textContent="column 1";
    head2.textContent="column 2";
    head3.textContent="column 3";
    head4.textContent="column 4";

    row11.append(head1);
    row21.append(head2);
    row31.append(head3);
    row41.append(head4);

    tbl1.append(row11);
    tbl2.append(row21);
    tbl3.append(row31);
    tbl4.append(row41);

    div1.append(tbl1);
    div2.append(tbl2);
    div3.append(tbl3);
    div4.append(tbl4);

    localStorage.setItem('tablesHTML', div1.outerHTML + div2.outerHTML + div3.outerHTML + div4.outerHTML);
    localStorage.setItem('tablesGenerated', 'true');
    count++;
  }
   let row12=document.createElement("tr");
   let row22=document.createElement("tr");
   let row32=document.createElement("tr");
   let row42=document.createElement("tr");

   let data1=document.createElement("td");
   let data2=document.createElement("td");
   let data3=document.createElement("td");
   let data4=document.createElement("td");

   data1.textContent="E";
   data2.textContent="L";
   data3.textContent="S";
   data4.textContent="Z";

   row12.append(data1);
   row22.append(data2);
   row32.append(data3);
   row42.append(data4);

   let tablesHTML = localStorage.getItem('tablesHTML');
            let parser = new DOMParser();
            let doc = parser.parseFromString(tablesHTML, 'text/html');

            doc.querySelector('table').append(row12);
            doc.querySelectorAll('table')[1].append(row22);
            doc.querySelectorAll('table')[2].append(row32);
            doc.querySelectorAll('table')[3].append(row42);
            
            localStorage.setItem('tablesHTML', doc.body.innerHTML);
   
});
// F EVENT HANDLLER
f.addEventListener("click",()=>{
  tab[5].style.backgroundColor = " rgb(161, 235, 222)";
  clk++;
  if(clk==n){
    window.location.href = "forth.html";
  }
  if(clk+1<=n)
  text1.innerHTML=`NOW PLEASE SELECT THE COLUMN IN WHICH THE NUMBER ${clk+1} LETTER OF THE WORD YOU THOUGHT OF IS PRESENT`;
  
  if(count==0){

    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");
    let div4=document.createElement("div");

    div1.classList.add('col');
    div1.id="d1";
    div2.classList.add('col');
    div2.id="d2";
    div3.classList.add('col');
    div3.id="d3";
    div4.classList.add('col');
    div4.id="d4";

    let tbl1=document.createElement("table");
    let tbl2=document.createElement("table");
    let tbl3=document.createElement("table");
    let tbl4=document.createElement("table");

    let row11=document.createElement("tr");
    let row21=document.createElement("tr");
    let row31=document.createElement("tr");
    let row41=document.createElement("tr");

    let head1=document.createElement("th");
    let head2=document.createElement("th");
    let head3=document.createElement("th");
    let head4=document.createElement("th");

    head1.textContent="column 1";
    head2.textContent="column 2";
    head3.textContent="column 3";
    head4.textContent="column 4";

    row11.append(head1);
    row21.append(head2);
    row31.append(head3);
    row41.append(head4);

    tbl1.append(row11);
    tbl2.append(row21);
    tbl3.append(row31);
    tbl4.append(row41);

    div1.append(tbl1);
    div2.append(tbl2);
    div3.append(tbl3);
    div4.append(tbl4);

    localStorage.setItem('tablesHTML', div1.outerHTML + div2.outerHTML + div3.outerHTML + div4.outerHTML);
    localStorage.setItem('tablesGenerated', 'true');
    count++;
  }
   let row12=document.createElement("tr");
   let row22=document.createElement("tr");
   let row32=document.createElement("tr");
   let row42=document.createElement("tr");

   let data1=document.createElement("td");
   let data2=document.createElement("td");
   let data3=document.createElement("td");
   let data4=document.createElement("td");

   data1.textContent="M";
   data2.textContent="F";
   data3.textContent="T";
   data4.textContent="_";

   row12.append(data1);
   row22.append(data2);
   row32.append(data3);
   row42.append(data4);

   let tablesHTML = localStorage.getItem('tablesHTML');
            let parser = new DOMParser();
            let doc = parser.parseFromString(tablesHTML, 'text/html');

            doc.querySelector('table').append(row12);
            doc.querySelectorAll('table')[1].append(row22);
            doc.querySelectorAll('table')[2].append(row32);
            doc.querySelectorAll('table')[3].append(row42);
            
            localStorage.setItem('tablesHTML', doc.body.innerHTML);
   
});

// G EVENT HANDLLER

g.addEventListener("click",()=>{
  tab[6].style.backgroundColor = " rgb(161, 235, 222)";
  clk++;
  if(clk==n){
    window.location.href = "forth.html";
  }
  if(clk+1<=n)
  text1.innerHTML=`NOW PLEASE SELECT THE COLUMN IN WHICH THE NUMBER ${clk+1} LETTER OF THE WORD YOU THOUGHT OF IS PRESENT`;
  
  if(count==0){

    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");
    let div4=document.createElement("div");

    div1.classList.add('col');
    div1.id="d1";
    div2.classList.add('col');
    div2.id="d2";
    div3.classList.add('col');
    div3.id="d3";
    div4.classList.add('col');
    div4.id="d4";

    let tbl1=document.createElement("table");
    let tbl2=document.createElement("table");
    let tbl3=document.createElement("table");
    let tbl4=document.createElement("table");

    let row11=document.createElement("tr");
    let row21=document.createElement("tr");
    let row31=document.createElement("tr");
    let row41=document.createElement("tr");

    let head1=document.createElement("th");
    let head2=document.createElement("th");
    let head3=document.createElement("th");
    let head4=document.createElement("th");

    head1.textContent="column 1";
    head2.textContent="column 2";
    head3.textContent="column 3";
    head4.textContent="column 4";

    row11.append(head1);
    row21.append(head2);
    row31.append(head3);
    row41.append(head4);

    tbl1.append(row11);
    tbl2.append(row21);
    tbl3.append(row31);
    tbl4.append(row41);

    div1.append(tbl1);
    div2.append(tbl2);
    div3.append(tbl3);
    div4.append(tbl4);

    localStorage.setItem('tablesHTML', div1.outerHTML + div2.outerHTML + div3.outerHTML + div4.outerHTML);
    localStorage.setItem('tablesGenerated', 'true');
    count++;
  }
   let row12=document.createElement("tr");
   let row22=document.createElement("tr");
   let row32=document.createElement("tr");
   let row42=document.createElement("tr");

   let data1=document.createElement("td");
   let data2=document.createElement("td");
   let data3=document.createElement("td");
   let data4=document.createElement("td");

   data1.textContent="N";
   data2.textContent="G";
   data3.textContent="U";
   data4.textContent="_";

   row12.append(data1);
   row22.append(data2);
   row32.append(data3);
   row42.append(data4);

   let tablesHTML = localStorage.getItem('tablesHTML');
            let parser = new DOMParser();
            let doc = parser.parseFromString(tablesHTML, 'text/html');

            doc.querySelector('table').append(row12);
            doc.querySelectorAll('table')[1].append(row22);
            doc.querySelectorAll('table')[2].append(row32);
            doc.querySelectorAll('table')[3].append(row42);
            
            localStorage.setItem('tablesHTML', doc.body.innerHTML);
   
});



/*
let col=document.querySelectorAll(".col");
let text1=document.querySelector("#text1");
let clk=0;

let n = localStorage.getItem('n');
col.forEach(col=>{
    col.addEventListener("click",()=>{
      clk++;
      if(clk==n){
        window.location.href = "forth.html";
      }
      if(clk+1<=n)
      text1.innerHTML=`NOW PLEASE SELECT THE COLUMN IN WHICH THE NUMBER ${clk+1} LETTER OF THE WORD YOU THINK OF IS PRESENT`;
    });
});

*/
