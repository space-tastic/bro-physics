let mobileMenu = document.querySelector('#mobile-menu')
let teachersData = document.querySelector('#teachers-data')
let allCourses = document.querySelector('#allCourses')
let allMemes = document.querySelector('#allMemes')
let teamDiv = document.querySelector('#team-list')
mobileMenu.style.display='none'

let memeArray = [
  "https://cdn.discordapp.com/attachments/992045921544175666/992046187333025872/IMG_20220622_100825_649.jpg","https://cdn.discordapp.com/attachments/992045921544175666/992046187555328090/IMG_20220605_222109_040.jpg",
  "https://cdn.discordapp.com/attachments/992045921544175666/992046187815391292/IMG_20220604_230408_394.jpg","https://cdn.discordapp.com/attachments/992045921544175666/992046188033474570/IMG_20220414_161927_147.jpg",
  "https://cdn.discordapp.com/attachments/992045921544175666/992047771546812528/IMG_20220630_181256_125.jpg","https://cdn.discordapp.com/attachments/992045921544175666/992047771936895056/IMG_20220630_181213_944.jpg",
  "https://cdn.discordapp.com/attachments/992045921544175666/992047772297596938/IMG_20220630_181201_212.jpg","https://cdn.discordapp.com/attachments/992045921544175666/992047772679282718/IMG_20220630_181155_871.jpg",
  "https://cdn.discordapp.com/attachments/992045921544175666/992047772947722321/IMG_20220630_181150_821.jpg","https://cdn.discordapp.com/attachments/992045921544175666/992047773207756860/IMG_20220630_181121_326.jpg",
  "https://cdn.discordapp.com/attachments/992045921544175666/992047773417480302/IMG_20220630_181115_562.jpg"
]


const openMenu = () =>{
    if(mobileMenu.style.display=='none'){mobileMenu.style.display='block'}
    else{mobileMenu.style.display='none'}
}

const teacherInfo = () =>{ window.open('https://example.com') }

let teacherArray = [
    {name:'Mr. A', expert:'Kinematics and Dynamics'}, {name:'Mr. B', expert:'Rotational Mechanics'}, {name:'Mr. C', expert:'Heat & Thermodyamics'},
    {name:'Mr. D', expert:'Wave & oscillations and Ray optics'}, {name:'Mr. E', expert:'Nuclear physics and radioactivity'},
    {name:'Mr. F', expert:'Quantum mechanics'}, {name:'Mr. G', expert:'Special & General Relativity'},
    {name:'Mr. H', expert:'Quantum electrodyanmics and chromodynamics'}
]

let courseArray = [
  {
    type:'Kinematics',
    lectures:['Motion in 1D #1', 'Motion in 1D #2', 'Motion in 2D #1', 'Motion in 2D #2', 'Motion in 3D #1', 'Motion in 3D #2', 'Summing up all!']
  },{
    type:'Dynamics',
    lectures:['Newton\'s laws of motion ', 'Conservation of linear momentum', 'Conservation of angular momentum', 'Elastic collisions','Inelastic collisions', 'Summing up all!']
  },{
    type:'Work and Energy',
    lectures:['What is Work?','What is Energy?','Types of energy','Conservation of energy','Conversion into heat','Power','Mechanical equivalence of heat','Summing up all!']
  },{
    type:'Thermodyamics',
    lectures:['Heat','Entropy','Zeroth law of thermodynamics','First law of thermodynamics','Second law of thermodynamics','Entropy and the flow of time','Maxwell\'s demon thought experiment']
  },{
    type:'Modern Physics',
    lectures:['Planck\'s quantum theory','Dual Nature of matter and radiation', 'Quantum mechanical model of atom','Special relativity','Spacetime diagrams','Relativistic effects','General relativity','Radioactivity']
  }
]

let teamList = [
  {name:'Mr. X', post:'Founder & CEO'}, {name:'Mr. P', post:'something'},
  {name:'Mr. Q', post:'something'}, {name:'Mr. Q', post:'something'},
  {name:'Mr. R', post:'something'}, {name:'Mr. S', post:'something'},
  {name:'Mr. T', post:'something'}, {name:'Mr. U', post:'something'},
  {name:'Mr. V', post:'something'}
]

// ######################## for teachers ##################################
teacherArray.forEach(ele=>{
  teachersData.insertAdjacentHTML('beforeend',`<div class="lg:w-1/4 md:w-1/2 p-4 w-full teacherCard" data-aos="zoom-in" data-aos-duration="1500">
  <a class="block relative h-48 rounded overflow-hidden" onclick="teacherInfo()" title="Click to open teacher's info">
    <img alt="oops!" class="object-cover object-center w-full h-full block" src="media/teacher-avatar.png">
  </a>
  <div class="mt-4">
    <h2 class="text-gray-900 title-font text-lg font-medium">${ele.name}</h2>
    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${ele.expert}</h3>
    <p class="mt-1">PhD Graduate</p>
  </div>
</div>`)
})

// #################################### for courses ##############################
courseArray.forEach(ele=>{
  allCourses.insertAdjacentHTML('beforeend',`<details>
  <summary><h2 class="font-medium title-font mt-4 text-gray-900 text-lg py-5 courseTitle" style="font-size:30px;" data-aos="zoom-in" data-aos-duration="1500"> &nbsp; ${ele.type} 👇</h2></summary>
  <div class="flex flex-wrap -m-4 courseType" data-aos="zoom-in" data-aos-duration="1500"></div>
  </details>`)
})

document.querySelectorAll('.courseType').forEach((div,i)=>{
  courseArray[i].lectures.forEach(video=>{
    div.insertAdjacentHTML('beforeend',`<div class="p-4 md:w-1/3" data-aos="zoom-in" data-aos-duration="1500">
    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden video">
      <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="media/lecture-img.png" alt="oops!">
      <div class="p-6">
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${video}</h1>
        <div class="flex items-center flex-wrap ">
          <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href="https://example.com" target="_blank">Watch</a> <br>
          <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            1.2K views
          </span>
          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
            1 year ago
          </span>
        </div>
      </div>
    </div>
  </div>`)
  })
})

// ######################################## for memes ###########################################
memeArray.forEach(meme=>{
  allMemes.insertAdjacentHTML('beforeend',`<div class="p-4 md:w-1/3" data-aos="zoom-in" data-aos-duration="1500">
  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden video">
    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="${meme}" alt="oops!">
    <div class="p-6">
      <div class="flex items-center flex-wrap ">
        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href="${meme}" target="_blank">View original</a> <br>
      </div>
    </div>
  </div>
</div>`)
})

// ##################################### for team list ##########################################
teamList.forEach(member=>{
  teamDiv.insertAdjacentHTML('beforeend',`<div class="p-2 lg:w-1/3 md:w-1/2 w-full teamCard" data-aos="zoom-in" data-aos-duration="1500">
  <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg ">
    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://media.istockphoto.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618801?k=20&m=1227618801&s=170667a&w=0&h=Pc_xaak-2cG8pSpHVVbTN3je0BYsxksghZZwzrEuYy4=">
    <div class="flex-grow">
      <h2 class="text-gray-900 title-font font-medium">${member.name}</h2>
      <p class="text-gray-500">${member.post}</p>
    </div>
  </div>
</div>`)
})
