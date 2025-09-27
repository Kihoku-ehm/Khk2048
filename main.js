$(function(){
  console.log("s");

  const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.rect(80,80,480,480);
    ctx.fillStyle = "#d2b48c";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(100,100,95,95);
    ctx.fillStyle = "#f5deb3";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(215,100,95,95);
    ctx.fillStyle = "#f5deb3";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(330,100,95,95);
    ctx.fillStyle = "#f5deb3";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(445,100,95,95);
    ctx.fillStyle = "#f5deb3";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(100,215,95,95);
    ctx.fillStyle = "#f5deb3";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(215,215,95,95);
    ctx.fillStyle = "#f5deb3";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(330,215,95,95);
    ctx.fillStyle = "#f5deb3";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(445,215,95,95);
    ctx.fillStyle = "#f5deb3";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(100,330,95,95);
    ctx.fillStyle = "#f5deb3";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(215,330,95,95);
    ctx.fillStyle = "#f5deb3";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(330,330,95,95);
    ctx.fillStyle = "#f5deb3";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(445,330,95,95);
    ctx.fillStyle = "#f5deb3";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(100,445,95,95);
    ctx.fillStyle = "#f5deb3";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(215,445,95,95);
    ctx.fillStyle = "#f5deb3";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(330,445,95,95);
    ctx.fillStyle = "#f5deb3";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(445,445,95,95);
    ctx.fillStyle = "#f5deb3";
    ctx.fill();
    ctx.closePath();


    function drawNumber(Placenumber,Producednumber)
    {
        ctx.beginPath();
        if(Placenumber < 5)
        {
            ctx.rect(-110 + Placenumber * 115,100,95,95);
        }
        else if(Placenumber < 9)
        {
            ctx.rect(-110 + (Placenumber - 4) * 115,215,95,95);
        }
        else if(Placenumber < 13)
        {
            ctx.rect(-110 + (Placenumber - 8) * 115,330,95,95);
        }
        else
        {
            ctx.rect(-110 + (Placenumber - 12) * 115,445,95,95);
        }
    }

});