const slides = document.getElementsByClassName("mySlides");
var slideIndex = 0;

const movenext = () => {

    slideIndex++;
    if (slideIndex < slides.length) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.transform = "translate3d(" + (1450 * i - 1450 * slideIndex) + "px,0,0)";
        }
    } else {
        slideIndex = 0;
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.transform = "translate3d(" + (1450 * i) + "px,0,0)";
        }
    }

}
const moveleft = () => {
    slideIndex--;
    if (slideIndex >= 0) {

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.transform = "translate3d(" + (1450 * i - 1450 * slideIndex) + "px,0,0)";
        }
    } else {
        slideIndex = slides.length - 1;
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.transform = "translate3d(" + (-1450 * (slides.length - 1 - i)) + "px,0,0)";
        }
    }


}

data = [{
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "HGY61FIS6NU",
        "price": "969,08đ"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "NSV69EZM7ZV",
        "price": "779,64đ"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "DBN31NHJ4RC",
        "price": "574,73đ"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50'",
        "id": "XEO94YFI6VI",
        "price": "470,36đ"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "FPC79GGF3AS",
        "price": "577,91đ"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "UMB88FCM4OB",
        "price": "882,17đ"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "WTO26CLU3YA",
        "price": "215,14đ"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "SJT85LEA4ZJ",
        "price": "923,11đ"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "QWU00NSW6QF",
        "price": "680,07đ"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "VRO82GRL5GZ",
        "price": "174,59đ"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "ZTX61DBY5KW",
        "price": "372,18đ"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "XKQ34XIJ6MV",
        "price": "983,90đ"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "ACR73TLI6LH",
        "price": "192,44đ"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "QAK41TLB8XV",
        "price": "123,70đ"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "ZTR39UOA0BN",
        "price": "408,17đ"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "IHZ00BLO9RD",
        "price": "427,43đ"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "XFQ48BWY3UO",
        "price": "300,13đ"
    },
    {
        "title": "Theodore Beard",
        "id": "JMC63USW2ZH",
        "price": "696,86đ"
    },
    {
        "title": "Elijah Robinson",
        "id": "OOR25VXT8ZL",
        "price": "691,03đ"
    },
    {
        "title": "Joshua Monroe",
        "id": "YVQ31KSR2UF",
        "price": "656,18đ"
    },
    {
        "title": "Chadwick Oconnor",
        "id": "UOQ47DOG2AE",
        "price": "742,76đ"
    },
    {
        "title": "Mufutau Mckinney",
        "id": "GBZ66FHF2JL",
        "price": "672,07đ"
    },
    {
        "title": "Fritz Stone",
        "id": "HOK19WSP9JP",
        "price": "182,19đ"
    },
    {
        "title": "Keefe Hale",
        "id": "CSD20TDX1KO",
        "price": "872,27đ"
    },
    {
        "title": "Carson Oneil",
        "id": "OOQ89XFA4HN",
        "price": "783,58đ"
    },
    {
        "title": "Neil Brown",
        "id": "TFI96KFX3YD",
        "price": "573,92đ"
    },
    {
        "title": "Colton Mathews",
        "id": "PJM38TNW3XG",
        "price": "222,86đ"
    },
    {
        "title": "Palmer Spears",
        "id": "GUV79XTW8AB",
        "price": "811,70đ"
    },
    {
        "title": "Reese Yang",
        "id": "PWZ78IBD9OX",
        "price": "335,04đ"
    },
    {
        "title": "Jackson Sawyer",
        "id": "QMQ88EMV2LR",
        "price": "230,02đ"
    },
    {
        "title": "Kuame Lara",
        "id": "LSQ37TQR8FG",
        "price": "301,46đ"
    },
    {
        "title": "Stuart Ware",
        "id": "KQL96HVX0NE",
        "price": "256,57đ"
    },
    {
        "title": "Jason Day",
        "id": "MHN32AFZ4JI",
        "price": "753,64đ"
    },
    {
        "title": "Harlan Rivas",
        "id": "XRH10DCV2GV",
        "price": "935,03đ"
    },
    {
        "title": "Russell Anderson",
        "id": "YEP76TXS8GZ",
        "price": "720,37đ"
    },
    {
        "title": "Kenneth Dawson",
        "id": "OWK84KRQ3NN",
        "price": "420,80đ"
    },
    {
        "title": "Calvin Singleton",
        "id": "YYO97KHM9FQ",
        "price": "484,09đ"
    },
    {
        "title": "Coby Rocha",
        "id": "VNB44TOQ1GW",
        "price": "788,00đ"
    },
    {
        "title": "Preston Walters",
        "id": "UJE57PME7CE",
        "price": "605,98đ"
    },
    {
        "title": "Caleb Dalton",
        "id": "FHD87FJO8NP",
        "price": "389,65đ"
    },
    {
        "title": "Hyatt May",
        "id": "TKX48LKS1YA",
        "price": "677,22đ"
    },
    {
        "title": "Dorian Harrell",
        "id": "CRQ22QLH8HC",
        "price": "975,75đ"
    },
    {
        "title": "Silas Hamilton",
        "id": "ZXO10CYF3WV",
        "price": "398,27đ"
    },
    {
        "title": "Dylan Melendez",
        "id": "XPN50BON3JK",
        "price": "647,72đ"
    },
    {
        "title": "Barry Hampton",
        "id": "SVN22ESX8ZA",
        "price": "539,80đ"
    },
    {
        "title": "Jacob Park",
        "id": "MEM14WIF4QZ",
        "price": "954,51đ"
    },
    {
        "title": "Cairo Bowman",
        "id": "HFP65UML4OD",
        "price": "274,10đ"
    },
    {
        "title": "Brenden Weiss",
        "id": "FUV16VVY5JC",
        "price": "646,91đ"
    },
    {
        "title": "Yuli Reed",
        "id": "ZIG04RBD8RT",
        "price": "227,47đ"
    },
    {
        "title": "Ira Cobb",
        "id": "ZQS35IXU9OX",
        "price": "960,54đ"
    },
    {
        "title": "Peter Velasquez",
        "id": "XXR47FSK6RQ",
        "price": "363,64đ"
    },
    {
        "title": "Burke Fox",
        "id": "HLW15XJF4VO",
        "price": "222,50đ"
    },
    {
        "title": "Leonard Klein",
        "id": "EPL90HMV7VR",
        "price": "804,11đ"
    },
    {
        "title": "Orlando Holt",
        "id": "IMG16WEW3JN",
        "price": "519,59đ"
    },
    {
        "title": "Keith Nolan",
        "id": "HMR12XAB0HZ",
        "price": "158,89đ"
    },
    {
        "title": "Ivor Parrish",
        "id": "OPL63JZK8GV",
        "price": "871,34đ"
    },
    {
        "title": "Jonas Brady",
        "id": "FSI73XHE1BI",
        "price": "325,07đ"
    },
    {
        "title": "Samson Leonard",
        "id": "RQG56OLG9NW",
        "price": "604,90đ"
    },
    {
        "title": "Brady Hunt",
        "id": "CUB05YUO2BX",
        "price": "182,32đ"
    },
    {
        "title": "Tucker Sampson",
        "id": "THA29LWY3LQ",
        "price": "781,08đ"
    },
    {
        "title": "Walker Morgan",
        "id": "QHB00EKQ0OV",
        "price": "724,13đ"
    },
    {
        "title": "Richard Clark",
        "id": "WXI33OUX8FS",
        "price": "598,24đ"
    },
    {
        "title": "Abbot Mills",
        "id": "FPQ02KWY8SH",
        "price": "913,75đ"
    },
    {
        "title": "Reuben Stanley",
        "id": "XSA80SHM6XR",
        "price": "436,39đ"
    },
    {
        "title": "Edan Wolf",
        "id": "OMB29SII6WV",
        "price": "487,90đ"
    },
    {
        "title": "Omar Coffey",
        "id": "XOR38QAJ5SY",
        "price": "598,01đ"
    },
    {
        "title": "Darius Ortega",
        "id": "FJE43MAJ0LP",
        "price": "456,60đ"
    },
    {
        "title": "Devin Peterson",
        "id": "EWJ06OTH4IA",
        "price": "182,48đ"
    },
    {
        "title": "Salvador Diaz",
        "id": "BAF68EKO8QN",
        "price": "738,77đ"
    },
    {
        "title": "Myles Gillespie",
        "id": "TNG83ZFM8KA",
        "price": "279,52đ"
    },
    {
        "title": "Buckminster Estes",
        "id": "SCX93YHE0GM",
        "price": "209,05đ"
    },
    {
        "title": "Emerson Hanson",
        "id": "MTE09CWM2JG",
        "price": "126,77đ"
    },
    {
        "title": "Porter Donaldson",
        "id": "HCJ15LCG6FI",
        "price": "428,73đ"
    },
    {
        "title": "Branden Haney",
        "id": "UMD55PSW0SE",
        "price": "646,59đ"
    },
    {
        "title": "Adrian Gray",
        "id": "KWM20HKN3KO",
        "price": "798,12đ"
    },
    {
        "title": "Hilel Sweeney",
        "id": "YSJ92VIX3HH",
        "price": "355,63đ"
    },
    {
        "title": "Wyatt Rodgers",
        "id": "EFR85PTS0XB",
        "price": "551,50đ"
    },
    {
        "title": "Caesar Dudley",
        "id": "MZJ03IKB0RZ",
        "price": "110,28đ"
    },
    {
        "title": "Chaim Rios",
        "id": "QVJ12STG7KL",
        "price": "833,70đ"
    },
    {
        "title": "Chancellor Price",
        "id": "UQP46GLB5LY",
        "price": "628,48đ"
    },
    {
        "title": "Lucas Dawson",
        "id": "UWV96PGF5RN",
        "price": "664,30đ"
    },
    {
        "title": "Thane Daniels",
        "id": "QWR71HUO1ZS",
        "price": "306,00đ"
    },
    {
        "title": "Drake Alvarado",
        "id": "FNV23LXM2BL",
        "price": "652,55đ"
    },
    {
        "title": "Malachi Noble",
        "id": "DLJ85AMI6YV",
        "price": "962,10đ"
    },
    {
        "title": "James Greene",
        "id": "PRR52ILS2LJ",
        "price": "733,09đ"
    },
    {
        "title": "Harding Logan",
        "id": "KCG88SVE9TI",
        "price": "674,45đ"
    },
    {
        "title": "Marvin Bentley",
        "id": "WFF98MVA8JC",
        "price": "431,31đ"
    },
    {
        "title": "Jerry Bell",
        "id": "GBB39MNG5DM",
        "price": "122,70đ"
    },
    {
        "title": "Evan Wolfe",
        "id": "XHU13UTH7GA",
        "price": "676,59đ"
    },
    {
        "title": "Kibo Potter",
        "id": "CRV78OFQ9ZX",
        "price": "552,69đ"
    },
    {
        "title": "Malachi Lyons",
        "id": "MAC11NJH0QF",
        "price": "904,40đ"
    },
    {
        "title": "Basil Harrison",
        "id": "ZPM67WDP8ZC",
        "price": "463,08đ"
    },
    {
        "title": "Theodore Phillips",
        "id": "TMF28FGN5MD",
        "price": "147,36đ"
    },
    {
        "title": "Clinton Oneill",
        "id": "BXU38KPY9BY",
        "price": "765,27đ"
    },
    {
        "title": "Beck Booth",
        "id": "LNC92ZMN9AC",
        "price": "877,85đ"
    },
    {
        "title": "Hamilton Santos",
        "id": "IJO66PGG4GN",
        "price": "901,48đ"
    },
    {
        "title": "Drew Thornton",
        "id": "OVU04GFY2UN",
        "price": "956,80đ"
    },
    {
        "title": "Oliver Cannon",
        "id": "XYU18BUY6ZK",
        "price": "179,36đ"
    },
    {
        "title": "Jakeem Carney",
        "id": "ZBV24SIW9SS",
        "price": "467,81đ"
    },
    {
        "title": "Julian Whitfield",
        "id": "WAP96QMM5JR",
        "price": "721,91đ"
    }
];
for (var i = 0; i < 12; i++) {
    document.getElementById("artdetail").insertAdjacentHTML('beforeend', `
    <div class="card">
    <div class="lab">
        <label class="sel">#1 Bán Chạy</label>
        <label class="pay">Trả góp 0%</label>
    </div>
    <img class="pict" src="images/tv.png" alt="Avatar" style="width:100%">
    <div class="content">
        <img src="images/online.png">
        <h4 style="margin-bottom: 4px;">${data[i].title}</h4>
        <p style="margin-bottom: 4px;">${data[i].id}</p>
        <h4 style="margin-bottom: 4px;" class="price">${data[i].price}</h4>
        <div style="margin-bottom:4px" class="sub">
            <div>
                <h5 class="deduct">13.500.000đ</h5>
            </div>
            <div>
                <span class="per">(-12%)</span>
            </div>
        </div>
        <p style="margin-bottom: 4px;">
            Quà<span class="gift"> 300.000đ</span>
        </p>
        <div class="comment">
            <span class="rate">4.3/5</span><i id="star" class="fas fa-star"></i> 300 đánh giá
        </div>

    </div>
</div>
    `);
    const btnfoot = document.getElementById("btninfo");

    btnfoot.onclick = () => {
        document.getElementsByClassName("footer")[0].style.height = "300px";
        document.getElementById("infoter").insertAdjacentHTML('beforeend', `
        <a href="" style="margin-top: 10px;" class="policy">Nội Quy Cửa Hàng</a>
        <a href="" style="margin-top: 10px;" class="policy">In Hóa Đơn Điện Tử</a>
        <a href="" style="margin-top: 10px;" class="policy">Bán Hàng Doanh Nghiệp</a>
        `);
        btnfoot.parentNode.removeChild(btnfoot);
    }
    const btnsup = document.getElementById("btnsup");
    btnsup.onclick = () => {
        document.getElementsByClassName("footer")[0].style.height = "300px";
        document.getElementById("infosup").insertAdjacentHTML('beforeend', `
        <a href="" style="margin-top: 10px;" class="policy">Tìm Trung Tâm Bảo Hành</a>
        <a href="" style="margin-top: 10px;" class="policy">Chất Lượng Phục Vụ</a>
        <a href="" style="margin-top: 10px;" class="policy">Hướng Dẫn Trao Thưởng</a>
        `);
        btnsup.parentNode.removeChild(btnsup);
    }

}