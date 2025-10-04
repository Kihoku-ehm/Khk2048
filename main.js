$(function(){
  //console.log("s");
  managelist=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

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
    Producednumber = 3;
    //ctx.font = "48px serif";
    //ctx.fillStyle = "white";
    //ctx.fillText(2**Producednumber , 10, 50);

    function randomInt(min, max)
    {
        const minCeiled = Math.ceil(min);
         const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 上限は除き、下限は含む
    }

    //Placenumber = randomInt(1,17);
    //if(managelist[Placenumber-1] != 0)
    //{
    //    while(managelist[Placenumber-1] != 0)
    //    {
    //        Placenumber = randomInt(1,17);
    //    }
    //}
    Producednumber = randomInt(1,4);
    
    function drawNumber(Placenumber,Producednumber)
    {
        ctx.beginPath();
        if(Placenumber < 5)
        {
            ctx.rect(-15 + Placenumber * 115,100,95,95);
            if(Producednumber == 1)
            {
                ctx.fillStyle = "#cb2020";
            }
            else if(Producednumber == 2)
            {
                ctx.fillStyle = "#f08000";
            }
            else if(Producednumber == 3)
            {
                ctx.fillStyle = "#508750";
            }
            else if(Producednumber == 4)
            {
                ctx.fillStyle = "#3d757b";
            }
            else if(Producednumber == 5)
            {
                ctx.fillStyle = "#137d66";
            }
            else if(Producednumber == 6)
            {
                ctx.fillStyle = "#964b96";
            }
            else if(Producednumber == 7)
            {
                ctx.fillStyle = "#572172";
            }
            else if(Producednumber == 8)
            {
                ctx.fillStyle = "#1b2380";
            }
            else if(Producednumber == 9)
            {
                ctx.fillStyle = "#b01782";
            }
            else if(Producednumber == 10)
            {
                ctx.fillStyle = "#d00101";
            }
            ctx.fill();
            ctx.closePath();
            ctx.font = "48px serif";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText(2**Producednumber , 30 + Placenumber * 115 , 165);
            managelist[Placenumber-1]=Producednumber;
        }
        else if(Placenumber < 9)
        {
            ctx.rect(-15 + (Placenumber-4) * 115,215,95,95);
            if(Producednumber == 1)
            {
                ctx.fillStyle = "#cb2020";
            }
            else if(Producednumber == 2)
            {
                ctx.fillStyle = "#f08000";
            }
            else if(Producednumber == 3)
            {
                ctx.fillStyle = "#508750";
            }
            else if(Producednumber == 4)
            {
                ctx.fillStyle = "#3d757b";
            }
            else if(Producednumber == 5)
            {
                ctx.fillStyle = "#137d66";
            }
            else if(Producednumber == 6)
            {
                ctx.fillStyle = "#964b96";
            }
            else if(Producednumber == 7)
            {
                ctx.fillStyle = "#572172";
            }
            else if(Producednumber == 8)
            {
                ctx.fillStyle = "#1b2380";
            }
            else if(Producednumber == 9)
            {
                ctx.fillStyle = "#b01782";
            }
            else if(Producednumber == 10)
            {
                ctx.fillStyle = "#d00101";
            }
            ctx.fill();
            ctx.closePath();
            ctx.font = "48px serif";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText(2**Producednumber , 30+(Placenumber-4)*115, 280);
            managelist[Placenumber-1]=Producednumber;
        }
        else if(Placenumber < 13)
        {
            ctx.rect(-15 + (Placenumber-8) * 115,330,95,95);
            if(Producednumber == 1)
            {
                ctx.fillStyle = "#cb2020";
            }
            else if(Producednumber == 2)
            {
                ctx.fillStyle = "#f08000";
            }
            else if(Producednumber == 3)
            {
                ctx.fillStyle = "#508750";
            }
            else if(Producednumber == 4)
            {
                ctx.fillStyle = "#3d757b";
            }
            else if(Producednumber == 5)
            {
                ctx.fillStyle = "#137d66";
            }
            else if(Producednumber == 6)
            {
                ctx.fillStyle = "#964b96";
            }
            else if(Producednumber == 7)
            {
                ctx.fillStyle = "#572172";
            }
            else if(Producednumber == 8)
            {
                ctx.fillStyle = "#1b2380";
            }
            else if(Producednumber == 9)
            {
                ctx.fillStyle = "#b01782";
            }
            else if(Producednumber == 10)
            {
                ctx.fillStyle = "#d00101";
            }
            ctx.fill();
            ctx.closePath();
            ctx.font = "48px serif";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText(2**Producednumber , 30 + (Placenumber - 8) * 115, 395);
            managelist[Placenumber-1]=Producednumber;
        }
        else
        {
            ctx.rect(-15 + (Placenumber-12) * 115,445,95,95);
            if(Producednumber == 1)
            {
                ctx.fillStyle = "#cb2020";
            }
            else if(Producednumber == 2)
            {
                ctx.fillStyle = "#f08000";
            }
            else if(Producednumber == 3)
            {
                ctx.fillStyle = "#508750";
            }
            else if(Producednumber == 4)
            {
                ctx.fillStyle = "#3d757b";
            }
            else if(Producednumber == 5)
            {
                ctx.fillStyle = "#137d66";
            }
            else if(Producednumber == 6)
            {
                ctx.fillStyle = "#964b96";
            }
            else if(Producednumber == 7)
            {
                ctx.fillStyle = "#572172";
            }
            else if(Producednumber == 8)
            {
                ctx.fillStyle = "#1b2380";
            }
            else if(Producednumber == 9)
            {
                ctx.fillStyle = "#b01782";
            }
            else if(Producednumber == 10)
            {
                ctx.fillStyle = "#d00101";
            }
            ctx.fill();
            ctx.closePath();
            ctx.font = "48px serif";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText(2**Producednumber , 30 + (Placenumber - 12) * 115, 510);
            managelist[Placenumber-1]=Producednumber;
        }
        console.log(managelist);
    }

    function draw()
    {
        if(event.key == "S")
        {
            // Placenumber = randomInt(1,17);
            // if(managelist[Placenumber-1] != 0)
            // {
            //     while(managelist[Placenumber-1] != 0)
            //     {
            //         Placenumber = randomInt(1,17);
            //     }
            // }
            // Producednumber = randomInt(1,4);
            // drawNumber(Placenumber,Producednumber);
        }
    }
    document.addEventListener('keydown', event => 
        {
    // 変数eventの中身はKeyboardEventオブジェクト
    console.log(event);
    console.log(event.key); // 押されたキーの情報
    Placenumber = randomInt(1,17);
    if(managelist[Placenumber-1] != 0)
    {
        while(managelist[Placenumber-1] != 0)
        {
            Placenumber = randomInt(1,17);
        }
    }
    Producednumber = randomInt(1,4);
    drawNumber(Placenumber,Producednumber);
    });
});