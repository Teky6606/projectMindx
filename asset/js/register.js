document.getElementById('registerForm').addEventListener('submit',function(e) {

    e.preventDefault(); 
    // kkhởi tạo các biến lưu trư thông tin đăng kí
    const ussername = document.getElementById('username_dk').value;
    const password1 = document.getElementById('password1').value;
    const password1_cf= document.getElementById('password1_cf').value;

    if(password1 !== password1_cf) // kiểm tra mật khẩu có khớp không
    {
        alert('Mật khẩu không khớp!');
        return;
    }
// nếu trùng nhau thì tạo 1 localstorage để lưu trữ thông tin đăng kí
const user_regeister = {
    username: ussername,
    password: password1
};
localStorage.setItem('user_regeister', JSON.stringify(user_regeister));
});