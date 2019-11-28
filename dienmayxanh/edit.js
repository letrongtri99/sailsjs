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
        "price": "969,08đ",
        "inch": "32"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "NSV69EZM7ZV",
        "price": "779,64đ",
        "inch": "32"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "DBN31NHJ4RC",
        "price": "574,73đ",
        "inch": "32"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50'",
        "id": "XEO94YFI6VI",
        "price": "470,36đ",
        "inch": "32"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "FPC79GGF3AS",
        "price": "577,91đ",
        "inch": "32"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "UMB88FCM4OB",
        "price": "882,17đ",
        "inch": "32"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "WTO26CLU3YA",
        "price": "215,14đ",
        "inch": "32"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "SJT85LEA4ZJ",
        "price": "923,11đ",
        "inch": "32"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "QWU00NSW6QF",
        "price": "680,07đ",
        "inch": "32"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "VRO82GRL5GZ",
        "price": "174,59đ",
        "inch": "32"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "ZTX61DBY5KW",
        "price": "372,18đ",
        "inch": "75"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "XKQ34XIJ6MV",
        "price": "983,90đ",
        "inch": "75"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "ACR73TLI6LH",
        "price": "192,44đ",
        "inch": "75"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "QAK41TLB8XV",
        "price": "123,70đ",
        "inch": "75"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "ZTR39UOA0BN",
        "price": "408,17đ",
        "inch": "75"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "IHZ00BLO9RD",
        "price": "427,43đ",
        "inch": "75"
    },
    {
        "title": "SAMSUNG SMART TV 4K 50''",
        "id": "XFQ48BWY3UO",
        "price": "300,13đ",
        "inch": "75"
    },
    {
        "title": "Theodore Beard",
        "id": "JMC63USW2ZH",
        "price": "696,86đ",
        "inch": "75"
    },
    {
        "title": "Elijah Robinson",
        "id": "OOR25VXT8ZL",
        "price": "691,03đ",
        "inch": "75"
    },
    {
        "title": "Joshua Monroe",
        "id": "YVQ31KSR2UF",
        "price": "656,18đ",
        "inch": "75"
    },
    {
        "title": "Chadwick Oconnor",
        "id": "UOQ47DOG2AE",
        "price": "742,76đ",
        "inch": "75"
    },
    {
        "title": "Mufutau Mckinney",
        "id": "GBZ66FHF2JL",
        "price": "672,07đ",
        "inch": "75"
    },
    {
        "title": "Fritz Stone",
        "id": "HOK19WSP9JP",
        "price": "182,19đ",
        "inch": "75"
    },
    {
        "title": "Keefe Hale",
        "id": "CSD20TDX1KO",
        "price": "872,27đ",
        "inch": "65-74"
    },
    {
        "title": "Carson Oneil",
        "id": "OOQ89XFA4HN",
        "price": "783,58đ",
        "inch": "65-74"
    },
    {
        "title": "Neil Brown",
        "id": "TFI96KFX3YD",
        "price": "573,92đ",
        "inch": "65-74"
    },
    {
        "title": "Colton Mathews",
        "id": "PJM38TNW3XG",
        "price": "222,86đ",
        "inch": "65-74"
    },
    {
        "title": "Palmer Spears",
        "id": "GUV79XTW8AB",
        "price": "811,70đ",
        "inch": "65-74"
    },
    {
        "title": "Reese Yang",
        "id": "PWZ78IBD9OX",
        "price": "335,04đ",
        "inch": "65-74"
    },
    {
        "title": "Jackson Sawyer",
        "id": "QMQ88EMV2LR",
        "price": "230,02đ",
        "inch": "65-74"
    },
    {
        "title": "Kuame Lara",
        "id": "LSQ37TQR8FG",
        "price": "301,46đ",
        "inch": "65-74"
    },
    {
        "title": "Stuart Ware",
        "id": "KQL96HVX0NE",
        "price": "256,57đ",
        "inch": "65-74"
    },
    {
        "title": "Jason Day",
        "id": "MHN32AFZ4JI",
        "price": "753,64đ",
        "inch": "65-74"
    },
    {
        "title": "Harlan Rivas",
        "id": "XRH10DCV2GV",
        "price": "935,03đ",
        "inch": "65-74"
    },
    {
        "title": "Russell Anderson",
        "id": "YEP76TXS8GZ",
        "price": "720,37đ",
        "inch": "65-74"
    },
    {
        "title": "Kenneth Dawson",
        "id": "OWK84KRQ3NN",
        "price": "420,80đ",
        "inch": "65-74"
    },
    {
        "title": "Calvin Singleton",
        "id": "YYO97KHM9FQ",
        "price": "484,09đ",
        "inch": "55-64"
    },
    {
        "title": "Coby Rocha",
        "id": "VNB44TOQ1GW",
        "price": "788,00đ",
        "inch": "55-64"
    },
    {
        "title": "Preston Walters",
        "id": "UJE57PME7CE",
        "price": "605,98đ",
        "inch": "55-64"
    },
    {
        "title": "Caleb Dalton",
        "id": "FHD87FJO8NP",
        "price": "389,65đ",
        "inch": "55-64"
    },
    {
        "title": "Hyatt May",
        "id": "TKX48LKS1YA",
        "price": "677,22đ",
        "inch": "55-64"
    },
    {
        "title": "Dorian Harrell",
        "id": "CRQ22QLH8HC",
        "price": "975,75đ",
        "inch": "55-64"
    },
    {
        "title": "Silas Hamilton",
        "id": "ZXO10CYF3WV",
        "price": "398,27đ",
        "inch": "55-64"
    },
    {
        "title": "Dylan Melendez",
        "id": "XPN50BON3JK",
        "price": "647,72đ",
        "inch": "55-64"
    },
    {
        "title": "Barry Hampton",
        "id": "SVN22ESX8ZA",
        "price": "539,80đ",
        "inch": "55-64"
    },
    {
        "title": "Jacob Park",
        "id": "MEM14WIF4QZ",
        "price": "954,51đ",
        "inch": "55-64"
    },
    {
        "title": "Cairo Bowman",
        "id": "HFP65UML4OD",
        "price": "274,10đ",
        "inch": "55-64"
    },
    {
        "title": "Brenden Weiss",
        "id": "FUV16VVY5JC",
        "price": "646,91đ",
        "inch": "55-64"
    },
    {
        "title": "Yuli Reed",
        "id": "ZIG04RBD8RT",
        "price": "227,47đ",
        "inch": "55-64"
    },
    {
        "title": "Ira Cobb",
        "id": "ZQS35IXU9OX",
        "price": "960,54đ",
        "inch": "55-64"
    },
    {
        "title": "Peter Velasquez",
        "id": "XXR47FSK6RQ",
        "price": "363,64đ",
        "inch": "55-64"
    },
    {
        "title": "Burke Fox",
        "id": "HLW15XJF4VO",
        "price": "222,50đ",
        "inch": "55-64"
    },
    {
        "title": "Leonard Klein",
        "id": "EPL90HMV7VR",
        "price": "804,11đ",
        "inch": "55-64"
    },
    {
        "title": "Orlando Holt",
        "id": "IMG16WEW3JN",
        "price": "519,59đ",
        "inch": "55-64"
    },
    {
        "title": "Keith Nolan",
        "id": "HMR12XAB0HZ",
        "price": "158,89đ",
        "inch": "55-64"
    },
    {
        "title": "Ivor Parrish",
        "id": "OPL63JZK8GV",
        "price": "871,34đ",
        "inch": "32-43"
    },
    {
        "title": "Jonas Brady",
        "id": "FSI73XHE1BI",
        "price": "325,07đ",
        "inch": "32-43"
    },
    {
        "title": "Samson Leonard",
        "id": "RQG56OLG9NW",
        "price": "604,90đ",
        "inch": "32-43"
    },
    {
        "title": "Brady Hunt",
        "id": "CUB05YUO2BX",
        "price": "182,32đ",
        "inch": "32-43"
    },
    {
        "title": "Tucker Sampson",
        "id": "THA29LWY3LQ",
        "price": "781,08đ",
        "inch": "32-43"
    },
    {
        "title": "Walker Morgan",
        "id": "QHB00EKQ0OV",
        "price": "724,13đ",
        "inch": "32-43"
    },
    {
        "title": "Richard Clark",
        "id": "WXI33OUX8FS",
        "price": "598,24đ",
        "inch": "32-43"
    },
    {
        "title": "Abbot Mills",
        "id": "FPQ02KWY8SH",
        "price": "913,75đ",
        "inch": "55-64"
    },
    {
        "title": "Reuben Stanley",
        "id": "XSA80SHM6XR",
        "price": "436,39đ",
        "inch": "55-64"
    },
    {
        "title": "Edan Wolf",
        "id": "OMB29SII6WV",
        "price": "487,90đ",
        "inch": "55-64"
    },
    {
        "title": "Omar Coffey",
        "id": "XOR38QAJ5SY",
        "price": "598,01đ",
        "inch": "55-64"
    },
    {
        "title": "Darius Ortega",
        "id": "FJE43MAJ0LP",
        "price": "456,60đ",
        "inch": "55-64"
    },
    {
        "title": "Devin Peterson",
        "id": "EWJ06OTH4IA",
        "price": "182,48đ",
        "inch": "55-64"
    },
    {
        "title": "Salvador Diaz",
        "id": "BAF68EKO8QN",
        "price": "738,77đ",
        "inch": "55-64"
    },
    {
        "title": "Myles Gillespie",
        "id": "TNG83ZFM8KA",
        "price": "279,52đ",
        "inch": "55-64"
    },
    {
        "title": "Buckminster Estes",
        "id": "SCX93YHE0GM",
        "price": "209,05đ",
        "inch": "55-64"
    },
    {
        "title": "Emerson Hanson",
        "id": "MTE09CWM2JG",
        "price": "126,77đ",
        "inch": "55-64"
    },
    {
        "title": "Porter Donaldson",
        "id": "HCJ15LCG6FI",
        "price": "428,73đ",
        "inch": "55-64"
    },
    {
        "title": "Branden Haney",
        "id": "UMD55PSW0SE",
        "price": "646,59đ",
        "inch": "55-64"
    },
    {
        "title": "Adrian Gray",
        "id": "KWM20HKN3KO",
        "price": "798,12đ",
        "inch": "55-64"
    },
    {
        "title": "Hilel Sweeney",
        "id": "YSJ92VIX3HH",
        "price": "355,63đ",
        "inch": "55-64"
    },
    {
        "title": "Wyatt Rodgers",
        "id": "EFR85PTS0XB",
        "price": "551,50đ",
        "inch": "55-64"
    },
    {
        "title": "Caesar Dudley",
        "id": "MZJ03IKB0RZ",
        "price": "110,28đ",
        "inch": "55-64"
    },
    {
        "title": "Chaim Rios",
        "id": "QVJ12STG7KL",
        "price": "833,70đ",
        "inch": "55-64"
    },
    {
        "title": "Chancellor Price",
        "id": "UQP46GLB5LY",
        "price": "628,48đ",
        "inch": "55-64"
    },
    {
        "title": "Lucas Dawson",
        "id": "UWV96PGF5RN",
        "price": "664,30đ",
        "inch": "55-64"
    },
    {
        "title": "Thane Daniels",
        "id": "QWR71HUO1ZS",
        "price": "306,00đ",
        "inch": "55-64"
    },
    {
        "title": "Drake Alvarado",
        "id": "FNV23LXM2BL",
        "price": "652,55đ",
        "inch": "55-64"
    },
    {
        "title": "Malachi Noble",
        "id": "DLJ85AMI6YV",
        "price": "962,10đ",
        "inch": "55-64"
    },
    {
        "title": "James Greene",
        "id": "PRR52ILS2LJ",
        "price": "733,09đ",
        "inch": "55-64"
    },
    {
        "title": "Harding Logan",
        "id": "KCG88SVE9TI",
        "price": "674,45đ",
        "inch": "55-64"
    },
    {
        "title": "Marvin Bentley",
        "id": "WFF98MVA8JC",
        "price": "431,31đ",
        "inch": "55-64"
    },
    {
        "title": "Jerry Bell",
        "id": "GBB39MNG5DM",
        "price": "122,70đ",
        "inch": "55-64"
    },
    {
        "title": "Evan Wolfe",
        "id": "XHU13UTH7GA",
        "price": "676,59đ",
        "inch": "44-54"
    },
    {
        "title": "Kibo Potter",
        "id": "CRV78OFQ9ZX",
        "price": "552,69đ",
        "inch": "44-54"
    },
    {
        "title": "Malachi Lyons",
        "id": "MAC11NJH0QF",
        "price": "904,40đ",
        "inch": "44-54"
    },
    {
        "title": "Basil Harrison",
        "id": "ZPM67WDP8ZC",
        "price": "463,08đ",
        "inch": "44-54"
    },
    {
        "title": "Theodore Phillips",
        "id": "TMF28FGN5MD",
        "price": "147,36đ",
        "inch": "44-54"
    },
    {
        "title": "Clinton Oneill",
        "id": "BXU38KPY9BY",
        "price": "765,27đ",
        "inch": "44-54"
    },
    {
        "title": "Beck Booth",
        "id": "LNC92ZMN9AC",
        "price": "877,85đ",
        "inch": "44-54",
    },
    {
        "title": "Hamilton Santos",
        "id": "IJO66PGG4GN",
        "price": "901,48đ",
        "inch": "55-64"
    },
    {
        "title": "Drew Thornton",
        "id": "OVU04GFY2UN",
        "price": "956,80đ",
        "inch": "55-64"
    },
    {
        "title": "Oliver Cannon",
        "id": "XYU18BUY6ZK",
        "price": "179,36đ",
        "inch": "55-64"
    },
    {
        "title": "Jakeem Carney",
        "id": "ZBV24SIW9SS",
        "price": "467,81đ",
        "inch": "55-64"
    },
    {
        "title": "Julian Whitfield",
        "id": "WAP96QMM5JR",
        "price": "721,91đ",
        "inch": "55-64"
    }
];
const loaddata = () => {
    for (var i = 0; i < data.length; i++) {
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
            <p class="incher">${data[i].inch}</p>
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
    }
}
loaddata();

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


