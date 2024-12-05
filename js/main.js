var x= document.querySelector('.toogle');
var flag = true;
x.addEventListener('click',function(){
    document.body.classList.toggle('root2')
    if(flag){
    document.querySelector('.toogle .sun').style.display = 'none';
    document.querySelector('.toogle .moon').style.display = 'block';
    flag=false;
    }
    else{
    document.querySelector('.toogle .sun').style.display = 'block';
    document.querySelector('.toogle .moon').style.display = 'none';
    flag=true;
    }
})