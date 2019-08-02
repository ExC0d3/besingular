const categories = ["Robotics", "Programming", "Electronics"];

const data = [
  {
    heading: "Mechatronics Series: Alpha",
    info: "Creators, Innovators",
    time: "10 Lectures, 20 Hours",
    category: categories[0],
    img: "assets/img/courses/Mech1.jpg",
    url: 'MechAlpha.html'
  },
  {
    heading: "Mechatronics Series: Beta",
    info: "Creators, Innovators",
    time: "10 Lectures, 20 Hours",
    category: categories[0],
    img: "assets/img/courses/Mech2.jpg",
    url: 'MechBeta.html'
  },
  {
    heading: "Mechatronics Series: Gamma",
    info: "Creators, Innovators",
    time: "10 Lectures, 20 Hours",
    category: categories[0],
    img: "assets/img/courses/Mech3.jpg",
    url: 'MechGamma.html'
  },
  {
    heading: "Embedded AR Series: Alpha",
    info: "Creators, Innovators",
    time: "10 Lectures, 20 Hours",
    category: categories[2],
    img: "assets/img/courses/EM1.jpg",
    url: 'EmbeddedARAlpha.html'
  },
  {
    heading: "Embedded AR Series: Beta",
    info: "Creators, Innovators",
    time: "10 Lectures, 20 Hours",
    category: categories[2],
    img: "assets/img/courses/EM2.jpg",
    url: 'EmbeddedARBeta.html'
  },
  {
    heading: "Embedded AR Series: Gamma",
    info: "Creators, Innovators",
    time: "10 Lectures, 20 Hours",
    category: categories[2],
    img: "assets/img/courses/EM3.jpg",
    url: 'EmbeddedARGamma.html'
  },
  {
    heading: "Kodigo Python Series: Alpha",
    info: "Creators, Innovators",
    time: "10 Lectures, 15 Hours",
    category: categories[1],
    img: "assets/img/courses/Python1.jpg",
    url: 'KodigoPyAlpha.html'
  },
  {
    heading: "Kodigo Python Series: Beta",
    info: "Creators, Innovators",
    time: "10 Lectures, 15 Hours",
    category: categories[1],
    img: "assets/img/courses/Python2.jpg",
    url: 'KodigoPyBeta.html'
  },
  {
    heading: "Kodigo Python Series: Gamma",
    info: "Creators, Innovators",
    time: "10 Lectures, 15 Hours",
    category: categories[1],
    img: "assets/img/courses/Python3.jpg",
    url: 'KodigoPyGamma.html'
  },
  {
    heading: "Kodigo Java-Processing Series: Alpha",
    info: "Creators, Innovators",
    time: "10 Lectures, 15 Hours",
    category: categories[1],
    img: "assets/img/courses/Java1.jpg",
    url: 'KodigoJaPrAlpha.html'
  },
  {
    heading: "Kodigo Java-Processing Series: Beta",
    info: "Creators, Innovators",
    time: "10 Lectures, 15 Hours",
    category: categories[1],
    img: "assets/img/courses/Java2.jpg",
    url: 'KodigoJaPrBeta.html'
  },
  {
    heading: "Kodigo Java-Processing Series: Beta",
    info: "Creators, Innovators",
    time: "10 Lectures, 15 Hours",
    category: categories[1],
    img: "assets/img/courses/Java3.jpg",
    url: 'KodigoJaPrGamma.html'
  }
];

const adjustClasses = () => {
  var elements = Array.from(
    document.getElementsByClassName("paginationjs-page")
  );

  elements.forEach(ele => {
    var classes = ele.firstChild.classList;
    classes.add(...["page-link", "iconbox", "iconbox-sm", "rounded-0"]);
  });

  document
    .getElementsByClassName("paginationjs-prev")[0]
    .firstChild.classList.add(
      ...["page-link", "iconbox", "iconbox-sm", "rounded-0"]
    );

  document
    .getElementsByClassName("paginationjs-next")[0]
    .firstChild.classList.add(
      ...["page-link", "iconbox", "iconbox-sm", "rounded-0"]
    );

  var liElements = Array.from(
    document.querySelector("#pagination-root > div.paginationjs > div > ul").children
  );

  liElements.forEach(li => {
    li.classList.add(...["page-item", "mx-1"]);
  });
};

const filterByCategory = (data, category) => {
  if (category === 'All Courses') {
    return data;
  }
  return data.filter((datum) => datum.category === category);
}

const filterByInfo = (data, info) => {
  if (info === 'All') {
    return data;
  }
  return data.filter((datum) => datum.info.includes(info));
}

let selectedFilter = {
  category: 'All Courses',
  info: 'All'
}

const setFilterCategory = (category) => {
  console.log('Setting category: ', category);
  selectedFilter.category = category;
}

const setFilterIfno = (info) => {
  selectedFilter.info = info;
}

const categorySelectHandler = (category) => {
  setFilterCategory(category);
  initPagination();
}

const infoSelectHandler = (info) => {
  setFilterIfno(info);
  initPagination();
}


const initPagination = () => {
    $("#pagination-root").pagination({
        dataSource: function(done) {
          done(filterByInfo(filterByCategory(data, selectedFilter.category), selectedFilter.info));
        },
        pageSize: 3,
        ulClassName: "pagination pagination-primary justify-content-center",
        activeClassName: "active",
        afterInit: () => {adjustClasses()},
        afterPaging: () => {adjustClasses()},
        callback: (data, pagination) => {
            console.log(data);
            $('#courses-root').empty();
            let coursesRoot = document.getElementById('courses-root');
            data
            .map(({img, heading, url, info, time}) => {
              let div = document.createElement('div');
              div.classList.add(...["list-card", "align-items-center", "shadow-v1", "marginTop-30"]);
              div.innerHTML = `<div class="col-lg-5 px-lg-4 my-4">
              <img class="w-100" src="${img}" alt="" />
            </div>
            <div class="col-lg-7 pr-lg-4 my-4">
              <div class="media justify-content-between">
                <div class="group">
                  <a href="${url}" class="h4">
                    ${heading}
                  </a>
                  <ul class="list-inline mt-2">
                    <li class="list-inline-item mr-2">
                      <i class="ti-user mr-2"></i>
                      ${info}
                    </li>
                  </ul>
                  <ul class="list-inline mt-2">
                    <li class="list-inline-item mr-2">
                      <i class="ti-time small mr-2"></i>
                      ${time}
                    </li>
                  </ul>
                </div>
              </div>
            </div>`;
            return div;
            })
            .forEach((card) => {
              coursesRoot.appendChild(card);
            })
        }
      });
}
