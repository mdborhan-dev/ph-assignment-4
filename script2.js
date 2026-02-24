let interview = [];
let rejected = [];
let currentStatus = "all-section-btn";

let interviewCount = document.getElementById("interviewCount");
let rejectCount = document.getElementById("rejectedCount");
let totalCount = document.getElementById("totalCount");
const allCardContainer = document.getElementById("all-cards");
const mainContainer = document.querySelector("main");
const noJobsCard = document.getElementById("no-jobs");

const allTAb = document.getElementById("all-section-btn");
const interviewTab = document.getElementById("interview-section-btn");
const rejectedTab = document.getElementById("rejected-section-btn");
let jobCount = document.getElementById("count");
let tabHead = document.getElementById("tabHead");
let filteredInterviewSection = document.getElementById(
  "filtered-interview-section",
);
let filteredRejectedSection = document.getElementById(
  "filtered-rejected-section",
);

jobCount.innerText = allCardContainer.children.length;
tabHead.innerText = "Available Jobs";

function calculateCount() {
  totalCount.innerText = allCardContainer.children.length;
  interviewCount.innerText = interview.length;
  rejectCount.innerText = rejected.length;
}
calculateCount();

function visibilityFunction() {
  if (currentStatus === "interview-section-btn") {
    tabHead.innerText = "Interviewed Jobs";
    jobCount.innerText = interview.length;
    renderInterview();
    if (interview.length === 0) {
      filteredInterviewSection.classList.add("hidden");
      noJobsCard.classList.remove("hidden");
    } else {
      filteredInterviewSection.classList.remove("hidden");
      noJobsCard.classList.add("hidden");
    }

    filteredRejectedSection.classList.add("hidden");
    allCardContainer.classList.add("hidden");
  } else if (currentStatus === "rejected-section-btn") {
    tabHead.innerText = "Rejected Jobs";
    jobCount.innerText = rejected.length;
    renderRejected();
    if (rejected.length === 0) {
      filteredRejectedSection.classList.add("hidden");
      noJobsCard.classList.remove("hidden");
    } else {
      filteredRejectedSection.classList.remove("hidden");
      noJobsCard.classList.add("hidden");
    }

    filteredInterviewSection.classList.add("hidden");
    allCardContainer.classList.add("hidden");
  } else if (currentStatus === "all-section-btn") {
    tabHead.innerText = "Available Jobs";
    jobCount.innerText = allCardContainer.children.length;
    if (allCardContainer.children.length === 0) {
      allCardContainer.classList.add("hidden");
      noJobsCard.classList.remove("hidden");
    } else {
      allCardContainer.classList.remove("hidden");
      noJobsCard.classList.add("hidden");
    }

    filteredInterviewSection.classList.add("hidden");
    filteredRejectedSection.classList.add("hidden");
  }
}

function showOnly(id) {
  allTAb.classList.remove("btn-primary");
  interviewTab.classList.remove("btn-primary");
  rejectedTab.classList.remove("btn-primary");

  allTAb.classList.add("btn");
  interviewTab.classList.add("btn");
  rejectedTab.classList.add("btn");

  currentStatus = id;

  const selected = document.getElementById(id);
  selected.classList.add("btn-primary");

  visibilityFunction();
}

