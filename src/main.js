const getNum = () => {
  return Math.floor(Math.random() * 100 + 1);
};
let num = getNum();
const submit = document.querySelector('button');
submit.addEventListener('click', (e) => {
  const input = parseInt(document.querySelector('input').value);
  const p = document.createElement('p');
  const div = document.querySelector('div');
  div.appendChild(p);

  if (isNaN(input)) {
    alert('INVALID');
    return;
  } else if (input < num) {
    p.innerHTML = 'It is smaller than the original number';
  } else if (input > num) {
    p.innerHTML = 'It is greater than the original number';
  } else if (input === num) {
    p.innerHTML = 'Guess is correct';
    const clr = document.createElement('button');
    clr.innerHTML = 'Clear';
    div.appendChild(clr);
    clr.addEventListener('click', (e) => {
      div.innerHTML = '';
      num = getNum();
      console.log(`New number is ${num}`);
    });
  }
});
