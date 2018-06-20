window.onload = function()
{
    user1 = document.getElementById('user')
    name1 = document.getElementById('name')
    email1 = document.getElementById('email')
    phone1 = document.getElementById('phone')
    address1 = document.getElementById('address')
    submit1 = document.getElementById('submit')
    male1 = document.getElementById('male')
    female1 = document.getElementById('female')

    document.getElementById('sessionid').innerHTML = localStorage.getItem('user')
    document.getElementById('sessionName').innerHTML = localStorage.getItem('name')
    document.getElementById('sessionEmail').innerHTML = localStorage.getItem('email')
    document.getElementById('sessionPhone').innerHTML = localStorage.getItem('phone')
    document.getElementById('sessionAddress').innerHTML = localStorage.getItem('address')
    document.getElementById('sessionGender').innerHTML = localStorage.getItem('gender')
    
    
    submit1.onclick = function()
    {
        user1.value.trim()!=""?localStorage.setItem('user',user1.value):null
        name1.value.trim()!=""?localStorage.setItem('name',name1.value):null
        email1.value.trim()!=""?localStorage.setItem('email',email1.value):null
        phone1.value.trim()!=""?localStorage.setItem('phone',phone1.value):null
        address1.value.trim()!=""?localStorage.setItem('address',address1.value):null
        if (male1.checked) {
         male1.value.trim()!=""?localStorage.setItem('gender',male1.value):null
        }
        else if(female1.checked){
        	female1.value.trim()!=""?localStorage.setItem('gender',female1.value):null
        }
        
    }
    
}