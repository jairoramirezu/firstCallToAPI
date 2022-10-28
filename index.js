const getInfoBtn = document.querySelector(".getInfo");
const numApp = document.querySelector(".numApp");
const numDis = document.querySelector(".numDis");

const getInfo = async () => {
  try{
    let result = await axios("daa.txt");
    result = result.data;
    numApp.innerHTML = result.approved;
    numDis.innerHTML = result.disapproved;
  }
  catch(e) {
    numApp.innerHTML = "API Failed";
    numDis.innerHTML = "API Failed";
  }
}

getInfoBtn.addEventListener("click", getInfo);