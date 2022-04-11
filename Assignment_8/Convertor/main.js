var atb=document.getElementById("allbtn");
atb.addEventListener('click',function(){
    var kgin=document.getElementById('kgsInput');
    let kgs=kgin.value;
    document.getElementById("lbsOutput").innerText = kgs * 2.2046;
    var feetin=document.getElementById('feetInput');
    let feet=feetin.value;
    document.getElementById("cmsOutput").innerText = feet * 30.48;
    var kmin=document.getElementById('kmInput');
    let km=kmin.value;

    console.log(km)
    document.getElementById("mOutput").innerText = km * 1000.00;
    var cubin=document.getElementById('cubInput');
    let cub=cubin.value;

    console.log(cub)
    document.getElementById("lOutput").innerText = cub*1000;
    var metin=document.getElementById('metInput');
    let met=metin.value;

    console.log(met)
    document.getElementById("inOutput").innerText = met*39.37;
})