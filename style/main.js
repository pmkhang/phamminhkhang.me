//Tạo Nút Scroll to top
const scrollBtn = document.querySelector('#scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//tạo nút tắt mở toggle
const toggleIcon = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const navLinks = document.querySelectorAll('.close-menu a');
const nav_barMenu = document.querySelector('#myBgMenu');



toggleIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
  });
});



// Lặp qua từng mục và đăng ký sự kiện click







//tạo header trong suốt và khi scroll hết banner thì đổi màu theo yêu cầu
const myBanner = document.querySelector('#myBanner');
const myHeader = document.querySelector('#myHeader');
const myBgMenu = document.querySelector('#myBgMenu');

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= myBanner.offsetHeight) {
        myHeader.classList.add('white');
    } else {
        myHeader.classList.remove('white');
    }
});

window.addEventListener('scroll', () => {
    const banner = document.querySelector('.banner');
    const logo = document.querySelector('.logo');

    if (window.pageYOffset >= banner.offsetHeight) {
        logo.classList.add('white-bg');
        document.querySelectorAll('.menu-white').forEach(item => {
            item.classList.add('white-bg');
        });
    } else {
        logo.classList.remove('white-bg');
        document.querySelectorAll('.menu-white').forEach(item => {
            item.classList.remove('white-bg');
        });
    }
});

//Khi ấn vào các menu tự scroll vào khu vực mình muốn
const menuItems = document.querySelectorAll('.menu-white');
menuItems.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();

        const targetId = item.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval;

function showSlide(n) {
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }

    // Ẩn tất cả các slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Hiển thị slide hiện tại
    slides[currentSlide].style.display = 'block';
}

function startSlideInterval() {
    slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 4000);
}

function stopSlideInterval() {
    clearInterval(slideInterval);
}

// Hiển thị slide đầu tiên
showSlide(currentSlide);

// Tự động chuyển slide sau mỗi 5 giây
startSlideInterval();

function showDate() {
    const daysOfWeek = {
      0: 'Chủ Nhật',
      1: 'Thứ Hai',
      2: 'Thứ Ba',
      3: 'Thứ Tư',
      4: 'Thứ Năm',
      5: 'Thứ Sáu',
      6: 'Thứ Bảy'
    };
  
    const date = new Date();
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    const dayOfWeekName = daysOfWeek[date.getDay()];
  
    const formattedDate = `${dayOfWeekName}, Ngày ${day} Tháng ${month} Năm ${year}`;
    document.getElementById('days').innerHTML = formattedDate;
  
    setTimeout(showDate, 1000);
  }
  showDate();

  function showTime() {
    const date = new Date();
    const time = date.toLocaleTimeString('en-US', { hour12: false });
    const formattedTime = time.replace(/:/g, ' : ');
    document.getElementById('time').innerHTML = formattedTime;
    setTimeout(showTime, 999);
  }
  showTime();

//Hiệu ứng đổi chữ
var tyoingEffect = new Typed(".multi-text", {
        strings: ["Coder", "Designer"],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1900,
        loop: true,
      });
