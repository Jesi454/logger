//setInterval(reloadData, 1000);
const etaMs = new Date(2022, 9, 22, 7, 37, 0).getTime() - Date.now();
const timeout = setTimeout(() => {}, reloadData);

function reloadData() {
  console.log("reload")
  setInterval(reloadData, 3000000);
  //location.reload()
}