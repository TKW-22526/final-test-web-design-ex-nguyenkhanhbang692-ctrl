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

    let a = Math.floor(Math.random() * 50) + 1;
    let b = Math.floor(Math.random() * 50) + 1;
    let phep = Math.random() < 0.5 ? "+" : "-";
    if(phep == "-"){

        if(a < b){
            let temp = a;
            a = b;
            b = temp;
        }

        dapAnDungPhepTinh = a - b;

    }else{

        dapAnDungPhepTinh = a + b;

    }

    document.getElementById("deBaiPhepTinh").innerHTML =
        `${a} ${phep} ${b} = ?`;

    document.getElementById("dapAnPhepTinh").value = "";
    document.getElementById("phanHoiPhepTinh").innerHTML = "";

}



function kiemTraPhepTinh(){

    let nhap = parseInt(document.getElementById("dapAnPhepTinh").value);

    if(nhap == dapAnDungPhepTinh){

        document.getElementById("phanHoiPhepTinh").innerHTML =
        "Đúng rồi! Giỏi quá bé ơi.";

    }else{

        document.getElementById("phanHoiPhepTinh").innerHTML =
        " Chưa đúng! Đáp án đúng là " + dapAnDungPhepTinh;

    }

}




window.onload=function(){

taoDeTimX();

taoDePhepTinh();

}

function tinhNhan(){

    let a = Number(document.getElementById("nhan1").value);
    let b = Number(document.getElementById("nhan2").value);

    let kq = a * b;

    document.getElementById("ketQuaNhan").innerHTML =
        "Kết quả: " + a + " × " + b + " = " + kq;
}


function tinhChia(){

    let a = Number(document.getElementById("chia1").value);
    let b = Number(document.getElementById("chia2").value);

    if(b==0){

        document.getElementById("ketQuaChia").innerHTML =
        "Không thể chia cho 0";

        return;
    }

    let kq = a / b;

    document.getElementById("ketQuaChia").innerHTML =
        "Kết quả: " + a + " ÷ " + b + " = " + kq;
}