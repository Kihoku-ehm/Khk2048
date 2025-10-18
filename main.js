$(function(){
  //console.log("s");
  managelist=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  Displaynumber = 0;
  Unit = "";

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
                ctx.fillStyle = "#8e1919ff";
            }
            else if (Producednumber == 11)
            {
                ctx.fillStyle = "#ad660eff";
            }
            else if (Producednumber == 12)
            {
                ctx.fillStyle = "#6b8e23ff";
            }
            else if (Producednumber == 13)
            {
                ctx.fillStyle = "#4682b4ff";
            }
            else if (Producednumber == 14)
            {
                ctx.fillStyle = "#7b68eeff";
            }
            else if (Producednumber == 15)
            {
                ctx.fillStyle = "#ff1493ff";
            }
            else if (Producednumber == 16)
            {
                ctx.fillStyle = "#ff4500ff";
            }
            else if (Producednumber == 17)
            {
                ctx.fillStyle = "#2f4f4fff";
            }
            else if (Producednumber == 18)
            {
                ctx.fillStyle = "#7b04abff";
            }
            else if (Producednumber == 19)
            {
                ctx.fillStyle = "#8f2d72ff";
            }
            else if (Producednumber == 20)
            {
                ctx.fillStyle = "#1c1cd0ff";
            }
            else if (Producednumber == 21)
            {
                ctx.fillStyle = "#d000d0ff";
            }
            else if (Producednumber == 22)
            {
                ctx.fillStyle = "#707522ff";
            }
            else if (Producednumber == 23)
            {
                ctx.fillStyle = "#e85353ff";
            }
            else if (Producednumber == 24)
            {
                ctx.fillStyle = "#1c3279ff";
            }
            else if (Producednumber == 25)
            {
                ctx.fillStyle = "#766185ff";
            }
            else if (Producednumber == 26)
            {
                ctx.fillStyle = "#225de6ff";
            }
            else if (Producednumber == 27)
            {
                ctx.fillStyle = "#4e183fff";
            }
            else if (Producednumber == 28)
            {
                ctx.fillStyle = "#14730aff";
            }
            else if (Producednumber == 29)
            {
                ctx.fillStyle = "#059097ff";
            }
            else if (Producednumber == 30)
            {
                ctx.fillStyle = "#000000ff";
            }

            if (Producednumber < 10)
            {
                Displaynumber = Producednumber;
                Unit = "";
            }
            else if (Producednumber < 20)
            {
                Displaynumber = Producednumber - 10;
                Unit = "K";
            }
            else if (Producednumber < 30)
            {
                Displaynumber = Producednumber - 20;
                Unit = "M";
            }
            ctx.fill();
            ctx.closePath();
            ctx.font = "48px serif";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText(2**Displaynumber + Unit , 30 + Placenumber * 115 , 165);
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
                ctx.fillStyle = "#8e1919ff";
            }
            else if (Producednumber == 11)
            {
                ctx.fillStyle = "#ad660eff";
            }
            else if (Producednumber == 12)
            {
                ctx.fillStyle = "#6b8e23ff";
            }
            else if (Producednumber == 13)
            {
                ctx.fillStyle = "#4682b4ff";
            }
            else if (Producednumber == 14)
            {
                ctx.fillStyle = "#7b68eeff";
            }
            else if (Producednumber == 15)
            {
                ctx.fillStyle = "#ff1493ff";
            }
            else if (Producednumber == 16)
            {
                ctx.fillStyle = "#ff4500ff";
            }
            else if (Producednumber == 17)
            {
                ctx.fillStyle = "#2f4f4fff";
            }
            else if (Producednumber == 18)
            {
                ctx.fillStyle = "#7b04abff";
            }
            else if (Producednumber == 19)
            {
                ctx.fillStyle = "#8f2d72ff";
            }
            else if (Producednumber == 20)
            {
                ctx.fillStyle = "#1c1cd0ff";
            }
            else if (Producednumber == 21)
            {
                ctx.fillStyle = "#d000d0ff";
            }
            else if (Producednumber == 22)
            {
                ctx.fillStyle = "#707522ff";
            }
            else if (Producednumber == 23)
            {
                ctx.fillStyle = "#e85353ff";
            }
            else if (Producednumber == 24)
            {
                ctx.fillStyle = "#1c3279ff";
            }
            else if (Producednumber == 25)
            {
                ctx.fillStyle = "#766185ff";
            }
            else if (Producednumber == 26)
            {
                ctx.fillStyle = "#225de6ff";
            }
            else if (Producednumber == 27)
            {
                ctx.fillStyle = "#4e183fff";
            }
            else if (Producednumber == 28)
            {
                ctx.fillStyle = "#14730aff";
            }
            else if (Producednumber == 29)
            {
                ctx.fillStyle = "#059097ff";
            }
            else if (Producednumber == 30)
            {
                ctx.fillStyle = "#000000ff";
            }

            if (Producednumber < 10)
            {
                Displaynumber = Producednumber;
                Unit = "";
            }
            else if (Producednumber < 20)
            {
                Displaynumber = Producednumber - 10;
                Unit = "K";
            }
            else if (Producednumber < 30)
            {
                Displaynumber = Producednumber - 20;
                Unit = "M";
            }
            ctx.fill();
            ctx.closePath();
            ctx.font = "48px serif";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText(2**Displaynumber + Unit , 30+(Placenumber-4)*115, 280);
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
                ctx.fillStyle = "#8e1919ff";
            }
            else if (Producednumber == 11)
            {
                ctx.fillStyle = "#ad660eff";
            }
            else if (Producednumber == 12)
            {
                ctx.fillStyle = "#6b8e23ff";
            }
            else if (Producednumber == 13)
            {
                ctx.fillStyle = "#4682b4ff";
            }
            else if (Producednumber == 14)
            {
                ctx.fillStyle = "#7b68eeff";
            }
            else if (Producednumber == 15)
            {
                ctx.fillStyle = "#ff1493ff";
            }
            else if (Producednumber == 16)
            {
                ctx.fillStyle = "#ff4500ff";
            }
            else if (Producednumber == 17)
            {
                ctx.fillStyle = "#2f4f4fff";
            }
            else if (Producednumber == 18)
            {
                ctx.fillStyle = "#7b04abff";
            }
            else if (Producednumber == 19)
            {
                ctx.fillStyle = "#8f2d72ff";
            }
            else if (Producednumber == 20)
            {
                ctx.fillStyle = "#1c1cd0ff";
            }
            else if (Producednumber == 21)
            {
                ctx.fillStyle = "#d000d0ff";
            }
            else if (Producednumber == 22)
            {
                ctx.fillStyle = "#707522ff";
            }
            else if (Producednumber == 23)
            {
                ctx.fillStyle = "#e85353ff";
            }
            else if (Producednumber == 24)
            {
                ctx.fillStyle = "#1c3279ff";
            }
            else if (Producednumber == 25)
            {
                ctx.fillStyle = "#766185ff";
            }
            else if (Producednumber == 26)
            {
                ctx.fillStyle = "#225de6ff";
            }
            else if (Producednumber == 27)
            {
                ctx.fillStyle = "#4e183fff";
            }
            else if (Producednumber == 28)
            {
                ctx.fillStyle = "#14730aff";
            }
            else if (Producednumber == 29)
            {
                ctx.fillStyle = "#059097ff";
            }
            else if (Producednumber == 30)
            {
                ctx.fillStyle = "#000000ff";
            }

            if (Producednumber < 10)
            {
                Displaynumber = Producednumber;
                Unit = "";
            }
            else if (Producednumber < 20)
            {
                Displaynumber = Producednumber - 10;
                Unit = "K";
            }
            else if (Producednumber < 30)
            {
                Displaynumber = Producednumber - 20;
                Unit = "M";
            }
            ctx.fill();
            ctx.closePath();
            ctx.font = "48px serif";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText(2**Displaynumber + Unit , 30 + (Placenumber - 8) * 115, 395);
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
                ctx.fillStyle = "#8e1919ff";
            }
            else if (Producednumber == 11)
            {
                ctx.fillStyle = "#ad660eff";
            }
            else if (Producednumber == 12)
            {
                ctx.fillStyle = "#6b8e23ff";
            }
            else if (Producednumber == 13)
            {
                ctx.fillStyle = "#4682b4ff";
            }
            else if (Producednumber == 14)
            {
                ctx.fillStyle = "#7b68eeff";
            }
            else if (Producednumber == 15)
            {
                ctx.fillStyle = "#ff1493ff";
            }
            else if (Producednumber == 16)
            {
                ctx.fillStyle = "#ff4500ff";
            }
            else if (Producednumber == 17)
            {
                ctx.fillStyle = "#2f4f4fff";
            }
            else if (Producednumber == 18)
            {
                ctx.fillStyle = "#7b04abff";
            }
            else if (Producednumber == 19)
            {
                ctx.fillStyle = "#8f2d72ff";
            }
            else if (Producednumber == 20)
            {
                ctx.fillStyle = "#1c1cd0ff";
            }
            else if (Producednumber == 21)
            {
                ctx.fillStyle = "#d000d0ff";
            }
            else if (Producednumber == 22)
            {
                ctx.fillStyle = "#707522ff";
            }
            else if (Producednumber == 23)
            {
                ctx.fillStyle = "#e85353ff";
            }
            else if (Producednumber == 24)
            {
                ctx.fillStyle = "#1c3279ff";
            }
            else if (Producednumber == 25)
            {
                ctx.fillStyle = "#766185ff";
            }
            else if (Producednumber == 26)
            {
                ctx.fillStyle = "#225de6ff";
            }
            else if (Producednumber == 27)
            {
                ctx.fillStyle = "#4e183fff";
            }
            else if (Producednumber == 28)
            {
                ctx.fillStyle = "#14730aff";
            }
            else if (Producednumber == 29)
            {
                ctx.fillStyle = "#059097ff";
            }
            else if (Producednumber == 30)
            {
                ctx.fillStyle = "#000000ff";
            }

            if (Producednumber < 10)
            {
                Displaynumber = Producednumber;
                Unit = "";
            }
            else if (Producednumber < 20)
            {
                Displaynumber = Producednumber - 10;
                Unit = "K";
            }
            else if (Producednumber < 30)
            {
                Displaynumber = Producednumber - 20;
                Unit = "M";
            }
            ctx.fill();
            ctx.closePath();
            ctx.font = "48px serif";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText(2**Displaynumber + Unit , 30 + (Placenumber - 12) * 115, 510);
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
    if(event.key == "ArrowUp")
    {
        //console.log("up");
        if(managelist[4] != 0)
        {
            if(managelist[0] == managelist[4])
            {
                managelist[0] += 1;
                managelist[4] = 0;
                drawNumber(1,managelist[0]);
                ctx.beginPath();
                ctx.rect(100,215,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if(managelist[0] == 0)
            {
                managelist[0] = managelist[4];
                managelist[4] = 0;
                drawNumber(1,managelist[0]);
                ctx.beginPath();
                ctx.rect(100,215,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
        }
        if (managelist[5] != 0)
        {
            if(managelist[1] == managelist[5])
            {
                managelist[1] += 1;
                managelist[5] = 0;
                drawNumber(2,managelist[1]);
                ctx.beginPath();
                ctx.rect(215,215,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if(managelist[1] == 0)
            {
                managelist[1] = managelist[5];
                managelist[5] = 0;
                drawNumber(2,managelist[1]);
                ctx.beginPath();
                ctx.rect(215,215,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
        }
        if (managelist[6] != 0)
        {
            if(managelist[2] == managelist[6])
            {
                managelist[2] += 1;
                managelist[6] = 0;
                drawNumber(3,managelist[2]);
                ctx.beginPath();
                ctx.rect(330,215,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if(managelist[2] == 0)
            {
                managelist[2] = managelist[6];
                managelist[6] = 0;
                drawNumber(3,managelist[2]);
                ctx.beginPath();
                ctx.rect(330,215,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
        }
        if (managelist[7] != 0)
        {
            if (managelist[3] == managelist[7])
            {
                managelist[3] += 1;
                managelist[7] = 0;
                drawNumber(4,managelist[3]);
                ctx.beginPath();
                ctx.rect(445,215,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[3] == 0)
            {
                managelist[3] = managelist[7];
                managelist[7] = 0;
                drawNumber(4,managelist[3]);
                ctx.beginPath();
                ctx.rect(445,215,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
        }
        if (managelist[8] != 0)
        {
            if (managelist[4] == managelist[8])
            {
                managelist[4] += 1;
                managelist[8] = 0;
                drawNumber(5,managelist[4]);
                ctx.beginPath();
                ctx.rect(100,330,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[4] == 0 && managelist[0] == managelist[8])
            {
                managelist[0] += 1;
                managelist[8] = 0;
                drawNumber(1,managelist[0]);
                ctx.beginPath();
                ctx.rect(100,330,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[4] == 0 && managelist[0] != 0)
            {
                managelist[4] = managelist[8];
                managelist[8] = 0;
                drawNumber(5,managelist[4]);
                ctx.beginPath();
                ctx.rect(100,330,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[4] == 0 && managelist[0] == 0)
            {
                managelist[0] = managelist[8];
                managelist[8] = 0;
                drawNumber(1,managelist[0]);
                ctx.beginPath();
                ctx.rect(100,330,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
        }
        if (managelist[9] != 0)
        {
            if (managelist[5] == managelist[9])
            {
                managelist[5] += 1;
                managelist[9] = 0;
                drawNumber(6,managelist[5]);
                ctx.beginPath();
                ctx.rect(215,330,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[5] == 0 && managelist[1] == managelist[9])
            {
                managelist[1] += 1;
                managelist[9] = 0;
                drawNumber(2,managelist[1]);
                ctx.beginPath();
                ctx.rect(215,330,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[5] == 0 && managelist[1] != 0)
            {
                managelist[5] = managelist[9];
                managelist[9] = 0;
                drawNumber(6,managelist[5]);
                ctx.beginPath();
                ctx.rect(215,330,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[5] == 0 && managelist[1] == 0)
            {
                managelist[1] = managelist[9];
                managelist[9] = 0;
                drawNumber(2,managelist[1]);
                ctx.beginPath();
                ctx.rect(215,330,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
        }
        if (managelist[10] != 0)
        {
            if (managelist[6] == managelist[10])
            {
                managelist[6] += 1;
                managelist[10] = 0;
                drawNumber(7,managelist[6]);
                ctx.beginPath();
                ctx.rect(330,330,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[6] == 0 && managelist[2] == managelist[10])
            {
                managelist[2] += 1;
                managelist[10] = 0;
                drawNumber(3,managelist[2]);
                ctx.beginPath();
                ctx.rect(330,330,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[6] == 0 && managelist[2] != 0)
            {
                managelist[6] = managelist[10];
                managelist[10] = 0;
                drawNumber(7,managelist[6]);
                ctx.beginPath();
                ctx.rect(330,330,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[6] == 0 && managelist[2] == 0)
            {
                managelist[2] = managelist[10];
                managelist[10] = 0;
                drawNumber(3,managelist[2]);
                ctx.beginPath();
                ctx.rect(330,330,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
        }
        if (managelist[11] != 0)
        {
            if (managelist[7] == managelist[11])
            {
                managelist[7] += 1;
                managelist[11] = 0;
                drawNumber(8,managelist[7]);
                ctx.beginPath();
                ctx.rect(445,330,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[7] == 0 && managelist[3] == managelist[11])
            {
                managelist[3] += 1;
                managelist[11] = 0;
                drawNumber(4,managelist[3]);
                ctx.beginPath();
                ctx.rect(445,330,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[7] == 0 && managelist[3] != 0)
            {
                managelist[7] = managelist[11];
                managelist[11] = 0;
                drawNumber(8,managelist[7]);
                ctx.beginPath();
                ctx.rect(445,330,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[7] == 0 && managelist[3] == 0)
            {
                managelist[3] = managelist[11];
                managelist[11] = 0;
                drawNumber(4,managelist[3]);
                ctx.beginPath();
                ctx.rect(445,330,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
        }
        if (managelist[12] != 0)
        {
            if (managelist[8] == managelist[12])
            {
                managelist[8] += 1;
                managelist[12] = 0;
                drawNumber(9,managelist[8]);
                ctx.beginPath();
                ctx.rect(100,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[8] == 0 && managelist[4] == managelist[12])
            {
                managelist[4] += 1;
                managelist[12] = 0;
                drawNumber(5,managelist[4]);
                ctx.beginPath();
                ctx.rect(100,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[8] == 0 && managelist[4] == 0 && managelist[0] == managelist[12])
            {
                managelist[0] += 1;
                managelist[12] = 0;
                drawNumber(1,managelist[0]);
                ctx.beginPath();
                ctx.rect(100,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[8] == 0 && managelist[4] != 0 && managelist[0] != 0)
            {
                managelist[8] = managelist[12];
                managelist[12] = 0;
                drawNumber(9,managelist[8]);
                ctx.beginPath();
                ctx.rect(100,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[8] == 0 && managelist[4] == 0 && managelist[0] != 0)
            {
                managelist[4] = managelist[12];
                managelist[12] = 0;
                drawNumber(5,managelist[4]);
                ctx.beginPath();
                ctx.rect(100,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[8] == 0 && managelist[4] == 0 && managelist[0] == 0)
            {
                managelist[0] = managelist[12];
                managelist[12] = 0;
                drawNumber(1,managelist[0]);
                ctx.beginPath();
                ctx.rect(100,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
        }
        if (managelist[13] != 0)
        {
            if (managelist[9] == managelist[13])
            {
                managelist[9] += 1;
                managelist[13] = 0;
                drawNumber(10,managelist[9]);
                ctx.beginPath();
                ctx.rect(215,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[9] == 0 && managelist[5] == managelist[13])
            {
                managelist[5] += 1;
                managelist[13] = 0;
                drawNumber(6,managelist[5]);
                ctx.beginPath();
                ctx.rect(215,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[9] == 0 && managelist[5] == 0 && managelist[1] == managelist[13])
            {
                managelist[1] += 1;
                managelist[13] = 0;
                drawNumber(2,managelist[1]);
                ctx.beginPath();
                ctx.rect(215,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[9] == 0 && managelist[5] != 0 && managelist[1] != 0)
                {
                    managelist[9] = managelist[13];
                    managelist[13] = 0;
                    drawNumber(10,managelist[9]);
                    ctx.beginPath();
                    ctx.rect(215,445,95,95);
                    ctx.fillStyle = "#f5deb3";
                    ctx.fill();
                    ctx.closePath();
                }
            else if (managelist[9] == 0 && managelist[5] == 0 && managelist[1] != 0)
            {
                managelist[5] = managelist[13];
                managelist[13] = 0;
                drawNumber(6,managelist[5]);
                ctx.beginPath();
                ctx.rect(215,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[9] == 0 && managelist[5] == 0 && managelist[1] == 0)
            {
                managelist[1] = managelist[13];
                managelist[13] = 0;
                drawNumber(2,managelist[1]);
                ctx.beginPath();
                ctx.rect(215,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
        }
        if (managelist[14] != 0)
        {
            if (managelist[10] == managelist[14])
            {
                managelist[10] += 1;
                managelist[14] = 0;
                drawNumber(11,managelist[10]);
                ctx.beginPath();
                ctx.rect(330,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[10] == 0 && managelist[6] == managelist[14])
            {
                managelist[6] += 1;
                managelist[14] = 0;
                drawNumber(7,managelist[6]);
                ctx.beginPath();
                ctx.rect(330,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[10] == 0 && managelist[6] == 0 && managelist[2] == managelist[14])
            {
                managelist[2] += 1;
                managelist[14] = 0;
                drawNumber(3,managelist[2]);
                ctx.beginPath();
                ctx.rect(330,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[10] == 0 && managelist[6] != 0 && managelist[2] != 0)
            {
                managelist[10] = managelist[14];
                managelist[14] = 0;
                drawNumber(11,managelist[10]);
                ctx.beginPath();
                ctx.rect(330,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[10] == 0 && managelist[6] == 0 && managelist[2] != 0)
            {
                managelist[6] = managelist[14];
                managelist[14] = 0;
                drawNumber(7,managelist[6]);
                ctx.beginPath();
                ctx.rect(330,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[10] == 0 && managelist[6] == 0 && managelist[2] == 0)
            {
                managelist[2] = managelist[14];
                managelist[14] = 0;
                drawNumber(3,managelist[2]);
                ctx.beginPath();
                ctx.rect(330,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
        }
        if (managelist[15] != 0)
        {
            if (managelist[11] == managelist[15])
            {
                managelist[11] += 1;
                managelist[15] = 0;
                drawNumber(12,managelist[11]);
                ctx.beginPath();
                ctx.rect(445,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[11] == 0 && managelist[7] == managelist[15])
            {
                managelist[7] += 1;
                managelist[15] = 0;
                drawNumber(8,managelist[7]);
                ctx.beginPath();
                ctx.rect(445,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[11] == 0 && managelist[7] == 0 && managelist[3] == managelist[15])
            {
                managelist[3] += 1;
                managelist[15] = 0;
                drawNumber(4,managelist[3]);
                ctx.beginPath();
                ctx.rect(445,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[11] == 0 && managelist[7] != 0 && managelist[3] != 0)
            {
                managelist[11] = managelist[15];
                managelist[15] = 0;
                drawNumber(12,managelist[11]);
                ctx.beginPath();
                ctx.rect(445,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[11] == 0 && managelist[7] == 0 && managelist[3] != 0)
            {
                managelist[7] = managelist[15];
                managelist[15] = 0;
                drawNumber(8,managelist[7]);
                ctx.beginPath();
                ctx.rect(445,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
            else if (managelist[11] == 0 && managelist[7] == 0 && managelist[3] == 0)
            {
                managelist[3] = managelist[15];
                managelist[15] = 0;
                drawNumber(4,managelist[3]);
                ctx.beginPath();
                ctx.rect(445,445,95,95);
                ctx.fillStyle = "#f5deb3";
                ctx.fill();
                ctx.closePath();
            }
        }
    }// ここに ArrowDown / ArrowRight / ArrowLeft を追加
    else if(event.key == "ArrowDown")
    {
        // 下方向にスライド & マージ
        function compressAndMerge(arr)
        {
            const tmp = arr.filter(v=>v!==0);
            const res = [];
            for(let i=tmp.length-1;i>=0;i--)
            {
                if(i>0 && tmp[i] === tmp[i-1])
                {
                    res.unshift(tmp[i]+1);
                    i--; // skip merged
                }
                else
                {
                    res.unshift(tmp[i]);
                }
            }
            while(res.length<4) res.unshift(0);
            return res;
        }
        const newList = managelist.slice();
        for(let col=0;col<4;col++)
        {
            const colVals = [managelist[col], managelist[col+4], managelist[col+8], managelist[col+12]];
            const merged = compressAndMerge(colVals);
            for(let row=0;row<4;row++) newList[col + row*4] = merged[row];
        }
        // 盤面を更新・再描画
        managelist = newList.slice();
        // 背景 (空マス) を全部描画
        for(let i=0;i<16;i++)
        {
            const row = Math.floor(i/4);
            const col = i%4;
            const x = 100 + col*115;
            const y = 100 + row*115;
            ctx.beginPath();
            ctx.rect(x,y,95,95);
            ctx.fillStyle = "#f5deb3";
            ctx.fill();
            ctx.closePath();
        }
        // 数字を描く
        for(let i=0;i<16;i++)
        {
            if(managelist[i] !== 0) drawNumber(i+1, managelist[i]);
        }
    }
    else if(event.key == "ArrowRight")
    {
        // 右方向にスライド & マージ
        function compressAndMergeRow(arr)
        {
            const tmp = arr.filter(v=>v!==0);
            const res = [];
            for(let i=tmp.length-1;i>=0;i--)
            {
                if(i>0 && tmp[i] === tmp[i-1])
                {
                    res.unshift(tmp[i]+1);
                    i--;
                }
                else
                {
                    res.unshift(tmp[i]);
                }
            }
            while(res.length<4) res.unshift(0);
            return res;
        }
        const newList = managelist.slice();
        for(let row=0;row<4;row++)
        {
            const base = row*4;
            const rowVals = [managelist[base], managelist[base+1], managelist[base+2], managelist[base+3]];
            const merged = compressAndMergeRow(rowVals);
            for(let col=0;col<4;col++) newList[base + col] = merged[col];
        }
        managelist = newList.slice();
        for(let i=0;i<16;i++)
        {
            const row = Math.floor(i/4);
            const col = i%4;
            const x = 100 + col*115;
            const y = 100 + row*115;
            ctx.beginPath();
            ctx.rect(x,y,95,95);
            ctx.fillStyle = "#f5deb3";
            ctx.fill();
            ctx.closePath();
        }
        for(let i=0;i<16;i++)
        {
            if(managelist[i] !== 0) drawNumber(i+1, managelist[i]);
        }
    }
    else if(event.key == "ArrowLeft")
    {
        // 左方向にスライド & マージ
        function compressAndMergeRowLeft(arr)
        {
            const tmp = arr.filter(v=>v!==0);
            const res = [];
            for(let i=0;i<tmp.length;i++)
            {
                if(i+1<tmp.length && tmp[i] === tmp[i+1])
                {
                    res.push(tmp[i]+1);
                    i++;
                }
                else
                {
                    res.push(tmp[i]);
                }
            }
            while(res.length<4) res.push(0);
            return res;
        }
        const newList = managelist.slice();
        for(let row=0;row<4;row++)
        {
            const base = row*4;
            const rowVals = [managelist[base], managelist[base+1], managelist[base+2], managelist[base+3]];
            const merged = compressAndMergeRowLeft(rowVals);
            for(let col=0;col<4;col++) newList[base + col] = merged[col];
        }
        managelist = newList.slice();
        for(let i=0;i<16;i++)
        {
            const row = Math.floor(i/4);
            const col = i%4;
            const x = 100 + col*115;
            const y = 100 + row*115;
            ctx.beginPath();
            ctx.rect(x,y,95,95);
            ctx.fillStyle = "#f5deb3";
            ctx.fill();
            ctx.closePath();
        }
        for(let i=0;i<16;i++)
        {
            if(managelist[i] !== 0) drawNumber(i+1, managelist[i]);
        }
    }
// ...existing code...
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