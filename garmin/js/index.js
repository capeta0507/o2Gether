// 跑步
const runningList = [
  {
    "link": "https://www.o2gether.com.tw/product/detail/511",
    "img": "img/run01.jpg",
    "name": "NIKE REVOLUTION 5 跑步鞋",
    "price": "$1,460"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/865",
    "img": "img/run02.jpg",
    "name": "NIKE DOWNSHIFTER 10 慢跑鞋",
    "price": "$1,668"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/863",
    "img": "img/run03.jpg",
    "name": "NIKE ZOOM WINFLO 7 慢跑鞋",
    "price": "$2,086"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/837",
    "img": "img/run04.jpg",
    "name": "ADIDAS ULTRABOOST 20 City Pack Hype 慢跑鞋",
    "price": "$4,164"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/58",
    "img": "img/run05.jpg",
    "name": "ADIDAS ULTRABOOST 20 City Pack Hype 跑步鞋",
    "price": "$4,164"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/511",
    "img": "img/run06.jpg",
    "name": "ADIDAS ULTRA BOOST  跑步鞋",
    "price": "$4,164"
  }
]
// 籃球
const basketballList = [
  {
    "link": "https://www.o2gether.com.tw/product/detail/875",
    "img": "img/basketball01.jpg",
    "name": "NIKE KYRIE 6 EP 籃球鞋",
    "price": "$2,920"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/874",
    "img": "img/basketball02.jpg",
    "name": "NIKE KYRIE 6 EP 籃球鞋",
    "price": "$2,920"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/908",
    "img": "img/basketball03.jpg",
    "name": "PUMA Suede Classic+ 籃球鞋",
    "price": "$1,794"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/907",
    "img": "img/basketball04.jpg",
    "name": "PUMA Basket Classic LFS 籃球鞋",
    "price": "$1,863"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/906",
    "img": "img/basketball05.jpg",
    "name": "PUMA Basket Classic LFS 籃球鞋",
    "price": "$1,863"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/852",
    "img": "img/basketball06.jpg",
    "name": "Nike JUMPMAN NOSHOW 3PPK 短筒襪",
    "price": "$243"
  }
]
// 戶外
const outdoorList = [
  {
    "link": "https://www.o2gether.com.tw/product/detail/755",
    "img": "img/outdoor01.jpg",
    "name": "The North Face FLASHDRY吸濕排汗短袖T恤",
    "price": "$818"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/723",
    "img": "img/outdoor02.jpg",
    "name": "The North Face FlashDry 吸濕排汗短袖上衣",
    "price": "$1,330"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/775",
    "img": "img/outdoor03.jpg",
    "name": "The North Face 速乾透氣運動休閒長袖T恤 深灰",
    "price": "$1,602"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/785",
    "img": "img/outdoor04.jpg",
    "name": "The North Face 防水透氣防風外套",
    "price": "$2,550"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/783",
    "img": "img/outdoor05.jpg",
    "name": "The North Face 吸濕排汗Logo長袖 帽T",
    "price": "$1,138"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/754",
    "img": "img/outdoor06.jpg",
    "name": "The North Face 防水透氣防風外套",
    "price": "$6,634"
  }
]
// 健身
const fitnessList = [
  {
    "link": "https://www.o2gether.com.tw/product/detail/851",
    "img": "img/fitness01.jpg",
    "name": "Nike NK EVERYDAY CUSH CREW 3PR 中統襪",
    "price": "$243"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/846",
    "img": "img/fitness02.jpg",
    "name": "Nike NK EVERYDAY LTWT CREW 3PR 中統襪",
    "price": "$243"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/845",
    "img": "img/fitness03.jpg",
    "name": "Nike NK EVERYDAY LTWT ANKLE 3PR 踝襪",
    "price": "$243"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/844",
    "img": "img/fitness04.jpg",
    "name": "Nike NK EVERYDAY LTWT ANKLE 3PR 踝襪",
    "price": "$243"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/842",
    "img": "img/fitness05.jpg",
    "name": "NIKE U NK EVERYDAY LTWT NS 3PR 隱形襪",
    "price": "$243"
  },
  {
    "link": "https://www.o2gether.com.tw/product/detail/841",
    "img": "img/fitness06.jpg",
    "name": "NIKE U NK EVERYDAY LTWT NS 3PR 隱形襪",
    "price": "$243"
  }
]

let runningCard = ''
let basketballCard = ''
let outdoorCard = ''
let fitnessCard = ''
runningList.map(data => {
  // console.log('data', data)
  runningCard += `
    <div class="card">
      <a href="${data.link}" target="_blank" class="card-link">
          <div class="card-img"><img src="${data.img}" alt="" class="img-rwd"></div>
          <div class="card-content">
              <h4 class="card-content-h4">${data.name}</h4>
              <div class="card-content-style">
                  <span class="middle">折後價：</span>
                  <span class="card_price">${data.price}</span>
              </div>
              <div class="card-content-bottom">
                  <div class="bg-o">我要購買</div>
              </div>
          </div>
      </a>
    </div>
  `
})

document.getElementById('myRunning').innerHTML = runningCard

basketballList.map(data => {
  // console.log('data', data)
  basketballCard += `
    <div class="card">
      <a href="${data.link}" target="_blank" class="card-link">
        <div class="card-img"><img src="${data.img}" alt="" class="img-rwd"></div>
        <div class="card-content">
            <h4 class="card-content-h4">${data.name}</h4>
            <div class="card-content-style">
                <span class="middle">折後價：</span>
                <span class="card_price">${data.price}</span>
            </div>
            <div class="card-content-bottom">
                <div class="bg-o">我要購買</div>
            </div>
        </div>
      </a>
    </div>
  `;
})
document.getElementById('myBasketball').innerHTML = basketballCard

outdoorList.map(data => {
  // console.log('data', data)
  outdoorCard += `
    <div class="card">
      <a href="${data.link}" target="_blank" class="card-link">
        <div class="card-img"><img src="${data.img}" alt="" class="img-rwd"></div>
        <div class="card-content">
            <h4 class="card-content-h4">${data.name}</h4>
            <div class="card-content-style">
                <span class="middle">折後價：</span>
                <span class="card_price">${data.price}</span>
            </div>
            <div class="card-content-bottom">
                <div class="bg-o">我要購買</div>
            </div>
        </div>
      </a>
    </div>
  `;
})
document.getElementById('myOutdoor').innerHTML = outdoorCard

fitnessList.map(data => {
  // console.log('data', data)
  fitnessCard += `
    <div class="card">
      <a href="${data.link}" target="_blank" class="card-link">
        <div class="card-img"><img src="${data.img}" alt="" class="img-rwd"></div>
        <div class="card-content">
            <h4 class="card-content-h4">${data.name}</h4>
            <div class="card-content-style">
                <span class="middle">折後價：</span>
                <span class="card_price">${data.price}</span>
            </div>
            <div class="card-content-bottom">
                <div class="bg-o">我要購買</div>
            </div>
        </div>
      </a>
    </div>
  `;
})
document.getElementById('myFitness').innerHTML = fitnessCard