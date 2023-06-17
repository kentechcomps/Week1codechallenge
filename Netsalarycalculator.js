//initialised basicsalary&benefit variables
let basicSalary = 40000;
let benefit = 10000

//function for calculating grossSalary
const grossSalaryfun = function (basicSalary , benefit){
let grossSalary = basicSalary + benefit;
 return grossSalary   
}
//calculate payee and store it in payeefun 
const payeefun = function (grossSalaryfun){
    let payee = 0;
 if(grossSalaryfun<24000){
   payee = (grossSalaryfun*0.1)
 }else if(grossSalaryfun>24000 && grossSalaryfun<32334){
  payee = (grossSalaryfun*0.25)
}else if(grossSalaryfun>32333){
 payee = (grossSalaryfun*0.30)
}
 return payee;
}
//nhifdeduction amount function
const Nhifdeduction = function (grossSalaryfun){
  let Nhif = 0;
  if(grossSalaryfun<5999){
    Nhif = 150
}else if(grossSalaryfun<=7999 && grossSalaryfun>=6000){
    Nhif =300
}else if(grossSalaryfun<=11999 && grossSalaryfun>=8000){
    Nhif =400
}else if(grossSalaryfun<=14999 && grossSalaryfun>=12000){
    Nhif =500
}else if(grossSalaryfun<=19999 && grossSalaryfun>=15000){
    Nhif =600
}else if(grossSalaryfun<=24999 && grossSalaryfun>=20000){
    Nhif =750
}else if(grossSalaryfun<=29999 && grossSalaryfun>=25000){
    Nhif =850
}else if(grossSalaryfun<=34999 && grossSalaryfun>=30000){
    Nhif =900
}else if(grossSalaryfun<=39999 && grossSalaryfun>=35000){
    Nhif =950
}else if(grossSalaryfun<=44999 && grossSalaryfun>=40000){
    Nhif =1000
}else if(grossSalaryfun<=49999 && grossSalaryfun>=45000){
    Nhif =1100
}else if(grossSalaryfun<=59999 && grossSalaryfun>=50000){
    Nhif =1200
}else if(grossSalaryfun<=69999 && grossSalaryfun>=60000){
    Nhif =1300
}else if(grossSalaryfun<=79999 && grossSalaryfun>=70000){
    Nhif =1400
}else if(grossSalaryfun<=89999 && grossSalaryfun>=80000){
    Nhif =1500
}else if(grossSalaryfun<=99999 && grossSalaryfun>=90000){
    Nhif =1600
}else if(grossSalaryfun>100000){
    Nhif = 1700
}
return Nhif;
}
//Nssfdeduction function
const Nssfdeduction = function (grossSalaryfun){
    let nssf = (grossSalaryfun*0.06)
    return nssf
}

//funtion for the netsalary
function netsalary(grossSalaryfun , Nhifdeduction , Nssfdeduction, payeefun){
 let netsalarypay = (grossSalaryfun -(Nhifdeduction+Nssfdeduction+payeefun));
 return netsalarypay;
}