mainContainer.addEventListener("click", function (event) {
  //   console.log();
  if (event.target.classList.contains("interview-btn")) {
    const parenNode = event.target.parentNode.parentNode;
    const companyName = parenNode.querySelector("#company").innerText;
    const jobTitle = parenNode.querySelector("#job-title").innerText;
    const location = parenNode.querySelector("#location").innerText;
    const jobTime = parenNode.querySelector("#job-time").innerText;
    const jobSalary = parenNode.querySelector("#job-salary").innerText;
    const status = parenNode.querySelector("#status");
    const note = parenNode.querySelector("#note").innerText;
    status.innerText = "Interviewed";
    const cardInfo = {
      companyName,
      jobTitle,
      location,
      jobTime,
      jobSalary,
      status: "Interviewed",
      note,
    };
    // console.log(cardInfo);
    const cardExist = interview.find(
      (item) => item.companyName == cardInfo.companyName,
    );
    if (!cardExist) {
      interview.push(cardInfo);
    }
    rejected = rejected.filter(
      (item) => item.companyName != cardInfo.companyName,
    );
    calculateCount();

    visibilityFunction();
  } else if (event.target.classList.contains("rejected-btn")) {
    const parenNode = event.target.parentNode.parentNode;
    const companyName = parenNode.querySelector("#company").innerText;
    const jobTitle = parenNode.querySelector("#job-title").innerText;
    const location = parenNode.querySelector("#location").innerText;
    const jobTime = parenNode.querySelector("#job-time").innerText;
    const jobSalary = parenNode.querySelector("#job-salary").innerText;
    const status = parenNode.querySelector("#status");
    const note = parenNode.querySelector("#note").innerText;

    status.innerText = "Rejected";

    const cardInfo = {
      companyName,
      jobTitle,
      location,
      jobTime,
      jobSalary,
      status: "Rejected",
      note,
    };
    // console.log(cardInfo);
    const cardExist = rejected.find(
      (item) => item.companyName == cardInfo.companyName,
    );
    if (!cardExist) {
      rejected.push(cardInfo);
    }
    interview = interview.filter(
      (item) => item.companyName != cardInfo.companyName,
    );
    calculateCount();
    visibilityFunction();
  }
  if (event.target.classList.contains("card-delete-btn")) {
    document.querySelectorAll("main").classList.contains("card1").remove();
    calculateCount();
    visibilityFunction();
  }
});

function renderInterview() {
  filteredInterviewSection.innerHTML = ``;
  for (let each of interview) {
    console.log(each);
    let div = document.createElement("div");
    div.className = "space-y-5 p-6 bg-base-200 rounded-md";
    div.innerHTML = `<div id="job-title-container" class="flex justify-between">
            <div>
              <h3 id="company" class="text-[18px] font-semibold text-[#002C5C]">
                ${each.companyName}
              </h3>
              <p id="job-title" class="text-[#64748B]">${each.jobTitle}</p>
            </div>
            <button id="delete" class="btn">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
          <div>
            <p
              class="text-[#64748B] text-[14px] loading-[20px] max-sm:grid max-sm:grid-cols-1"
            >
              <span id="location">${each.location}</span
              ><span class="max-sm:hidden"> • </span
              ><span id="job-time">${each.jobTime}</span
              ><span class="max-sm:hidden"> • </span>
              <span id="job-salary">${each.jobSalary}</span>
            </p>
          </div>
          <div>
            <p
              id="status"
              class="text-[#002C5C] py-3 px-2 bg-[#EEF4FF] w-fit text-[14px] loading-[20px] font-medium mb-2"
            >
              ${each.status}
            </p>
            <p id="note">
              ${each.note}
            </p>
          </div>
          <div id="buttons">
            <button id="" class="btn btn-success btn-outline interview-btn">
              Interviewed
            </button>
            <button id="" class="btn btn-error btn-outline rejected-btn">
              Rejected
            </button>
          </div>`;
    filteredInterviewSection.appendChild(div);
  }
}
function renderRejected() {
  filteredRejectedSection.innerHTML = ``;
  for (let each of rejected) {
    console.log(each);
    let div = document.createElement("div");
    div.className = "space-y-5 p-6 bg-base-200 rounded-md";
    div.innerHTML = `<div id="job-title-container" class="flex justify-between">
            <div>
              <h3 id="company" class="text-[18px] font-semibold text-[#002C5C]">
                ${each.companyName}
              </h3>
              <p id="job-title" class="text-[#64748B]">${each.jobTitle}</p>
            </div>
            <button id="delete" class="btn">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
          <div>
            <p
              class="text-[#64748B] text-[14px] loading-[20px] max-sm:grid max-sm:grid-cols-1"
            >
              <span id="location">${each.location}</span
              ><span class="max-sm:hidden"> • </span
              ><span id="job-time">${each.jobTime}</span
              ><span class="max-sm:hidden"> • </span>
              <span id="job-salary">${each.jobSalary}</span>
            </p>
          </div>
          <div>
            <p
              id="status"
              class="text-[#002C5C] py-3 px-2 bg-[#EEF4FF] w-fit text-[14px] loading-[20px] font-medium mb-2"
            >
              ${each.status}
            </p>
            <p id="note">
              ${each.note}
            </p>
          </div>
          <div id="buttons">
            <button id="" class="btn btn-success btn-outline interview-btn">
              Interviewed
            </button>
            <button id="" class="btn btn-error btn-outline rejected-btn">
              Rejected
            </button>
          </div>`;
    filteredRejectedSection.appendChild(div);
  }
}
