async function testCPU() {
  const res = await fetch('/cpu');
  document.getElementById('output').textContent = JSON.stringify(await res.json(), null, 2);
}

async function testIO() {
  const res = await fetch('/io');
  document.getElementById('output').textContent = await res.text();
}