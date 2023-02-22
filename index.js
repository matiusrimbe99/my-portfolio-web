const form = prompt("Masukkan Nama Anda");
const element = document.getElementById("name");
element.innerText = form;

function validate() {
  document.getElementById("error_name").style.visibility = "hidden";
  document.getElementById("error_birth").style.visibility = "hidden";
  document.getElementById("error_jk").style.visibility = "hidden";
  document.getElementById("error_message").style.visibility = "hidden";
}

function btn_submit() {
  const today = new Date();
  let name = document.forms["form"]["full_name"].value;
  let tgl_lahir = document.forms["form"]["tgl_lahir"].value;
  let jenis_kelamin = document.forms["form"]["jenis_kelamin"].value;
  let pesan = document.forms["form"]["pesan"].value;

  const time_today = document.getElementById("time_today");
  const result_name = document.getElementById("result_name");
  const result_tgl_lahir = document.getElementById("result_tgl_lahir");
  const result_jk = document.getElementById("result_jk");
  const result_message = document.getElementById("result_message");

  let error_name;
  let error_birth;
  let error_jk;
  let error_message;

  if (name == undefined || name.trim() == "") {
    document.getElementById("error_name").style.visibility = "visible";

    error_name = "Nama lengkap harus diisi.";
  } else {
    error_name = "";
  }
  if (tgl_lahir == undefined || tgl_lahir.trim() == "") {
    document.getElementById("error_birth").style.visibility = "visible";

    error_birth = "Tanggal lahir harus diisi.";
  } else {
    error_birth = "";
  }
  if (jenis_kelamin == undefined || jenis_kelamin.trim() == "") {
    document.getElementById("error_jk").style.visibility = "visible";

    error_jk = "Jenis kelamin harus diisi.";
  } else {
    error_jk = "";
  }
  if (pesan == undefined || pesan.trim() == "") {
    document.getElementById("error_message").style.visibility = "visible";
    error_message = "Pesan harus diisi.";
  } else {
    error_message = "";
  }

  const errors = {
    full_name: error_name,
    tgl_lahir: error_birth,
    jenis_kelamin: error_jk,
    pesan: error_message,
  };

  const e_error_name = document.getElementById("error_name");
  const e_error_birth = document.getElementById("error_birth");
  const e_error_jk = document.getElementById("error_jk");
  const e_error_message = document.getElementById("error_message");

  if (
    errors.full_name == "" &&
    errors.tgl_lahir == "" &&
    errors.jenis_kelamin == "" &&
    errors.pesan == ""
  ) {
    time_today.innerText = today;
    result_name.innerText = name;
    result_tgl_lahir.innerText = tgl_lahir;
    result_jk.innerText = jenis_kelamin;
    result_message.innerText = pesan;
  } else {
    e_error_name.innerText = errors.full_name;
    e_error_birth.innerText = errors.tgl_lahir;
    e_error_jk.innerText = errors.jenis_kelamin;
    e_error_message.innerText = errors.pesan;
  }
}

let currentIndex = 1;
sliderItem(currentIndex);

function setSlider(num) {
  sliderItem((currentIndex += num));
}

function sliderItem(num) {
  let x;
  let slides = document.getElementsByClassName("slider-item");
  if (num > slides.length) {
    currentIndex = 1;
  }
  if (num < 1) {
    currentIndex = slides.length;
  }
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }
  slides[currentIndex - 1].style.display = "block";
}
