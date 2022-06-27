// создала массивчик свг масочек

let things = [
  "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTMyNSAxMzI1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSI2NjIuNSIgY3k9IjY2Mi41IiByPSI2NjIuNSIgZmlsbD0iI0UxMDEzOCIvPgo8L3N2Zz4K)",
  "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgNjU3IDc1NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMyOC41IDBMMzc3LjcwNSAyOTMuMjc0TDY1Ni4yOTEgMTg5LjI1TDQyNi45MSAzNzguNUw2NTYuMjkxIDU2Ny43NUwzNzcuNzA1IDQ2My43MjZMMzI4LjUgNzU3TDI3OS4yOTUgNDYzLjcyNkwwLjcwOTM4MSA1NjcuNzVMMjMwLjA5IDM3OC41TDAuNzA5MzgxIDE4OS4yNUwyNzkuMjk1IDI5My4yNzRMMzI4LjUgMFoiIGZpbGw9IiNFMTAxMzgiLz4KPC9zdmc+Cg==)",
  "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTM2MCAxMzYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTM2MCIgaGVpZ2h0PSIxMzYwIiBmaWxsPSIjRkYwMDAwIi8+Cjwvc3ZnPgo=)",
  "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI5NyAxMTIzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNjQ4LjUgMEwxMjk2LjcyIDExMjIuNzVIMC4yNzk5NjhMNjQ4LjUgMFoiIGZpbGw9IiNGMDEwNkEiLz4KPC9zdmc+Cg==)",
  "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTMwNiAxNTA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNjUzIDBMNjkwLjcgNjg4LjcwMkwxMzA1Ljk4IDM3N0w3MjguNCA3NTRMMTMwNS45OCAxMTMxTDY5MC43IDgxOS4yOThMNjUzIDE1MDhMNjE1LjMgODE5LjI5OEwwLjAxNjg0NTcgMTEzMUw1NzcuNiA3NTRMMC4wMTY4NDU3IDM3N0w2MTUuMyA2ODguNzAyTDY1MyAwWiIgZmlsbD0iI0FDRTU0QyIvPgo8L3N2Zz4K)",
  "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTUwOCAxNTA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNzU0IDBMODU1LjMgNjUyLjdMMTUwOCA3NTRMODU1LjMgODU1LjNMNzU0IDE1MDhMNjUyLjcgODU1LjNMMCA3NTRMNjUyLjcgNjUyLjdMNzU0IDBaIiBmaWxsPSIjM0VDNEUxIi8+Cjwvc3ZnPgo=)",
  "url(data:imagesvg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTUwNiAxNTAzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNzUzIDBMNzc1LjY4IDU3NC40NjdMOTQwLjUxMiAyMy42ODgzTDgxOS42MTYgNTg1Ljc0OEwxMTE2LjI0IDkzLjI2NDhMODU5LjM2NiA2MDcuNkwxMjY5LjE1IDIwNC4zNThMODkyLjQzMiA2MzguNjUyTDEzODkuNjIgMzQ5Ljk4N0w5MTYuNzM3IDY3Ni45NTFMMTQ3MC4xIDUyMS4wMDFMOTMwLjc1NSA3MjAuMDkxTDE1MDUuNTEgNzA2LjY1Nkw5MzMuNjAzIDc2NS4zNjNMMTQ5My42NCA4OTUuMjg2TDkyNS4xMDMgODA5LjkyTDE0MzUuMjQgMTA3NS4wNEw5MDUuNzkgODUwLjk2M0wxMzMzLjk3IDEyMzQuNjJMODc2Ljg3NiA4ODUuOTE0TDExOTYuMTkgMTM2NEw4NDAuMTc4IDkxMi41NzZMMTAzMC41NyAxNDU1LjA1TDc5OC4wMDMgOTI5LjI3NUw4NDcuNTAxIDE1MDIuMDVMNzUzIDkzNC45Nkw2NTguNDk5IDE1MDIuMDVMNzA3Ljk5NyA5MjkuMjc1TDQ3NS40MzQgMTQ1NS4wNUw2NjUuODIyIDkxMi41NzZMMzA5LjgxIDEzNjRMNjI5LjEyNCA4ODUuOTE0TDE3Mi4wMzMgMTIzNC42Mkw2MDAuMjEgODUwLjk2M0w3MC43NjA0IDEwNzUuMDRMNTgwLjg5NyA4MDkuOTJMMTIuMzU1NCA4OTUuMjg2TDU3Mi4zOTcgNzY1LjM2M0wwLjQ4Nzg1NCA3MDYuNjU2TDU3NS4yNDUgNzIwLjA5MUwzNS45MDM0IDUyMS4wMDFMNTg5LjI2MyA2NzYuOTUxTDExNi4zNzcgMzQ5Ljk4N0w2MTMuNTY4IDYzOC42NTJMMjM2Ljg1MiAyMDQuMzU4TDY0Ni42MzQgNjA3LjZMMzg5Ljc1OCA5My4yNjQ4TDY4Ni4zODQgNTg1Ljc0OEw1NjUuNDg4IDIzLjY4ODNMNzMwLjMyIDU3NC40NjdMNzUzIDBaIiBmaWxsPSIjRkZEMTJCIi8+Cjwvc3ZnPgo=)",
  "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI5NyAxMTIzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNjQ4LjUgMEwxMjk2LjcyIDExMjIuNzVIMC4yNzk5NjhMNjQ4LjUgMFoiIGZpbGw9IiNGMDEwNkEiLz4KPC9zdmc+Cg==)",
  "url(data:imagesvg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTUwNiAxNTAzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNzUzIDBMODM0LjI3MSAxMTAuNjczTDk0MC41MTIgMjMuNjg4M0w5OTEuNzA3IDE1MS4wOTZMMTExNi4yNCA5My4yNjQ4TDExMzQuMTQgMjI5LjQwMUwxMjY5LjE1IDIwNC4zNThMMTI1Mi42MyAzNDAuNjY5TDEzODkuNjIgMzQ5Ljk4N0wxMzM5LjczIDQ3Ny45MDhMMTQ3MC4xIDUyMS4wMDFMMTM4OS45NSA2MzIuNDk0TDE1MDUuNTEgNzA2LjY1NkwxNDAwLjE2IDc5NC43MTZMMTQ5My42NCA4OTUuMjg2TDEzNjkuNyA5NTQuMzc5TDE0MzUuMjQgMTA3NS4wNEwxMzAwLjUgMTEwMS40NUwxMzMzLjk3IDEyMzQuNjJMMTE5Ni44OSAxMjI2LjY5TDExOTYuMTkgMTM2NEwxMDY1LjM5IDEzMjIuMjNMMTAzMC41NyAxNDU1LjA1TDkxNC4yNiAxMzgyLjA3TDg0Ny41MDEgMTUwMi4wNUw3NTMgMTQwMi40NEw2NTguNDk5IDE1MDIuMDVMNTkxLjc0IDEzODIuMDdMNDc1LjQzNCAxNDU1LjA1TDQ0MC42MTIgMTMyMi4yM0wzMDkuODEgMTM2NEwzMDkuMTEyIDEyMjYuNjlMMTcyLjAzMyAxMjM0LjYyTDIwNS41MDQgMTEwMS40NUw3MC43NjA0IDEwNzUuMDRMMTM2LjI5NyA5NTQuMzc5TDEyLjM1NTQgODk1LjI4NkwxMDUuODQgNzk0LjcxNkwwLjQ4Nzg1NCA3MDYuNjU2TDExNi4wNDYgNjMyLjQ5NEwzNS45MDM0IDUyMS4wMDFMMTY2LjI3NCA0NzcuOTA4TDExNi4zNzcgMzQ5Ljk4N0wyNTMuMzY4IDM0MC42NjlMMjM2Ljg1MiAyMDQuMzU4TDM3MS44NTcgMjI5LjQwMUwzODkuNzU4IDkzLjI2NDhMNTE0LjI5MyAxNTEuMDk2TDU2NS40ODggMjMuNjg4M0w2NzEuNzI5IDExMC42NzNMNzUzIDBaIiBmaWxsPSIjREJGRjAwIi8+Cjwvc3ZnPgo=)",
  "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTMyNSAxMzI1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSI2NjIuNSIgY3k9IjY2Mi41IiByPSI2NjIuNSIgZmlsbD0iI0UxMDEzOCIvPgo8L3N2Zz4K)",
  "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTM2MCAxMzYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTM2MCIgaGVpZ2h0PSIxMzYwIiBmaWxsPSIjRkYwMDAwIi8+Cjwvc3ZnPgo=)",
  "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTM2MCAxMzYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTM2MCIgaGVpZ2h0PSIxMzYwIiBmaWxsPSIjRkYwMDAwIi8+Cjwvc3ZnPgo=)",
  "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI5NyAxMTIzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNjQ4LjUgMEwxMjk2LjcyIDExMjIuNzVIMC4yNzk5NjhMNjQ4LjUgMFoiIGZpbGw9IiNGMDEwNkEiLz4KPC9zdmc+Cg==)",
  "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI5NyAxMTIzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNjQ4LjUgMEwxMjk2LjcyIDExMjIuNzVIMC4yNzk5NjhMNjQ4LjUgMFoiIGZpbGw9IiNGMDEwNkEiLz4KPC9zdmc+Cg==)",
];