window.onscroll = function() { myFunction() };

// Get the navbar
var order = document.getElementById("order");

// Get the offset position of the navbar
var fixed = order.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= fixed) {
        order.classList.add("fix")
    } else {
        order.classList.remove("fix");
    }
}
var first = 0;
const filter = document.getElementsByClassName("boxfilter");
for (var i = 0; i < filter.length; i++) {
    filter[i].addEventListener('click', (e) => {
        first++;
        if (e.target.checked) {
            if (first == 1) {
                document.getElementById("artdetail").innerHTML = " ";
            }
            for (var m = 0; m < data.length; m++) {
                if (data[m].inch == e.target.value) {
                    document.getElementById("artdetail").insertAdjacentHTML('beforeend', `
    <div class="card">
    <div class="lab">
        <label class="sel">#1 Bán Chạy</label>
        <label class="pay">Trả góp 0%</label>
    </div>
    <img class="pict" src="images/tv.png" alt="Avatar" style="width:100%">
    <div class="content">
        <img src="images/online.png">
        <h4 style="margin-bottom: 4px;">${data[m].title}</h4>
        <p style="margin-bottom: 4px;">${data[m].id}</p>
        <p class="incher">${data[m].inch}</p>
        <h4 style="margin-bottom: 4px;" class="price">${data[m].price}</h4>
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
                }
            }
        } else {
            var checkboxother = 0;
            document.getElementById("artdetail").innerHTML = " ";
            for (var i = 0; i < filter.length; i++) {
                if (filter[i].checked) {
                    for (var m = 0; m < data.length; m++) {
                        if (data[m].inch == filter[i].value) {
                            document.getElementById("artdetail").insertAdjacentHTML('beforeend', `
            <div class="card">
            <div class="lab">
                <label class="sel">#1 Bán Chạy</label>
                <label class="pay">Trả góp 0%</label>
            </div>
            <img class="pict" src="images/tv.png" alt="Avatar" style="width:100%">
            <div class="content">
                <img src="images/online.png">
                <h4 style="margin-bottom: 4px;">${data[m].title}</h4>
                <p style="margin-bottom: 4px;">${data[m].id}</p>
                <p class="incher">${data[m].inch}</p>
                <h4 style="margin-bottom: 4px;" class="price">${data[m].price}</h4>
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
                        }
                    }
                } else {
                    checkboxother++;
                }
            }
            if (checkboxother == 6) {
                first = 0;
                loaddata();
            }
        }
    })
}
for (var x = 0; x < 4; x++) {
    document.getElementById("adsSlides1").insertAdjacentHTML('beforeend', `
    <div class="card">
    <div class="lab">
        <label class="sel">#1 Bán Chạy</label>
        <label class="pay">Trả góp 0%</label>
    </div>
    <img class="pict" src="images/tv.png" alt="Avatar" style="width:100%">
    <div class="content">
        <img src="images/online.png">
        <h4 style="margin-bottom: 4px;">${data[x].title}</h4>
        <p style="margin-bottom: 4px;">${data[x].id}</p>
        <p class="incher">${data[x].inch}</p>
        <h4 style="margin-bottom: 4px;" class="price">${data[x].price}</h4>
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
}
for (var t = 4; t < 8; t++) {
    document.getElementById("adsSlides2").insertAdjacentHTML('beforeend', `
    <div class="card">
    <div class="lab">
        <label class="sel">#1 Bán Chạy</label>
        <label class="pay">Trả góp 0%</label>
    </div>
    <img class="pict" src="images/tv.png" alt="Avatar" style="width:100%">
    <div class="content">
        <img src="images/online.png">
        <h4 style="margin-bottom: 4px;">${data[t].title}</h4>
        <p style="margin-bottom: 4px;">${data[t].id}</p>
        <p class="incher">${data[t].inch}</p>
        <h4 style="margin-bottom: 4px;" class="price">${data[t].price}</h4>
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
}
const ads = document.getElementsByClassName("myAds");
var slideAdsIndex = 0;

const moveadsright = () => {

    slideAdsIndex++;
    if (slideAdsIndex < ads.length) {
        for (var i = 0; i < ads.length; i++) {
            ads[i].style.transform = "translate3d(" + (925 * i - 925 * slideAdsIndex) + "px,0,0)";
        }
    } else {
        slideAdsIndex = 0;
        for (var i = 0; i < ads.length; i++) {
            ads[i].style.transform = "translate3d(" + (925 * i) + "px,0,0)";
        }
    }

}
const moveadsleft = () => {
    slideAdsIndex--;
    if (slideAdsIndex >= 0) {

        for (var i = 0; i < ads.length; i++) {
            ads[i].style.transform = "translate3d(" + (925 * i - 925 * slideAdsIndex) + "px,0,0)";
        }
    } else {
        slideAdsIndex = ads.length - 1;
        for (var i = 0; i < ads.length; i++) {
            ads[i].style.transform = "translate3d(" + (-925 * (ads.length - 1 - i)) + "px,0,0)";
        }
    }
}