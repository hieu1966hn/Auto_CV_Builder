const form = document.getElementById('cv-form');
const preview = {
  name: document.getElementById('preview-name'),
  headline: document.getElementById('preview-headline'),
  summary: document.getElementById('preview-summary'),
  location: document.getElementById('preview-location'),
  email: document.getElementById('preview-email'),
  phone: document.getElementById('preview-phone'),
  skills: document.getElementById('preview-skills'),
  experience: document.getElementById('preview-experience'),
  education: document.getElementById('preview-education'),
};

const parseLines = (value) =>
  value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

const updateList = (element, items) => {
  element.innerHTML = '';
  if (items.length === 0) {
    element.innerHTML = '<li>Chưa có dữ liệu</li>';
    return;
  }
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    element.appendChild(li);
  });
};

const refreshPreview = () => {
  const data = new FormData(form);
  const skillsValue = data.get('skills')?.trim() || '';
  preview.name.textContent = data.get('fullName') || 'Họ Tên';
  preview.headline.textContent = data.get('headline') || 'Vị trí mong muốn';
  preview.summary.textContent = data.get('summary') || 'Tóm tắt ngắn gọn về kỹ năng và mục tiêu nghề nghiệp.';
  preview.location.textContent = data.get('location') || 'Địa chỉ';
  preview.email.textContent = data.get('email') || 'Email';
  preview.phone.textContent = data.get('phone') || 'Điện thoại';

  const skillsArray = skillsValue ? skillsValue.split(',').map((skill) => skill.trim()).filter(Boolean) : [];
  updateList(preview.skills, skillsArray.length ? skillsArray : ['Chưa thêm kỹ năng']);

  const experienceLines = parseLines(data.get('experience') || '');
  updateList(preview.experience, experienceLines);

  const educationLines = parseLines(data.get('education') || '');
  updateList(preview.education, educationLines);
};

form.addEventListener('input', () => {
  refreshPreview();
});

document.getElementById('generate-btn')?.addEventListener('click', () => {
  refreshPreview();
  form.scrollIntoView({ behavior: 'smooth' });
});

refreshPreview();