// самая крутая функция которую я когда-либо писала
function randomfigures(){
  var randomValue = things[Math.floor(things.length * Math.random())];
  var nomer = Math.floor(Math.random() * 10);
  let figure = document.createElement("div")
  wrandom = Math.floor(Math.random() * 51) + 30;
  hrandom = Math.floor(Math.random() * 51) + 30;
  $( "#jsback" ).append(figure)
  figure.style.cssText=`
  position: absolute;
  width: ${wrandom}vw;
  height: ${hrandom}vh;
  -webkit-mask-image: ${randomValue};
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
`;
  let hue =  1 + Math.random() * (360 - 1);
  figure.style.backgroundColor = 'hsl(' + hue + ',' + 100 + '%,' + 50 + '%)';
  const max = 100;
  figure.style.top = `${Math.floor(Math.random()*(100)-50)}vh`
  figure.style.left = `${Math.floor(Math.random()*100-20)}vw`
  var a = Math.floor(Math.random() * 1000 - 5);
  figure.style.transform = 'rotate(' + a + 'deg)';
  figure.classList.add("mylovers");
  
// музыкальная дискотека
  var audio = new Audio(`./music/${nomer}.mp3`);
  audio.play();

  // уничтожение фигурок по таймеру
  setTimeout(() => {
     figure.remove()
   }, 2000);
}

setInterval(randomfigures,100);
