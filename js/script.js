function xemCuuChuong(so){

    let khung = document.getElementById("ketQuaCuuChuong");

    khung.innerHTML="";

    khung.style.display="flex";


    for(let i=1;i<=10;i++){

        khung.innerHTML +=

        `
        <div class="col border p-2 bg-white rounded">

        ${so} x ${i} = 

        <span class="text-danger fw-bold">
        ${so*i}
        </span>

        </div>
        `;

    }

}


let dapAnDungTimX = 0;


function taoDeTimX(){

document.getElementById("phanHoiTimX").innerHTML="";

document.getElementById("dapAnTimX").value="";


let x=Math.floor(Math.random()*20)+1;

let a=Math.floor(Math.random()*20)+1;


let ketqua=x+a;


document.getElementById("deBaiTimX").innerHTML=

`X + ${a} = ${ketqua}`;


dapAnDungTimX=x;


}



function kiemTraTimX(){


let nhap=

parseInt(document.getElementById("dapAnTimX").value);



if(nhap==dapAnDungTimX){

document.getElementById("phanHoiTimX").innerHTML=

"Đúng rồi!giỏi quá bé ơi";

}

else{

document.getElementById("phanHoiTimX").innerHTML=

"Chưa đúng!thử lại đi bé";

}


}



let dapAnDungPhepTinh=0;



function taoDePhepTinh(){


let a=Math.floor(Math.random()*50)+1;

let b=Math.floor(Math.random()*50)+1;


document.getElementById("deBaiPhepTinh").innerHTML=

`${a} + ${b} =`;


dapAnDungPhepTinh=a+b;


}



function kiemTraPhepTinh(){


let nhap=

parseInt(document.getElementById("dapAnPhepTinh").value);



if(nhap==dapAnDungPhepTinh){

document.getElementById("phanHoiPhepTinh").innerHTML=

" Đúng rồi!giỏi quá bé ơi ";

}

else{

document.getElementById("phanHoiPhepTinh").innerHTML=

"Chưa đúng!thử lại đi bé";

}


}





window.onload=function(){

taoDeTimX();

taoDePhepTinh();

}