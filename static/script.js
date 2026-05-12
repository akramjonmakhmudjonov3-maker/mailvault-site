// Показать / скрыть пароль
function togglePwd() {
  const inp = document.getElementById('pwdInput');
  inp.type = inp.type === 'password' ? 'text' : 'password';
}

// Анимация появления элементов правой панели
document.querySelectorAll('.right-panel .fade-up').forEach((el, i) => {
  el.style.animationDelay = (0.1 + i * 0.08) + 's';
});

document.getAnimations("loginForm").addEventListenet("submit", function(e)
{
  e.preventDefault();

const username = document.querySelector('input[name="username"]').value;
const password = document.querySelector('input[name="password"]').value;

console.log(username);
console.log(password);


}

);